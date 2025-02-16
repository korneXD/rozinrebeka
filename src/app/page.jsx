import Contact from "@/components/contact";
import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageSlider from "@/components/images";
import Reviews from "@/components/reviews";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="bg-cream flex min-h-screen flex-col items-center justify-center">
      <div className="px-4">
        <Header />
        <Hero />
        <Services />
        <ImageSlider />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
