import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PITIAITI — Proste. Mocne.",
  description: "Studio software tworzące aplikacje webowe, mobilne i SaaS dla ambitnych zespołów.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PITIAITI — Proste. Mocne.",
    description: "Studio software tworzące aplikacje webowe, mobilne i SaaS dla ambitnych zespołów.",
    type: "website",
    locale: "pl_PL",
    url: "https://pitiaiti.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "PITIAITI — Proste. Mocne.",
    description: "Studio software tworzące aplikacje webowe, mobilne i SaaS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}