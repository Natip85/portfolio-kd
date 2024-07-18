"use client";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { TransitionLink } from "@/components/TransitionLink";

export default function AboutPage() {
  return (
    <div className="h-screen flex flex-col md:flex-row gap-3 px-4 md:px-14">
      <motion.div
        initial={{ x: -400, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex-1 min-w-[400px]"
      >
        <div className="relative w-full h-full">
          <motion.div
            initial={{ x: 0, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="z-10 absolute top-[12%] left-[15%]"
          >
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              KINERET
            </h1>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              DVIR
            </h1>
          </motion.div>
          <Image
            src="https://utfs.io/f/5fd4673e-5930-4d35-ac7c-48f6caa452f3-go0oug.jpg"
            alt="Profile image"
            layout="fill"
            objectFit="cover"
            className="diagonalImage"
          />
        </div>
      </motion.div>
      <div className="flex-1 content-center ">
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          className="w-3/4 mx-auto space-y-5 "
        >
          <h3 className="text-4xl text-white">ABOUT ME</h3>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            facere consequatur vel culpa quibusdam exercitationem quaerat
            distinctio corporis quos iusto eos delectus id quod, debitis odio
            quasi tempore reprehenderit et?
          </p>
          <TransitionLink
            href={"/contact"}
            className={buttonVariants({ variant: "outline" })}
          >
            Contact me
          </TransitionLink>
        </motion.div>
      </div>
    </div>
  );
}
