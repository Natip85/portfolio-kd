"use client";
import * as z from "zod";
import { UploadButton } from "@/components/uploadthing";
import { GalleryImages, Image as prismaImage } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlusSquare, Trash2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
type AddGalleryImagesFormProps = {
  images: GalleryImages[];
};
export const addGalleryImagesSchema = z.object({
  images: z
    .array(
      z.object({
        title: z
          .string()
          .min(3, { message: "Title must be at least 3 characters long" }),
        description: z.string().min(10, {
          message: "Description must be at least 10 characters long",
        }),
        image: z.object({
          key: z.string(),
          name: z.string(),
          url: z.string(),
          size: z.number(),
          serverData: z.object({
            uploadedBy: z.string(),
          }),
        }),
      })
    )
    .nonempty(),
});
export default function AddGalleryImagesForm({
  images,
}: AddGalleryImagesFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [imageUrls, setImageUrls] = useState<prismaImage[]>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const form = useForm<z.infer<typeof addGalleryImagesSchema>>({
    resolver: zodResolver(addGalleryImagesSchema),
    defaultValues: {
      images: images.flatMap((img) => img.images) || undefined,
    },
  });
  useEffect(() => {
    if (images.length > 0) {
      const initialUrls = images.flatMap((img) =>
        img.images.map((i) => i.image)
      );
      setImageUrls(initialUrls);
    }
  }, []);
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "images",
  });
  const { mutate: createGallery, isPending } = useMutation({
    mutationFn: async ({ images }: z.infer<typeof addGalleryImagesSchema>) => {
      const response = await axios.post("/api/galleryImages", {
        images,
      });
      return response.data;
    },
  });
  const onSubmit = async (data: z.infer<typeof addGalleryImagesSchema>) => {
    createGallery(data, {
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
        images: GalleryImages;
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <ul className="flex flex-col gap-3">
          {fields.map((item, index) => (
            <li key={item.id} className="border rounded-md p-5">
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex-1 flex flex-col gap-3">
                  <FormField
                    control={form.control}
                    name={`images.${index}.title`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="title" className="text-secondary">
                          Image title
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="title"
                            // placeholder="Image title..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please provide the title of the image. This will be
                          displayed to customers.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`images.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          htmlFor="description"
                          className="text-secondary"
                        >
                          Image description
                        </FormLabel>
                        <FormControl>
                          <Input
                            id="description"
                            // placeholder="Image description..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe the image in detail. This helps customers
                          understand what the image is about.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {imageUrls.length > index && imageUrls[index] ? (
                  <div className="w-1/3 relative aspect-square size-32">
                    <Image
                      src={imageUrls[index].url}
                      alt={"gallery image"}
                      fill
                    />
                  </div>
                ) : (
                  <FormField
                    control={form.control}
                    name={`images.${index}.image`}
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormControl>
                          <UploadButton
                            className="mt-4 ut-button:bg-[#78f7a2] ut-button:ut-readying:bg-[#78f7a2]/50 ut-button:text-black"
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              setImageUrls((prevState) => {
                                const updatedState = prevState
                                  ? [
                                      ...prevState,
                                      ...res.map((img) => ({ ...img, index })),
                                    ]
                                  : res.map((img) => ({ ...img, index }));
                                return updatedState;
                              });

                              form.setValue(`images.${index}.image`, res[0]);
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
                        <FormMessage className="text-center" />
                      </FormItem>
                    )}
                  />
                )}
                <div className="self-start">
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => {
                      remove(index);
                      setImageUrls((prevState) => {
                        const updatedState = prevState.filter(
                          (_, i) => i !== index
                        );
                        return updatedState;
                      });
                    }}
                    className="hover:bg-transparent"
                  >
                    <Trash2 className="text-destructive" />
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <Button
            type="button"
            onClick={() =>
              append({
                title: "",
                description: "",
                image: {
                  name: "",
                  serverData: {
                    uploadedBy: "",
                  },
                  key: "",
                  url: "",
                  size: 0,
                },
              })
            }
          >
            <PlusSquare className="mr-2" />
            {imageUrls.length === 0
              ? "Upload some images"
              : "Add another image"}
          </Button>
          {form.getFieldState("images").isDirty && (
            <Button
              disabled={isPending || isImageLoading}
              variant={"outline"}
              type="submit"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
