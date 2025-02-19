"use client";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { facebook, instagram, tiktok } from "@/lib/constants";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.footer
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
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
        </div>
        <div className="border-cappuccino/10 text-cappuccino/60 text-md mt-8 w-full border-t pt-8 text-center font-serif">
          {year} - Rozin Rebeka
        </div>
      </div>
    </motion.footer>
  );
}
