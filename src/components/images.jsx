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
      images.length - maxThumbnails
    )
  );
  const visibleThumbnails = images.slice(
    startIndex,
    startIndex + maxThumbnails
  );

  return (
    <div className="relative px-4 py-8 w-full max-w-3xl mx-auto flex justify-center items-center flex-col bg-latte rounded-3xl my-12 shadow-xs shadow-latte-dark">
      <h3 className="text-4xl font-serif text-cappuccino mb-4">Munkáim</h3>
      <div className="flex max-w-lg justify-center items-center relative flex-row w-full">
        <div className="relative w-full flex justify-center items-center">
          {images.length > 0 && images[currentIndex] ? (
            <div className="flex relative justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={1200}
                height={1200}
                draggable={false}
                priority
                className="aspect-[3/2] z-10 w-lg object-contain rounded-xl border-2 border-beige shadow-xs shadow-latte-dark"
              />
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={1200}
                height={1200}
                draggable={false}
                priority
                className="absolute aspect-[3/2] w-full object-cover rounded-xl blur-md p-0"
              />
            </div>
          ) : (
            <div className="h-80 w-full bg-cappuccino rounded-xl animate-pulse flex justify-center items-center">
              <span className="text-beige text-2xl italic font-serif">
                Képek betöltése...
              </span>
            </div>
          )}
        </div>
        <button
          onClick={prevSlide}
          aria-label="leftArrow"
          className="absolute -left-16 cursor-pointer hover:scale-105 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="rightArrow"
          className="absolute -right-16 cursor-pointer hover:scale-105 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {visibleThumbnails.map((img, index) => (
          <button
            key={startIndex + index}
            onClick={() => setCurrentIndex(startIndex + index)}
          >
            {img ? (
              <Image
                src={img}
                alt={`Thumbnail ${startIndex + index}`}
                width={1200}
                height={1200}
                draggable={false}
                priority
                className={clsx(
                  "size-24 cursor-pointer rounded-md overflow-hidden border-2 object-cover shadow-md shadow-latte-dark border-beige",
                  {
                    "border-cappuccino scale-105 transition-all":
                      startIndex + index === currentIndex,
                  }
                )}
              />
            ) : (
              <div className="size-24 bg-gray-300 rounded-md"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
