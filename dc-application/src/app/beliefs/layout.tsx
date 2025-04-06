import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beliefs - Dream Church | Church in Columbia, SC",
  description:
    "Dream Church holds to the beliefs handed down to us from the church's earliest days, as expressed in the Nicene and Apostle's Creed.",
};

export default function BeliefsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
