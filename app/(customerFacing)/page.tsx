import ZoomParallax from "@/components/ZoomParallax";
import db from "@/db/db";
async function getFeaturedImages() {
  const featuredImages = await db.featuredImages.findMany({});

  const featuredImageUrls = featuredImages.flatMap((featured) =>
    featured.images.map((img) => img.url)
  );

  return { featuredImageUrls };
}
export default async function Home() {
  const { featuredImageUrls } = await getFeaturedImages();

  return (
    <div>
      <ZoomParallax imgs={featuredImageUrls} />
    </div>
  );
}
