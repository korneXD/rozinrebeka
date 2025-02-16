import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-beige flex w-full py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-cappuccino/80 flex w-full flex-wrap items-center justify-around gap-8">
          <div className="flex flex-col items-start justify-center gap-2 text-left">
            <h5 className="text-cappuccino mb-4 font-medium">Elérhetőségeim</h5>
            <p>+36 70 234 5678</p>
            <p>contact@rebeka.hu</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h5 className="text-cappuccino mb-4 font-medium">Termékek</h5>
            <a href="#" className="hover:text-cappuccino">
              Használd a linkem
            </a>
            <Link href={"/arlista"} className="text-cappuccino/60 underline">
              Árlista megtekintése
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:items-end">
            <h5 className="text-cappuccino mb-4 font-medium">Szalon</h5>
            <p>Izsák, Hungary</p>
          </div>
        </div>
        <div className="border-cappuccino/10 text-cappuccino/60 mt-8 w-full border-t pt-8 text-center text-sm">
          2025 - Rozin Rebeka
        </div>
      </div>
    </footer>
  );
}
