import Galeria from "@/components/galeria";

export const metadata = {
  title: "Galéria",
  description:
    "“Rozin Rebeka - Képek eddigi munkáimról! Havi rendszereséggel feltöltve.“",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Galéria",
  image: "/opengraph-image.png",
  description:
    "Rozin Rebeka - Képek eddigi munkáimról! Havi rendszereséggel feltöltve.",
};

export default function RolamOldal() {
  return <Galeria jsonLd={jsonLd} />;
}
