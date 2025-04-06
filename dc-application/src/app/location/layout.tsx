import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location - Dream Church | Church in Columbia, SC",
  description:
    "Dream Church is a church near you in Columbia, SC. We can't wait to welcome you into our community.",
};

export default function LocationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
