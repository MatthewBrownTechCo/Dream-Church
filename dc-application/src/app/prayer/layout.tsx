import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We'd Love to Pray for You - Dream Church | Church in Columbia, SC",
  description:
    "No one can do life alone, especially when things get difficult. Let us walk with youby praying for you!",
};

export default function PrayerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
