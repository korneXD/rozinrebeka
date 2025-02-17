import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <h2 className="text-cappuccino font-serif text-5xl leading-tight md:text-6xl">
            Fókuszban a <span className="font-serif italic">Bőröd.</span>
          </h2>
          <p className="text-cappuccino/80 text-lg">
            Luxus bőrápolási kezelések, amelyek kiemelik egyedi szépséged!
          </p>
          <Link
            href={"#contact"}
            className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark rounded-full px-8 py-2 font-sans font-bold shadow-md"
          >
            Időpontfoglalás
          </Link>
        </div>
        <div className="lg:col-span-2">
          <div className="relative mx-auto h-64 w-64">
            <div className="bg-latte shadow-secondary-foreground absolute inset-0 rounded-full shadow-md"></div>
            <div className="bg-beige absolute inset-2 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/public/alapok//hero.png"
                className="h-full w-full object-cover"
                height={200}
                width={200}
                priority={true}
                draggable={false}
                alt="Hero"
              />
            </div>
            <div className="bg-cappuccino shadow-latte-dark absolute -right-4 -bottom-4 flex h-24 w-24 items-center justify-center rounded-full shadow-xs">
              <span className="text-cream font-serif text-xl">Rebeka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
