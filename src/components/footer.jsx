"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import { motion, useInView } from "motion/react";

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
            <h5 className="text-cappuccino mb-4 font-medium">Elérhetőségeim</h5>
            <Link
              href="tel:+36 20 217 0977"
              className="flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <p>+36 20 217 0977</p>
            </Link>
            <Link
              href="mailto:rebeka.kozmetikus88@gmail.com"
              className="flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              <p>rebeka.kozmetikus88@gmail.com</p>
            </Link>
            <Link
              target="_blank"
              href="https://www.google.hu/maps/place/Rozin+Rebeka+Kozmetikus+%C3%A9s+Sminkes/@46.7992841,19.3585035,573m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4743cb0030eb7497:0x468a5ab2d0d5dd99!8m2!3d46.7992841!4d19.3610784!16s%2Fg%2F11x0ggf46q?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
              className="flex items-center justify-center gap-2 md:hidden"
            >
              <MapPin className="h-5 w-5" />
              <p>Izsák Arany János utca 2</p>
            </Link>
          </div>
          <div className="flex w-1/3 flex-col items-center justify-center gap-2 md:w-fit">
            <h5 className="text-cappuccino mb-4 font-medium">Termékek</h5>
            <Link
              href={"https://rozinrebeka.wellu.eu/register.html?__country=HU"}
              target="_blank"
              className="text-cappuccino/60 font-serif underline"
            >
              Link
            </Link>
            <QRCode
              value="https://rozinrebeka.wellu.eu/register.html?__country=HU"
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
              href="https://www.google.hu/maps/place/Rozin+Rebeka+Kozmetikus+%C3%A9s+Sminkes/@46.7992841,19.3585035,573m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4743cb0030eb7497:0x468a5ab2d0d5dd99!8m2!3d46.7992841!4d19.3610784!16s%2Fg%2F11x0ggf46q?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
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
