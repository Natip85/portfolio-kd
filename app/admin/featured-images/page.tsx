import AddFeaturedImagesForm from "@/components/AddFeaturedImagesForm";
import db from "@/db/db";

async function getFeaturedImages() {
  const featuredImages = await db.featuredImages.findMany({});

  return featuredImages;
}
export default async function FeaturedImagesPage() {
  const featuredImages = await getFeaturedImages();

  return (
    <div className="flex flex-col gap-10 h-screen p-4 md:p-12">
      <h1 className="text-white text-2xl md:text-4xl">Featured images</h1>
      <div className="p-5 max-w-4xl bg-black mx-auto border-secondary rounded-md shadow-sm shadow-white">
        <AddFeaturedImagesForm images={featuredImages} />
      </div>
    </div>
  );
}
