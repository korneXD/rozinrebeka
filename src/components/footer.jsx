"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import { motion, useInView } from "motion/react";
import { email, maps, tel, termek } from "@/lib/constants";

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
        <div className="text-cappuccino/80 flex w-full flex-wrap items-start justify-around gap-8">
          <div className="flex w-full flex-col items-center justify-center gap-2 text-left md:w-1/3 md:items-start">
            <h5 className="text-cappuccino mb-4 font-medium">Itt érhetsz el</h5>
            <Link href={tel} className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <p>+36 20 217 0977</p>
            </Link>
            <Link
              href={email}
              className="flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <p>rebeka.kozmetikus88@gmail.com</p>
            </Link>
            <Link
              target="_blank"
              href={maps}
              className="flex items-center justify-center gap-2 md:hidden"
            >
              <MapPin className="h-5 w-5" />
              <p>Izsák Arany János utca 2</p>
            </Link>
          </div>
          <div className="flex w-1/3 flex-col items-center justify-center gap-2 md:w-fit">
            <h5 className="text-cappuccino mb-4 font-medium">Termékek</h5>
            <Link
              href={termek}
              target="_blank"
              className="text-cappuccino/60 font-serif underline"
            >
              Link
            </Link>
            <QRCode
              value={termek}
              qrStyle="square"
              eyeRadius={15}
              eyeColor="#4a3728"
              fgColor="#6b5141"
              bgColor="#f5efe7"
              size={100}
            />
            <Link
              href={"/arlista"}
              className="text-cappuccino/60 text-center font-serif underline"
            >
              Árlista megtekintése
            </Link>
          </div>
          <div className="hidden w-full flex-col items-center justify-center gap-2 md:flex md:w-1/3 md:items-end">
            <h5 className="text-cappuccino mb-4 font-medium">Szalon</h5>
            <Link
              target="_blank"
              href={maps}
              className="flex items-center justify-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              <p>Izsák, Arany János utca 2</p>
            </Link>
          </div>
        </div>
        <div className="border-cappuccino/10 text-cappuccino/60 mt-8 w-full border-t pt-8 text-center text-sm">
          {year} - Rozin Rebeka
        </div>
      </div>
    </motion.footer>
  );
}
