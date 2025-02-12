import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

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
              src="https://utfs.io/a/y6y21xm25u/uqSz98PYQAu5yhQdo0n6OLzfRil0nGtBTo4mZPF2QqjagWEc"
              className="w-full h-full object-cover"
              height={200}
              width={200}
              alt="kep"
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
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream to-transparent z-10"></div>
          <p className="text-cappuccino/80 text-lg px-20">
            &apos;Az arckezelés egyszerűen isteni volt. A bőröm megújult és
            ragyogó. Ajánlom mindenkinek, aki szeretné felfrissíteni és
            megújítani bőrét!
          </p>
        </div>
        <p className="font-serif text-cappuccino italic">Zsofia B.</p>
      </div>
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-cappuccino text-cream rounded-full p-2 hover:bg-cappuccino-light transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
