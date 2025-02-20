"use client";

import Header from "@/components/header";
import { facebook, instagram, maps, tiktok } from "@/lib/constants";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "motion/react";

export default function Rolam({ jsonLd }) {
  return (
    <>
      <Header />
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-center gap-8 pt-30 md:flex-row"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-cappuccino font-serif text-3xl">
            Rólam - <span className="italic">Rozin Rebeka</span>
          </h2>
          <div className="group relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/alapok//hero.webp`}
              className="shadow-cappuccino h-full w-fit rounded-xl object-cover shadow-xs transition-all group-hover:scale-101"
              height={200}
              width={200}
              priority
              quality={75}
              draggable={false}
              alt="Bőrápolás képe"
            />
            <Sparkles className="text-cappuccino absolute -top-3 -left-3 z-10 size-8 rotate-20 transition-all group-hover:rotate-45" />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 px-4 pb-20 md:w-1/2 md:px-0 lg:w-1/3">
          <p className="text-cappuccino text-center font-serif text-xl">
            “Üdvözöllek! <span className="italic">Rozin Rebeka</span> vagyok,
            több mint 4 éve dolgozom kozmetikusként, és szenvedélyem a
            bőrápolás, smink és sminktetoválás. Célom, hogy vendégeim számára
            személyre szabott, professzionális kezeléseket nyújtsak, amelyek
            kiemelik természetes szépségüket. Folyamatosan fejlesztem a
            tudásomat, hogy a legújabb technikákkal és prémium termékekkel
            dolgozhassak. Ha szeretnéd megtapasztalni a minőségi arcápolás,
            smink és tartós smink világát, várlak szeretettel!”
          </p>
          <div className="flex items-center justify-center gap-12">
            <Link href={instagram} target="_blank">
              <FaInstagram className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
            </Link>
            <Link href={facebook} target="_blank">
              <FaFacebook className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
            </Link>
            <Link href={tiktok} target="_blank">
              <FaTiktok className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
            </Link>
            <Link target="_blank" href={maps}>
              <MapPin className="text-cappuccino hover:text-cappuccino-light size-8 transition-all hover:scale-105" />
            </Link>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </motion.section>
    </>
  );
}
