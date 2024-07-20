"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { TransitionLink } from "@/components/TransitionLink";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-3 px-4 lg:px-14">
      <motion.div
        initial={{ x: -400, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex-1 min-w-[400px] hidden lg:block"
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={{ x: 0, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="z-10 absolute top-[10%] left-[15%]"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              KINERET
            </h1>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              DVIR
            </h1>
          </motion.div>
          <Image
            src={"/profile-pic.jpeg"}
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            className="diagonalImage"
          />
        </div>
      </motion.div>
      <div className="flex-1 content-center ">
        <motion.div
          initial={{ x: -400, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="lg:hidden h-[50vh] mb-10"
        >
          <div className="relative w-full h-full">
            <motion.div
              initial={{ x: 0, y: -200, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="z-10 absolute top-[10%] left-[15%]"
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                KINERET
              </h1>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                DVIR
              </h1>
            </motion.div>
            <Image
              src={"/profile-pic.jpeg"}
              alt="Profile image"
              layout="fill"
              objectFit="cover"
              className="diagonalImage"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          className="w-3/4 mx-auto space-y-5 "
        >
          <h3 className="text-4xl text-white">Artist statement</h3>
          <p className="text-white">
            Hi there, my name is Kineret and I'm a visual artist. I like to
            experiment with different medium and often experiment with colors,
            materials, shapes and techniques. My inspiration is derived from
            nature - its colors, sounds, shapes and forms. I find that the
            process of creativity is most often more significant than the final
            product. When choosing a subject or a theme and when the ideas start
            forming in my head, I start searching for objects from my natural
            surroundings. For example, a seashell, a rock or a tree can give me
            the drive for my next creation. Observing and focusing on an object
            or scenery ignites my imagination to take over. When I start drawing
            or painting, the shapes, colours and composition come together. It
            is not always clear what the outcome will be, but I let myself
            experiment and enjoy the process. Not knowing what the painting or
            drawing will end up looking like, enables a dynamic creative
            process. Spontaneity, playfulness, experimentation, and discovery
            characterise my artwork. Art has always been a significant part of
            my life and I am trained both as an artist and as an art therapist.
            I currently live in Zichron Yaakov with my family. Thank you for
            visiting my website. In case you have any questions or are
            interested in purchasing something that you like, Please feel free
            to contact me via email & I will touch base with you.
          </p>
          <TransitionLink href={"/contact"}>
            <Button className="relative my-10 flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 ">
              <span className="relative z-10">Contact me</span>
            </Button>
          </TransitionLink>
        </motion.div>
      </div>
    </div>
  );
}
