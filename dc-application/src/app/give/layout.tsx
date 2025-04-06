import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to Our Mission - Dream Church | Church in Columbia, SC",
  description:
    "Give to Dream Church in Columbia, SC and help us transform our city through the good news of Jesus. All gifts are tax-exempt.",
};

export default function GiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
