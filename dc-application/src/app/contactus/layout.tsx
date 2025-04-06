import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Dream Church | Church in Columbia, SC",
  description:
    "Contact Dream Church in Columbia, SC with any questions about how you can get involved in our church family.",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
