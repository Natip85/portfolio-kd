"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface ZoomParallaxProps {
  imgs: string[];
}
export default function ZoomParallax({ imgs }: ZoomParallaxProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky overflow-hidden top-0 h-[100vh]">
        {imgs.map((src, index) => {
          const scale = [
            scale4,
            scale5,
            scale6,
            scale5,
            scale6,
            scale8,
            scale9,
          ][index % 7];
          return (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <Image src={src} fill priority alt="image" sizes="20" />
                {index === 0 && ( // Add text only over the first image
                  <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                    <p className="text-white text-sm font-thin">Art by</p>
                    <h1 className="tracking-wider text-center text-2xl sm:text-3xl md:text-4xl text-white ">
                      KINERET DVIR
                    </h1>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
