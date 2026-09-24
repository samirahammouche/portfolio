import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title, description: site.description, url: site.url, type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
