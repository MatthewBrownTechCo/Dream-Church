import "../app/styles/globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Head from "next/head";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"], // Regular & Bold
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Church | Church in Columbia, SC",
  description: "Dream Church is a nondenominational church.",
  icons: {
    icon: "/logos/dream-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body
        className={`${cormorantGaramond.className} antialiased bg-[rgb(28,28,28)] text-white text-xl overflow-x-hidden`}
        style={{ letterSpacing: "-0.5px" }}
      >
        {children}
      </body>
    </html>
  );
}
