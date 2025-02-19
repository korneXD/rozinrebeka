"use client";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import { motion, useInView } from "motion/react";
import { termek } from "@/lib/constants";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-latte shadow-secondary-foreground relative mx-auto my-12 flex w-fit max-w-2xl flex-col items-center justify-center rounded-3xl px-4 py-8 shadow-sm select-none md:w-full md:flex-row"
    >
      <div className="relative flex w-full items-center justify-center md:w-2/3">
        <Sparkles className="text-cream absolute -top-3 -left-3 size-12 rotate-20" />
        <Sparkles className="text-cream absolute -right-3 -bottom-3 size-12 -rotate-20 md:right-12" />
        <p className="text-cappuccino z-10 text-center font-serif text-xl">
          “Személyre szabott arcápolási rutin professzionális termékekkel!
          Fedezd fel a Larens prémium minőségű bőrápolási termékeit, és élvezd a
          hatékony, tudományosan fejlesztett formulákat. Regisztrálj az alábbi
          linken, és rendeld meg kedvenceidet kényelmesen, házhoz szállítással!”
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center md:w-1/3">
        <h4 className="text-cappuccino mt-10 text-center font-serif text-xl md:mt-0">
          Használd a linkem,
        </h4>
        <Link
          href={termek}
          target="_blank"
          className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark my-4 rounded-full px-8 py-2 font-sans font-bold tracking-wide shadow-md"
        >
          Link
        </Link>
        <p className="text-cappuccino text-center font-serif text-xl">
          vagy olvasd be a QR kódot!
        </p>
        <QRCode
          value={termek}
          qrStyle="square"
          eyeRadius={15}
          eyeColor="#4a3728"
          fgColor="#6b5141"
          bgColor="#e6dccd"
        />
      </div>
    </motion.section>
  );
}
