import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves performance (avoids FOIT)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stallionxtremefitness.com"),
  title: {
    default: "Stallion Xtreme Fitness | Best Gym in Hyderabad",
    template: "%s | Stallion Xtreme Fitness",
  },
  description: "Stallion Xtreme Fitness is the best gym in Hyderabad, offering expert trainers, modern equipment, and personalized fitness plans.",
  keywords: [
    "Best gym in Hyderabad",
    "Stallion Xtreme Fitness",
    "Hyderabad fitness center",
    "Weight loss gym Hyderabad",
    "Personal trainer Hyderabad",
  ],
  authors: [{ name: "Stallion Team", url: "https://www.stallionxtremefitness.com" }],
  creator: "Stallion Xtreme Fitness",
  publisher: "Stallion Xtreme Fitness",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://www.stallionxtremefitness.com",
  },
  openGraph: {
    title: "Stallion Xtreme Fitness | Best Gym in Hyderabad",
    description: "Achieve your fitness goals at the best gym in Hyderabad. Stallion offers advanced equipment, transformation plans, and certified trainers.",
    url: "https://www.stallionxtremefitness.com",
    siteName: "Stallion Xtreme Fitness",
    images: [
      {
        url: "/og-image.png", // Make sure this image exists in the public folder
        width: 1200,
        height: 630,
        alt: "Stallion Xtreme Fitness Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stallion Xtreme Fitness | Best Gym in Hyderabad",
    description: "Top-rated gym in Hyderabad with modern facilities and expert trainers.",
    images: ["/og-image.jpg"],
    site: "@stallionfitness", // Replace this if you create a real Twitter/X handle
    creator: "@stallionfitness",
  },
  verification: {
    google: "SU2TKRZ4JHB3OHtBHrI-J5VDXlmGUHSswnQKWIzT7-U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
