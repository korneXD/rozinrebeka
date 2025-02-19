"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      review:
        "Köszönöm szépen Drága Rebim hogy ilyen jól rendbe hoztad az arcom. Imádom veled az összes együtt töltött percet, köszönöm hogy vagy nekem!!!",
      author: "Bernadett Polyák",
    },
    {
      review:
        "Nagyon tetszik, ahogy Rebi szebbnél szebb tetoválásokat készít. Ajánlani tudom mindenkinek.",
      author: "Éva Csizmadiáné",
    },
    {
      review:
        "Rebi arckezelése isteni. Jó termékekkel dolgozik és a szakmai hozzáértése sem elhanyagolható. Nyugodt szívvel ajánlom mindenkinek.",
      author: "Borsos-Szabó Kitti",
    },
    {
      review:
        "Ismét fantasztikus kezelésben volt részem. Rebekánál az arcmasszázs olyan, mint egy csodálatosan megkomponált táncelőadás. Emellett pedig mindig ellát személyre szabott, hasznos tanácsokkal, amiért külön hálás vagyok.",
      author: "Ágnes Mezeiné Losonczi",
    },
    {
      review:
        "Rebeka tökéletes kozmetikus és jó anyagokkal dolgozik precíz naprakész és fantasztikus munkájai vannak egy szóval a legjobb kezek közt szépülünk és mindig feldobja a napunkat.",
      author: "Éva Szöllősiné Oláh",
    },
    {
      review:
        "Az elrontott tetoválásom javította Rebi. Mint emberileg, mint szakmailag nálam 5*! Bàtran ajánlom mindenkinek!",
      author: "Alexandra Tóth",
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
    <section className="relative container mx-auto h-full max-w-5xl px-0 py-8 md:px-4">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h3 className="text-cappuccino font-serif text-3xl italic">
          Vélemények Rólam
        </h3>
        <div className="mb-8 flex justify-center gap-6">
          <div className="border-latte-dark bg-beige h-24 w-24 overflow-hidden rounded-full border-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//rebeka2.webp`}
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
        <div className="relative flex min-h-[170px] items-center justify-center">
          <button
            aria-label="leftArrow"
            onClick={handlePrev}
            className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute top-0 left-4 cursor-pointer rounded-full p-2 transition-all hover:scale-105"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex h-full min-h-72 flex-col items-center justify-start space-y-8 overflow-hidden md:min-h-0">
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
          <button
            aria-label="rightArrow"
            onClick={handleNext}
            className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute top-0 right-4 cursor-pointer rounded-full p-2 transition-all hover:scale-105"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
