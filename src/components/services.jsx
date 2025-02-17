import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-latte shadow-secondary-foreground container mx-auto my-12 flex w-full max-w-md scroll-mt-10 flex-col items-center justify-center rounded-3xl px-4 py-8 shadow-xs md:max-w-4xl"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h3 className="text-cappuccino mb-4 font-serif text-4xl">
          Szolgáltatásaim
        </h3>
        <p className="text-cappuccino/80 max-w-92 text-center text-lg md:w-full">
          Élvezd a prémium szépségkezeléseimet, amelyeket kizárólag neked
          nyújtok!
        </p>
      </div>

      <div className="grid gap-4 text-center md:grid-cols-3">
        {[
          {
            name: "Tisztító arckezelések",
            price: "14.500 Ft-tól",
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/arc.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svYXJjLmpwZyIsImlhdCI6MTczOTQ3NzczMywiZXhwIjo0ODkzMDc3NzMzfQ.bPlrsrbzrRvo32lrmLn8y45SeoHXcxg0lIVh040wjFM",
          },
          {
            name: "Sminktetoválás",
            price: "30.000 Ft-tól",
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/tetko.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svdGV0a28uanBnIiwiaWF0IjoxNzM5NDc3NTgwLCJleHAiOjQ4OTMwNzc1ODB9.oghrfKEU3M2mig1G2kOgo4qnczdp7MYlOEyjp4l6lMY",
          },
          {
            name: "Smink",
            price: "8.000 Ft-tól",
            src: "https://gqkxxmoklignzqbjofsz.supabase.co/storage/v1/object/sign/alapok/smink.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGFwb2svc21pbmsuanBnIiwiaWF0IjoxNzM5NDc3NzEyLCJleHAiOjQ4OTMwNzc3MTJ9.3yUFkvEvhC2Qgk3fHIYWqJZNID15xqwx89VXIOr5_AM",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="group flex cursor-pointer flex-col items-center justify-around"
          >
            <div className="bg-beige shadow-latte-dark border-beige relative mb-4 aspect-3/4 h-80 overflow-hidden rounded-xl border-2 shadow-xs">
              <div className="text-cappuccino/30 absolute inset-0 flex items-center justify-center">
                <Image
                  src={service.src}
                  className="h-full w-full object-cover"
                  height={200}
                  width={200}
                  priority={true}
                  draggable={false}
                  alt={service.name}
                />
              </div>
            </div>
            <h4 className="text-cappuccino font-serif text-xl">
              {service.name}
            </h4>
            <p className="text-cappuccino/60 textl-xl">{service.price}</p>
          </div>
        ))}
      </div>
      <p className="text-cappuccino mt-10 font-serif text-lg">
        És még sok más!
      </p>
      <Link
        href={"/arlista"}
        className="text-cappuccino font-serif text-lg underline"
      >
        Árlista megtekintése
      </Link>
    </section>
  );
}
