import "../app/styles/globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"], // Regular & Bold
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Church Columbia",
  description: "A church being deeply formed in the image of Christ.",
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
        className={`${cormorantGaramond.className} antialiased bg-[rgb(28,28,28)] text-white text-xl`}
        style={{ letterSpacing: "-0.5px" }}
      >
        {children}
      </body>
    </html>
  );
}
