"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      review:
        "Az arckezelés egyszerűen isteni volt. A bőröm megújult és ragyogó. Ajánlom mindenkinek, aki szeretné felfrissíteni és megújítani bőrét!",
      author: "Zsofia B.",
    },
    {
      review:
        "Nagyon elégedett vagyok a kezeléssel! Professzionális és barátságos kiszolgálás. Máskor is jövök!",
      author: "Katalin V.",
    },
    {
      review:
        "A kezelés fantasztikus volt, a bőröm sokkal puhább és hidratáltabb lett! Nagyon kedves, humoros, mindenkinek ajánlom!",
      author: "Andrea M.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative container mx-auto max-w-5xl px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h3 className="text-cappuccino font-serif text-3xl italic">
          Vélemények Rólam
        </h3>
        <div className="mb-8 flex justify-center gap-6">
          <div className="border-latte-dark bg-beige h-24 w-24 overflow-hidden rounded-full border-4">
            <Image
              src="https://pskwihdbzhlxchuwxken.supabase.co/storage/v1/object/public/alapok//rebeka2.webp"
              className="h-full w-full object-cover"
              height={200}
              width={200}
              draggable={false}
              loading="lazy"
              alt="Review"
            />
          </div>
        </div>
        <div className="text-latte-dark flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <div className="flex h-full min-h-72 flex-col items-center justify-center space-y-8 overflow-hidden md:min-h-0">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full text-center"
          >
            <p className="text-cappuccino/80 text-md px-20 md:text-lg">
              "{reviews[index].review}"
            </p>
            <p className="text-cappuccino mt-4 font-serif text-xl italic">
              {reviews[index].author}
            </p>
          </motion.div>
        </div>
      </div>
      <button
        aria-label="leftArrow"
        onClick={handlePrev}
        className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute top-1/2 left-4 cursor-pointer rounded-full p-2 transition-all hover:scale-105"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="rightArrow"
        onClick={handleNext}
        className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute top-1/2 right-4 cursor-pointer rounded-full p-2 transition-all hover:scale-105"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  );
}
