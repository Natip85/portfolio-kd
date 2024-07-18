import { LayoutGrid } from "@/components/LayoutGrid";
import LayoutGridContent from "@/components/LayoutGridContent";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import db from "@/db/db";

async function getGalleryImages() {
  const galleryImages = await db.galleryImages.findMany({});

  return galleryImages;
}
export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <div>
      <div>
        <MultiLayerParallax />
      </div>
      <div>
        <LayoutGrid
          cards={galleryImages.flatMap((gallery, index) =>
            gallery.images.map((img, imgIndex) => {
              const cardIndex = index * 15 + imgIndex;
              let spanClass = "";

              if (cardIndex < 10) {
                // First 10 images: index % 5 === 0 for larger grid span
                spanClass =
                  imgIndex % 4 === 0
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
                id: `${gallery.id}-${imgIndex}`,
                content: (
                  <LayoutGridContent
                    key={`${gallery.id}-${imgIndex}`}
                    title={img.title}
                    description={img.description}
                  />
                ),
                className: spanClass,
                thumbnail: img.image.url,
              };
            })
          )}
        />
      </div>
    </div>
  );
}
