import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision Sunday - Dream Church | Church in Columbia, SC",
  description:
    "Check out the tools and notes from our Vision Sunday service on 06/01/2025.",
};

export default function VisionSundayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
