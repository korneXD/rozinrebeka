import Arlista from "@/components/arlista";

export const metadata = {
  title: "Árlista",
  description:
    "“Rozin Rebeka - Árlista - Szépségápolási kezelések, arckezelések, smink, gyantázás és más szolgáltatások árai. Tekintsd meg szolgáltatásaimat!“",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Árlista",
  image: "/opengraph-image.png",
  description:
    "Rozin Rebeka - Árlista - Szépségápolási kezelések, arckezelések, smink, gyantázás és más szolgáltatások árai. Tekintsd meg szolgáltatásaimat!",
};

export default function ArlistaOldal() {
  return <Arlista jsonLd={jsonLd} />;
}
