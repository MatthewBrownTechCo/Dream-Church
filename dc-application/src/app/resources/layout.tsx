import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources - Dream Church | Church in Columbia, SC",
  description: "Check out the resources from our latest sermon series!",
};

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
