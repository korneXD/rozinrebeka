"use client";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";
import useSWR from "swr";
import Header from "./header";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Galeria({ jsonLd }) {
  const { data } = useSWR("/api/images", fetcher);
  const images =
    data && Array.isArray(data)
      ? data.map(
          (item) =>
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/munkaim/${item.name}`,
        )
      : [];

  return (
    <>
      <Header />
      <section className="flex min-h-screen w-full flex-col items-center justify-center gap-4 pt-28 pb-4 select-none">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-cappuccino relative font-serif text-xl italic md:text-2xl"
        >
          Vess egy pillantást eddigi munkáimra!
          <Sparkles className="text-latte-dark absolute -top-1 -left-3 -z-10 -rotate-10" />
          <Sparkles className="text-latte-dark absolute -right-3 -bottom-1 -z-10 rotate-10" />
        </motion.h2>
        {images.length > 0 ? (
          <div className="mx-auto max-w-4xl columns-2 space-y-4 px-4 md:columns-3 lg:columns-5">
            {images.map((e, i) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 1 }}
                key={i}
              >
                <Image
                  src={e}
                  alt={i}
                  height={300}
                  width={200}
                  quality={75}
                  className="rounded-xl border transition-all hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <FaSpinner className="text-cappuccino size-12 animate-spin" />
        )}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </>
  );
}
