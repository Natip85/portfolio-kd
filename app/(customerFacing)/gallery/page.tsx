import { LayoutGrid } from "@/components/LayoutGrid";
import LayoutGridContent from "@/components/LayoutGridContent";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import db from "@/db/db";

// const images = [
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "one",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "two",
//     description:
//       "Lorem ipsum, dolor siectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "three",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "four",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Faceres delectus in po soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "five",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possiLorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos dec iure deleniti, ipsa soluta neque distinctio!mus, error consequatur ptionem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "six",
//     description: "fdfgfgfgfgfgg",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "seven",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "eight",
//     description:
//       "LorLorem ipsum, dolFacere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!r consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "nine",
//     description:
//       "Lorem ipsum, officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "ten",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "eleven",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "twelve",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "thirteen",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "fourteen",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
//   {
//     img: "https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg",
//     title: "fifteen",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, molestiae? Esse itaque voluptatibus eos delectus in possimus, error consequatur placeat officiis exercitationem at hic iure deleniti, ipsa soluta neque distinctio!",
//   },
// ];
async function getGalleryImages() {
  const galleryImages = await db.galleryImages.findMany({});

  // const imageUrls = galleryImages.flatMap((gallery) =>
  //   gallery.images.map((img) => img.image.url)
  // );

  return galleryImages;
}
export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <div className="">
      <div>
        <MultiLayerParallax />
      </div>
      <div
      // initial={{ x: 0, y: 0, opacity: 0 }}
      // animate={{ x: 0, y: 0, opacity: 1 }}
      // transition={{ duration: 5, ease: "easeInOut" }}
      >
        <h2 className="text-2xl md:text-4xl text-white text-center my-10 font-semibold">
          Featured images
        </h2>
      </div>
      <div>
        {/* <LayoutGrid
          cards={[
            {
              id: 1,
              content: (
                <LayoutGridContent
                  title={galleryImages[0].images[0].title}
                  description={galleryImages[0].images[0].description}
                />
              ),
              className: "md:col-span-2  md:row-span-2",
              thumbnail: galleryImages[0].images[0].image.url,
            },
            {
              id: 2,
              content: (
                <LayoutGridContent
                  title={images[1].title}
                  description={images[1].description}
                />
              ),
              className: "md:row-span-2 ",
              thumbnail: images[1].img,
            },
            {
              id: 3,
              content: (
                <LayoutGridContent
                  title={images[2].title}
                  description={images[2].description}
                />
              ),
              className: "",
              thumbnail: images[2].img,
            },
            {
              id: 4,
              content: (
                <LayoutGridContent
                  title={images[3].title}
                  description={images[3].description}
                />
              ),
              className: "md:col-span-2",
              thumbnail: images[3].img,
            },
            {
              id: 5,
              content: (
                <LayoutGridContent
                  title={images[4].title}
                  description={images[4].description}
                />
              ),
              className: "md:row-span-2",
              thumbnail: images[4].img,
            },
            {
              id: 6,
              content: (
                <LayoutGridContent
                  title={images[5].title}
                  description={images[5].description}
                />
              ),
              className: "",
              thumbnail: images[5].img,
            },
            {
              id: 7,
              content: (
                <LayoutGridContent
                  title={images[6].title}
                  description={images[6].description}
                />
              ),
              className: "",
              thumbnail: images[6].img,
            },
            {
              id: 8,
              content: (
                <LayoutGridContent
                  title={images[7].title}
                  description={images[7].description}
                />
              ),
              className: "",
              thumbnail: images[7].img,
            },
            {
              id: 9,
              content: (
                <LayoutGridContent
                  title={images[8].title}
                  description={images[8].description}
                />
              ),
              className: "",
              thumbnail: images[8].img,
            },
            {
              id: 10,
              content: (
                <LayoutGridContent
                  title={images[9].title}
                  description={images[9].description}
                />
              ),
              className: "",
              thumbnail: images[9].img,
            },
            {
              id: 11,
              content: (
                <LayoutGridContent
                  title={images[10].title}
                  description={images[10].description}
                />
              ),
              className: "",
              thumbnail: images[10].img,
            },
            {
              id: 12,
              content: (
                <LayoutGridContent
                  title={images[11].title}
                  description={images[11].description}
                />
              ),
              className: "",
              thumbnail: images[11].img,
            },
            {
              id: 13,
              content: (
                <LayoutGridContent
                  title={images[12].title}
                  description={images[12].description}
                />
              ),
              className: "md:col-span-2",
              thumbnail: images[12].img,
            },
            {
              id: 14,
              content: (
                <LayoutGridContent
                  title={images[13].title}
                  description={images[13].description}
                />
              ),
              className: "",
              thumbnail: images[13].img,
            },
            {
              id: 15,
              content: (
                <LayoutGridContent
                  title={images[14].title}
                  description={images[14].description}
                />
              ),
              className: "",
              thumbnail: images[14].img,
            },
          ]}
        /> */}
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
