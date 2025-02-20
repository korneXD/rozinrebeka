import Contact from "@/components/contact";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageSlider from "@/components/images";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Features from "@/components/features";
import { description } from "@/lib/constants";

export const metadata = {
  title: "Főoldal | Rozin Rebeka",
  description: description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Főoldal",
  image: "/opengraph-image.png",
  description: description,
};

export default function Home() {
  return (
    <div className="bg-cream flex min-h-screen flex-col items-center justify-center">
      <div className="px-4">
        <Header />
        <Hero />
        <Services />
        <Features />
        <ImageSlider />
        <Reviews />
        <Contact />
      </div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
