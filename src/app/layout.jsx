import "./globals.css";
import { description, title } from "@/lib/constants";
import React from "react";
import { Toaster } from "sonner";

export const metadata = {
  title,
  description,
  keywords: [
    "Kozmetikus",
    "Kozmetikus kecskemét környéke",
    "Rozin Rebeka",
    "Kozmetikus Izsák",
    "Rozin Rebeka kozmetikus",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
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
  icons: {
    icon: "/favicon.ico",
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
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
