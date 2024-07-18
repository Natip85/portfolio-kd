"use client";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="p-5 md:p-10">
      <motion.h1
        initial={{ x: 400, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-2xl md:text-4xl lg:text-6xl text-white text-center my-10 font-semibold"
      >
        CONTACT
      </motion.h1>

      <motion.div
        initial={{ x: 0, y: 400, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="bg-black flex flex-col md:flex-row gap-10 justify-between max-w-5xl p-10 mx-auto"
      >
        <div className="flex-1 flex flex-col justify-around gap-10">
          <h2 className="tracking-wider text-2xl  md:text-4xl font-thin text-white my-5 ">
            {"Send me a message".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </h2>
          <p className="text-white text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            beatae ipsam magni autem dolorem soluta quam iusto suscipit eius.
            Pariatur beatae eveniet accusamus eius natus iure provident nisi
            iusto minima.
          </p>
          <Link href="tel:+972527533703" className="text-white">
            +972 52 699 0753
          </Link>
          <div className="flex items-center gap-3">
            <span>
              <Facebook className="text-white cursor-pointer" />
            </span>
            <span>
              <Instagram className="text-white cursor-pointer" />
            </span>
          </div>
        </div>

        <ContactForm />
      </motion.div>
    </div>
  );
}
