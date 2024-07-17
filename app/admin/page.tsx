import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// const feauturedImages = [
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//   "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
// ];
async function getFeaturedImages() {
  const featuredImages = await db.featuredImages.findMany({});

  const featuredImageUrls = featuredImages.flatMap((featured) =>
    featured.images.map((img) => img.url)
  );

  return { featuredImageUrls };
}
async function getGalleryImages() {
  const galleryImages = await db.galleryImages.findMany({});

  const imageUrls = galleryImages.flatMap((gallery) =>
    gallery.images.map((img) => img.image.url)
  );

  return { imageUrls };
}
export default async function AdminPage() {
  const { imageUrls } = await getGalleryImages();
  const { featuredImageUrls } = await getFeaturedImages();
  return (
    <div className="flex flex-col gap-10 p-4 md:p-12">
      <h1 className="text-white text-2xl md:text-4xl">Dashboard</h1>
      <div className="min-w-xl mx-auto bg-black border-secondary shadow-sm shadow-white rounded-md p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg text-white">
            Currently active featured images
          </h3>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={"/admin/featured-images"}>
              <span>
                <Edit className="size-4 mr-2" />
              </span>
              <span>Edit</span>
            </Link>
          </Button>
        </div>
        <div className="py-10 px-16 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 gap-4 ">
          {featuredImageUrls.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square size-20 md:size-24 lg:size-36"
            >
              <Image src={src} fill priority alt="image" sizes="20vw" />
              {index === 0 && ( // Add text only over the first image
                <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                  <p className="text-white text-xs font-thin">Art by</p>
                  <h1 className="tracking-wider text-center text-sm text-white ">
                    KINERET DVIR
                  </h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-black mx-auto border-secondary rounded-md shadow-sm shadow-white p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg text-white">
            Currently active gallery images
          </h3>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={"/admin/gallery-images"}>
              <span>
                <Edit className="size-4 mr-2" />
              </span>
              <span>Edit</span>
            </Link>
          </Button>
        </div>
        <div className="py-10 px-16 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 gap-4 ">
          {imageUrls.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square size-20 md:size-24 lg:size-36"
            >
              <Image src={src || ""} fill priority alt="image" sizes="20vw" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
