import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Ministry - Dream Church | Church in Columbia, SC",
  description:
    "Dream Church's kids ministry is a great place for your kids to learn about Jesus on their level, find community, and growin their spiritual formation. For all children ages 2 - 8 years old.",
};

export default function DreamKidsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
