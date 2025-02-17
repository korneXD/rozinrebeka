"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxThumbnails = 5;

  const { data } = useSWR("/api/images", fetcher);
  const images =
    data && Array.isArray(data) ? data.map((item) => item.url) : [];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startIndex = Math.max(
    0,
    Math.min(
      currentIndex - Math.floor(maxThumbnails / 2),
      images.length - maxThumbnails,
    ),
  );
  const visibleThumbnails = images.slice(
    startIndex,
    startIndex + maxThumbnails,
  );

  return (
    <section className="bg-latte shadow-secondary-foreground relative mx-auto my-12 flex w-fit max-w-4xl flex-col items-center justify-center rounded-3xl px-4 py-8 shadow-sm select-none md:w-full">
      <h3 className="text-cappuccino mb-4 font-serif text-4xl">Galéria</h3>
      <div className="relative flex w-full max-w-lg flex-row items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          {images.length > 0 && images[currentIndex] ? (
            <div className="relative flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={200}
                height={200}
                draggable={false}
                priority
                className="border-beige shadow-latte-dark z-10 aspect-[3/2] h-48 w-lg rounded-xl border-2 object-contain shadow-xs md:h-72"
              />
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={100}
                height={100}
                draggable={false}
                priority
                className="absolute aspect-[3/2] h-48 w-full rounded-xl object-cover p-0 blur-md md:h-72"
              />
            </div>
          ) : (
            <div className="bg-cappuccino flex h-80 w-full animate-pulse items-center justify-center rounded-xl">
              <span className="text-beige font-serif text-2xl italic">
                Képek betöltése...
              </span>
            </div>
          )}
        </div>
        <button
          onClick={prevSlide}
          aria-label="leftArrow"
          className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute left-2 z-10 cursor-pointer rounded-full p-2 transition-all hover:scale-105 md:-left-16"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="rightArrow"
          className="bg-cappuccino text-cream hover:bg-cappuccino-light absolute right-2 z-10 cursor-pointer rounded-full p-2 transition-all hover:scale-105 md:-right-16"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {visibleThumbnails.map((img, index) => (
          <button
            key={startIndex + index}
            onClick={() => setCurrentIndex(startIndex + index)}
          >
            {img ? (
              <Image
                src={img}
                alt={`Thumbnail ${startIndex + index}`}
                width={200}
                height={200}
                draggable={false}
                priority
                className={clsx(
                  "shadow-latte-dark border-beige size-24 cursor-pointer overflow-hidden rounded-md border-2 object-cover shadow-md",
                  {
                    "border-cappuccino scale-105 transition-all":
                      startIndex + index === currentIndex,
                  },
                )}
              />
            ) : (
              <div className="size-24 rounded-md bg-gray-300"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
