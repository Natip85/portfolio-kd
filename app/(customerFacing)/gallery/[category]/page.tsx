import { LayoutGrid } from "@/components/LayoutGrid";
import LayoutGridContent from "@/components/LayoutGridContent";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import db from "@/db/db";
async function getCategoryImages(category: string) {
  const galleryImages = await db.galleryImages.findMany({});

  const singleImgs = galleryImages.flatMap((img) => img.images);
  const filteredCategories = singleImgs.filter(
    (img) => img.category === category
  );

  return filteredCategories;
}
export default async function WatercolorPage({
  params: { category },
}: {
  params: { category: string };
}) {
  if (!category) {
    return <div>Somethng went wrong.</div>;
  }
  const categoryImages = await getCategoryImages(category);

  return (
    <div>
      <div>
        <MultiLayerParallax category={category} />
      </div>
      <div>
        <LayoutGrid
          cards={categoryImages.map((img, index) => {
            const cardIndex = index * 15 + index;
            let spanClass = "";
            if (cardIndex < 10) {
              // First 10 images: index % 5 === 0 for larger grid span
              spanClass =
                index % 4 === 0
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1";
            } else {
              // After 10th image: Apply a different pattern every 4 or 5 images
              if (
                cardIndex % 9 === 0 ||
                cardIndex % 9 === 1 ||
                cardIndex % 8 === 2 ||
                cardIndex % 10 === 3
              ) {
                spanClass = "md:col-span-2 md:row-span-2"; // Every 4th image after 10th
              } else {
                spanClass = "md:col-span-1"; // Every 5th image after 10th
              }
            }
            return {
              id: `${img.title}-${index}`,
              content: (
                <LayoutGridContent
                  key={`${img.title}-${index}`}
                  title={img.title}
                  description={img.description}
                />
              ),
              className: spanClass,
              thumbnail: img.image.url,
            };
          })}
        />
      </div>
    </div>
  );
}
