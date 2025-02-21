"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { arlistaUrl, services } from "@/lib/constants";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="services"
      className="bg-latte shadow-secondary-foreground container mx-auto my-12 flex w-full max-w-md scroll-mt-10 flex-col items-center justify-center rounded-3xl px-4 py-8 shadow-xs select-none md:max-w-4xl"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h3 className="text-cappuccino mb-4 font-serif text-4xl">
          Szolgáltatásaim
        </h3>
        <p className="text-cappuccino/80 max-w-92 text-center text-lg md:w-full">
          Élvezd a prémium szépségkezeléseimet, fókuszban a bőröddel!
        </p>
      </div>

      <div className="grid gap-4 text-center md:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="group flex cursor-pointer flex-col items-center justify-around"
          >
            <div className="bg-beige shadow-latte-dark border-beige relative mb-4 aspect-3/4 h-64 overflow-hidden rounded-xl border-2 shadow-xs md:h-80">
              <div className="text-cappuccino/30 absolute inset-0 flex items-center justify-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//${service.src}`}
                  className="h-full w-full object-cover"
                  fill
                  draggable={false}
                  loading="lazy"
                  alt={service.name}
                />
              </div>
            </div>
            <h4 className="text-cappuccino font-serif text-xl">
              {service.name}
            </h4>
            <p className="text-cappuccino/60 text-xl">{service.price}</p>
          </div>
        ))}
      </div>
      <p className="text-cappuccino mt-10 font-serif text-lg">
        És még sok más!
      </p>
      <Link
        href={"https://www.rozinrebeka.hu/arlista"}
        className="text-cappuccino flex items-center justify-center gap-2 font-serif text-lg underline"
      >
        <p>Árlista megtekintése</p>
        <ExternalLink className="text-cappuccino size-5 font-serif" />
      </Link>
    </motion.section>
  );
}
