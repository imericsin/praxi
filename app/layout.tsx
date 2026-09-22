import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "../styles/globals.css";

// Figma `font-family/sans` token = Inter (body/UI text).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Figma `custom/display-large` token = Inter Tight SemiBold (headlines).
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
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
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
