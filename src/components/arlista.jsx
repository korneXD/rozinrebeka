"use client";
import { arlista } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Arlista({ jsonLd }) {
  return (
    <section className="bg-cream flex min-h-screen w-full items-start justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="relative flex w-full items-center justify-center"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//topbg.webp`}
          width={200}
          height={200}
          priority
          draggable={false}
          alt="Background Top"
          className="object-fit absolute top-0 left-0 h-42 w-fit md:h-60"
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//arlistalogo.webp`}
          width={200}
          height={200}
          alt="Rozin Rebeka Logo"
          priority
          draggable={false}
          className="object-fit absolute top-0 right-0 h-20 w-fit md:h-40"
        />
        <div className="text-gold relative z-10 mb-30 flex flex-col items-center justify-center gap-2 px-4 py-10 font-serif italic">
          <h1 className="text-4xl">Árlista</h1>
          <Link
            href={"https://www.rozinrebeka.hu/"}
            className="w-full text-right text-xl underline md:text-left"
          >
            Vissza a főoldalra
          </Link>
          {arlista.map((e, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="flex w-full flex-col items-center justify-center gap-4 md:w-2xl"
            >
              {e.title != "" && (
                <h2 className="mt-10 w-full text-left text-3xl">{e.title}</h2>
              )}
              <div className="flex w-full items-center justify-center px-2">
                <div className="mr-2 w-full text-left text-2xl">
                  <p>{e.descr}</p>
                </div>
                <div className="w-fit text-right text-2xl">
                  <p>{e.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-gold absolute bottom-4 z-10 text-center font-serif text-xl italic">
          Az árak forintban értendők.
          <br /> 2025 január 6-tól érvényesek
        </p>
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//bottombg.webp`}
          width={200}
          height={200}
          alt="Background Bottom"
          draggable={false}
          priority
          className="object-fit absolute right-0 bottom-0 h-42 w-fit md:h-60"
        />
      </motion.div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
