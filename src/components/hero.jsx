"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 1.2 }}
      className="container mx-auto px-4 py-16 select-none md:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <h1 className="text-cappuccino z-10 font-serif text-5xl leading-tight md:text-6xl">
            Fókuszban a <span className="italic">Bőröd</span>.
          </h1>
          <p className="text-cappuccino/80 text-lg">
            Luxus bőrápolási kezelések, amelyek kiemelik egyedi szépséged!
          </p>
          <Link
            href={"#contact"}
            className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark rounded-full px-8 py-2 font-sans font-bold shadow-md transition-all"
          >
            Időpontfoglalás
          </Link>
        </div>
        <div className="lg:col-span-2">
          <div className="relative mx-auto size-52 md:size-64">
            <div className="bg-latte shadow-secondary-foreground absolute inset-0 rounded-full shadow-md"></div>
            <div className="bg-beige absolute inset-2 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//hero.webp`}
                className="h-full w-full object-cover"
                fill
                priority
                quality={75}
                draggable={false}
                alt="Bőrápolás képe"
              />
            </div>
            <div className="bg-cappuccino shadow-latte-dark absolute -right-4 -bottom-4 flex size-20 items-center justify-center rounded-full shadow-xs md:size-24">
              <span className="text-cream font-serif text-xl">Rebeka</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
