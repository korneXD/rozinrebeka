"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CircleX, ExternalLink } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { images } from "@/lib/utils";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const maxThumbnails = 5;

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
    <div className="relative px-4 py-8 w-full max-w-3xl mx-auto flex justify-center items-center flex-col bg-latte rounded-3xl my-12 shadow-sm shadow-latte-dark">
      <h3 className="text-4xl font-serif text-cappuccino mb-4">Munkáim</h3>
      <div className="flex max-w-lg justify-center items-center relative flex-row w-full">
        <div className="relative w-full">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            width={600}
            height={400}
            className="h-80 w-full object-cover rounded-xl border-2 border-beige shadow-sm shadow-latte-dark"
          />
          <button onClick={() => setOpen(true)}>
            <ExternalLink className="absolute -top-1 -right-1 z-20 bg-cappuccino p-1 rounded-lg border-beige border" />
          </button>
        </div>
        <button
          onClick={prevSlide}
          className="absolute -left-16 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-16 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors"
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
            <Image
              src={img}
              alt={`Thumbnail ${startIndex + index}`}
              width={200}
              height={200}
              className={clsx(
                "size-24 rounded-md overflow-hidden border-2 object-cover shadow-md shadow-latte-dark border-beige",
                {
                  "border-cappuccino scale-105 transition-all":
                    startIndex + index === currentIndex,
                }
              )}
            />
          </button>
        ))}
        {open && (
          <div className="flex justify-center items-center fixed z-50 top-0 left-0 w-full h-screen backdrop-blur-sm">
            <div className="flex flex-col relative justify-center items-center w-fit h-fit py-8 bg-latte px-8 rounded-2xl border-2 border-beige">
              <button
                onClick={() => setOpen(false)}
                className="text-black absolute top-1 right-1"
              >
                <CircleX className="size-8 text-cappuccino hover:fill-latte-dark hover:text-cappuccino-light hover:scale-105 transition-all" />
              </button>
              <h3 className="text-4xl font-serif text-cappuccino mb-4">
                Nagyított fotó
              </h3>
              <Image
                src={images[currentIndex]}
                alt="valami"
                width={600}
                height={600}
                className="h-96 w-fit object-contain rounded-xl border-2 border-beige shadow-sm shadow-latte-dark"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
