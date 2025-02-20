import "./globals.css";
import { description, title } from "@/lib/constants";
import React from "react";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Fókuszban a bőröd",
    "Kozmetikus kecskemét környéke",
    "Rozin Rebeka",
    "Kozmetikus Izsák",
    "Rozin Rebeka kozmetikus",
    "Az arcápolás egyfajta befektetés",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon.ico",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`antialiased`}>
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              success:
                "flex w-full border font-serif border-cappuccino justify-start px-4 items-center text-xl text-black gap-2 bg-beige rounded-xl py-4",
              error:
                "flex w-full border font-serif border-cappuccino justify-start px-4 items-center text-xl text-black gap-2 bg-beige rounded-xl py-4",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
