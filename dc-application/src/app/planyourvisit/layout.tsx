import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit A Service - Dream Church | Church in Columbia, SC",
  description:
    "Plan your visit to Dream Church in Columbia, SC and we will have someone reach out to answer your questions, get to know you, and welcome you at church, so you feel like family from the start.",
};

export default function PlanYourVisitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
