import type { Metadata } from "next";
import { Poppins, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageEffects } from "@/components/layout/LanguageEffects";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inchaa - Build Smarter",
  description: "The #1 Construction Ecosystem",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
        <style>{`[dir="rtl"] { font-family: var(--font-cairo), sans-serif; }`}</style>
      </head>
      <body className={`${poppins.variable} ${cairo.variable} antialiased`}>
        <LanguageProvider>
          <LanguageEffects />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
