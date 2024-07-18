"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MultiLayerParallax({
  category,
}: {
  category?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);
  return (
    <motion.div
      initial={{ x: 400, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      ref={ref}
      className="w-full h-[60vh] overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-2xl md:text-4xl z-10"
      >
        {category === "MULTIMEDIACOLLAGE" ? "MULTIMEDIA COLLAGE" : category}
        {!category && "All images"}
      </motion.h1>
      <motion.div
        style={{
          y: backgroundY,
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          fill
          priority
          src={"https://utfs.io/f/625252f9-dfe1-451b-b2f9-788cb7a05034-1d.jpeg"}
          alt="logo"
        />
      </motion.div>
    </motion.div>
  );
}
