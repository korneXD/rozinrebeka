"use client";
import Link from "next/link";
import React from "react";
import { QRCode } from "react-qrcode-logo";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-beige flex w-full py-12">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-cappuccino/80 flex w-full flex-wrap items-start justify-around gap-8">
          <div className="flex flex-col items-center justify-center gap-2 text-left md:items-start">
            <h5 className="text-cappuccino mb-4 font-medium">Elérhetőségeim</h5>
            <p>+36 70 234 5678</p>
            <p>contact@rebeka.hu</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2 md:w-fit">
            <h5 className="text-cappuccino mb-4 font-medium">Termékek</h5>
            <Link
              href={"https://rozinrebeka.wellu.eu/register.html?__country=HU"}
              target="_blank"
              className="text-cappuccino/60 font-serif underline"
            >
              Link
            </Link>
            <QRCode
              value="https://rozinrebeka.wellu.eu/register.html?__country=HU"
              qrStyle="square"
              eyeRadius={15}
              eyeColor="#4a3728"
              fgColor="#6b5141"
              bgColor="#f5efe7"
              size={100}
            />
            <Link
              href={"/arlista"}
              className="text-cappuccino/60 font-serif underline"
            >
              Árlista megtekintése
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:items-end">
            <h5 className="text-cappuccino mb-4 font-medium">Szalon</h5>
            <p>Izsák, Hungary</p>
          </div>
        </div>
        <div className="border-cappuccino/10 text-cappuccino/60 mt-8 w-full border-t pt-8 text-center text-sm">
          {year} - Rozin Rebeka
        </div>
      </div>
    </footer>
  );
}
