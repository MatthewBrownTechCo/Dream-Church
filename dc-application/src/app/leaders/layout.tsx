import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership - Dream Church | Church in Columbia, SC",
  description:
    "Dream Church is led by Joshua Brown, who serves as our Senior Pastor, and our elder board.",
};

export default function LeadersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
