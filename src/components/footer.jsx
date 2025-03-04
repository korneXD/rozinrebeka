"use client";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { facebook, instagram, maps, tiktok } from "@/lib/constants";
import { MapPin } from "lucide-react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-beige flex w-full py-12"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="flex items-center justify-center gap-12">
          <Link href={instagram} target="_blank">
            <FaInstagram className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
          </Link>
          <Link href={facebook} target="_blank">
            <FaFacebook className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
          </Link>
          <Link href={tiktok} target="_blank">
            <FaTiktok className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
          </Link>
          <Link target="_blank" href={maps}>
            <MapPin className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
          </Link>
        </div>
        <div className="border-cappuccino/10 text-cappuccino/60 text-md mt-8 w-full border-t pt-8 text-center font-serif">
          {year} - Rozin Rebeka
        </div>
        <button className="text-cappuccino font-serif text-sm">
          Készítette:{" "}
          <Link href={"https://www.koresz.hu"} target="_blank">
            koresz.hu
          </Link>
        </button>
      </div>
    </motion.footer>
  );
}
