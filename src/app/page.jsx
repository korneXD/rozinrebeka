import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageSlider from "@/components/images";
import Reviews from "@/components/reviews";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Services />
      <Features />
      <ImageSlider />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
