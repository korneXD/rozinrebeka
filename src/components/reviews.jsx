import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <section className="container mx-auto px-4 py-16 relative max-w-5xl">
      <div className="text-center max-w-3xl mx-auto space-y-8">
        <h3 className="font-serif italic text-3xl text-cappuccino">
          Vélemények Rólam
        </h3>
        <div className="flex justify-center gap-6 mb-8">
          <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-latte-dark bg-beige">
            <Image
              src="https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/rebeka2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svcmViZWthMi5qcGciLCJpYXQiOjE3Mzk0Nzc5MjksImV4cCI6NDg5MzA3NzkyOX0.y-yKjrV4WmMxZ_852bY5Oc_5K9jY8nZLpwEyOs-hNa8"
              className="w-full h-full object-cover"
              height={200}
              width={200}
              draggable={false}
              priority={true}
              alt="Review"
            />
          </div>
        </div>
        <div className="flex justify-center gap-1 text-latte-dark">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-cream to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-cream to-transparent z-10"></div>
          <p className="text-cappuccino/80 text-lg px-20">
            &quot;Az arckezelés egyszerűen isteni volt. A bőröm megújult és
            ragyogó. Ajánlom mindenkinek, aki szeretné felfrissíteni és
            megújítani bőrét!&quot;
          </p>
        </div>
        <p className="font-serif text-cappuccino italic">Zsofia B.</p>
      </div>
      <button
        aria-label="leftArrow"
        className="absolute left-4 top-1/2 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="rightArrow"
        className="absolute right-4 top-1/2  bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
