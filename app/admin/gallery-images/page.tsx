import AddGalleryImagesForm from "@/components/AddGalleryImagesForm";
import db from "@/db/db";

async function getGalleryImages() {
  const galleryImages = await db.galleryImages.findMany({});

  return galleryImages;
}
export default async function GalleryImagesPage() {
  const galleryImages = await getGalleryImages();

  return (
    <div className="flex flex-col gap-10 h-screen p-4 md:p-12">
      <h1 className="text-white text-2xl md:text-4xl">Gallery images</h1>
      <div className="p-5 max-w-4xl mx-auto">
        <AddGalleryImagesForm images={galleryImages} />
      </div>
    </div>
  );
}
