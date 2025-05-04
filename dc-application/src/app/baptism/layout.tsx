import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baptism - Dream Church | Church in Columbia, SC",
  description: "Take your next step in baptism today.",
};

export default function BaptismLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
