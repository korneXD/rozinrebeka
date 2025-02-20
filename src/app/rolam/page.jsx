import Rolam from "@/components/rolam";

export const metadata = {
  title: "Rólam",
  description: "“Rozin Rebeka - Ismerj meg!“",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Page",
  name: "Rólam",
  image: "/opengraph-image.png",
  description: "Rozin Rebeka - Ismerj meg!",
};

export default function RolamOldal() {
  return <Rolam jsonLd={jsonLd} />;
}
