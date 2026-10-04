import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hind_Siliguri, Caveat } from "next/font/google";
import { LangProvider } from "@/components/LangProvider";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });

const url = "https://www.grammarvillage.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Grammar Village | Bilingual English classes in Dhaka",
  description:
    "English grammar, phonics and spoken English for Play to Class 12 in Dhaka. Bilingual classes, listening tests and a free skill check.",
  alternates: { canonical: url }, // the old site pointed this at Facebook, which hurt SEO
  openGraph: {
    title: "Grammar Village | Bilingual English classes in Dhaka",
    description: "Grammar, phonics and speaking for Play to Class 12.",
    url,
    siteName: "Grammar Village",
    type: "website",
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0A4D32", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
