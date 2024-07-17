"use client";
import * as z from "zod";
import { FeaturedImages, Image as prismaImage } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { UploadButton } from "./uploadthing";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type AddFeaturedImagesFormProps = {
  images: FeaturedImages[];
};
export const addFeaturedImagesSchema = z.object({
  images: z.array(
    z.object({
      key: z.string(),
      name: z.string(),
      url: z.string(),
      size: z.number(),
      serverData: z.object({
        uploadedBy: z.string(),
      }),
    })
  ),
});
export default function AddFeaturedImagesForm({
  images,
}: AddFeaturedImagesFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [imageUrls, setImageUrls] = useState<prismaImage[]>([]);

  const [isImageLoading, setIsImageLoading] = useState(false);
  const form = useForm<z.infer<typeof addFeaturedImagesSchema>>({
    resolver: zodResolver(addFeaturedImagesSchema),
    defaultValues: {
      images: images.flatMap((img) => img.images) || undefined,
    },
  });
  console.log("fdgfgf");

  useEffect(() => {
    if (images) {
      setImageUrls(images.flatMap((img) => img.images));
    }
  }, []);
  const { mutate: createfeatured, isPending } = useMutation({
    mutationFn: async ({ images }: z.infer<typeof addFeaturedImagesSchema>) => {
      const response = await axios.post("/api/featuredImages", {
        images,
      });
      return response.data;
    },
  });
  const onSubmit = async (data: z.infer<typeof addFeaturedImagesSchema>) => {
    createfeatured(data, {
      onError: (error) => {
        toast({
          title: "Error",
          description: `Something went wrong, please try again. ${error}`,
          variant: "destructive",
        });
      },
      onSuccess: ({
        images,
        message,
      }: {
        images: FeaturedImages;
        message: string;
      }) => {
        toast({
          title: "Success",
          description: message,
          variant: "success",
        });
        router.push(`/admin`);
        router.refresh();
      },
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {imageUrls.length !== 7 && (
          <>
            <Alert className="bg-[#191919]">
              <Terminal className="h-4 w-4 " color="white" />
              <AlertTitle className="text-white">Heads up!</AlertTitle>
              <AlertDescription>
                <p className="text-white">
                  You need to upload exactly 7 images to submit.
                </p>
                <p className="text-white">
                  Keep in mind, the FIRST image that you upload will be the main
                  image on the home page.{" "}
                </p>
              </AlertDescription>
            </Alert>
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadButton
                      className="mt-4 ut-button:bg-[#78f7a2] ut-button:ut-readying:bg-[#78f7a2]/50 ut-button:text-black"
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        setImageUrls(res);
                        form.setValue("images", res);
                        setIsImageLoading(false);
                      }}
                      onUploadError={(error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                      onUploadProgress={() => {
                        setIsImageLoading(true);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {imageUrls.map((img) => (
            <div key={img.key} className="relative aspect-video size-36">
              <Image src={img.url} alt="Featured images" fill />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant={"ghost"}
            className="text-destructive hover:bg-destructive"
            type="button"
            onClick={() => setImageUrls([])}
          >
            Reset images
          </Button>
          <Button
            type="submit"
            variant={"outline"}
            disabled={isImageLoading || imageUrls.length !== 7}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
