import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import "../styles/globals.css";

// Figma `font-family/sans` token = Inter (body/UI text).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Figma `custom/display-large` token = Geist SemiBold (headlines).
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praxi",
  description: "Praxi marketing site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
