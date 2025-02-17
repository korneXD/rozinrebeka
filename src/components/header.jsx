"use client";

import { AlignJustify, CircleX } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Szolgáltatásaim", path: "#services" },
    { name: "Árlista", path: "/arlista" },
    { name: "Elérhetőség", path: "#contact" },
  ];

  let navRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6">
      <h1 className="text-cappuccino font-serif text-3xl">Rozin Rebeka</h1>
      <nav className="text-cappuccino/80 hidden space-x-6 text-xl md:flex">
        {routes.map((e, i) => (
          <Link
            key={i}
            className="hover:text-cappuccino transition-all"
            href={e.path}
          >
            {e.name}
          </Link>
        ))}
      </nav>
      <nav ref={navRef} className="items-center justify-center md:hidden">
        <button
          className="text-cappuccino hover:text-cappuccino-light cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <AlignJustify className="size-6" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 1, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: "-100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-beige shadow-secondary-foreground absolute top-0 left-0 z-10 flex w-full flex-col items-center justify-center px-2 py-2 shadow-sm"
            >
              <div className="relative w-full">
                <button
                  className="absolute top-4 right-2 transition-all hover:scale-105"
                  onClick={() => setOpen(false)}
                >
                  <CircleX className="text-cappuccino bg-latte-dark size-8 rounded-full" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center pt-4">
                {routes.map((e, i) => (
                  <Link
                    href={e.path}
                    key={i}
                    className="hover:text-cappuccino text-cappuccino py-1 font-serif text-2xl transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {e.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
