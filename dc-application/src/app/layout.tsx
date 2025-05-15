import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["200", "300"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
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
      <body
        className={`${crimson.className} antialiased bg-[rgb(28,28,28)] text-white text-xl overflow-x-hidden`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
