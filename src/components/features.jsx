"use client";
import Link from "next/link";
import React from "react";
import { QRCode } from "react-qrcode-logo";

export default function Features() {
  return (
    <section className="bg-latte shadow-secondary-foreground relative mx-auto my-12 flex w-fit max-w-4xl flex-col items-center justify-center rounded-3xl px-4 py-8 shadow-sm select-none md:w-full">
      <h1 className="text-cappuccino text-center font-serif text-2xl">
        Használd a linkem termékek rendeléséhez!
      </h1>
      <Link
        href={"https://rozinrebeka.wellu.eu/register.html?__country=HU"}
        target="_blank"
        className="bg-cappuccino text-cream hover:bg-cappuccino-light shadow-latte-dark my-4 rounded-full px-8 py-2 font-serif font-bold tracking-wide shadow-md"
      >
        Link
      </Link>
      <p className="text-cappuccino text-center font-serif text-xl">
        Vagy olvasd be a QR kódot!
      </p>
      <QRCode
        value="https://rozinrebeka.wellu.eu/register.html?__country=HU"
        qrStyle="square"
        eyeRadius={15}
        eyeColor="#4a3728"
        fgColor="#6b5141"
        bgColor="#e6dccd"
      />
    </section>
  );
}
