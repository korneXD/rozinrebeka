"use client";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const images = [
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5akuIa2fEGhbAfaTlLZBRWvs08FdOeKtg4C6U",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5kMu8NJhjQXDvJeyCMV96spgmFhP5abR4loHk",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu53vlzi6W5LpfVjOloBU684GaX5PWF0wzYD71g",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5akuIa2fEGhbAfaTlLZBRWvs08FdOeKtg4C6U",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5kMu8NJhjQXDvJeyCMV96spgmFhP5abR4loHk",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu53vlzi6W5LpfVjOloBU684GaX5PWF0wzYD71g",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5akuIa2fEGhbAfaTlLZBRWvs08FdOeKtg4C6U",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5kMu8NJhjQXDvJeyCMV96spgmFhP5abR4loHk",
  "https://utfs.io/a/y6y21xm25u/uqSz98PYQAu53vlzi6W5LpfVjOloBU684GaX5PWF0wzYD71g",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-center items-center relative flex-row w-full">
        <div className="w-full">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            width={600}
            height={400}
            className="h-80 w-full object-cover rounded-xl border-2 border-beige shadow-sm shadow-latte-dark"
          />
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
        {images.slice(currentIndex, currentIndex + 3).map((img, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)}>
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={200}
              height={200}
              className={clsx(
                "size-24 rounded-md overflow-hidden border-2 object-cover shadow-md shadow-latte-dark border-beige",
                {
                  "border-cappuccino scale-105 transition-all":
                    index === currentIndex,
                }
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
