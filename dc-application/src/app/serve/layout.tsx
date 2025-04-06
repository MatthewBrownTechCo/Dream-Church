import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Opportunities - Dream Church | Church in Columbia, SC",
  description:
    "Serve in the mission of deeply forming people in the love of Jesus and the ways of his kingdom.",
};

export default function ServeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
