import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Bible Study and Community During the Week - Dream Church | Church in Columbia, SC",
  description:
    "At Midweek, we gather together to grow in community and spiritual formation. This service happens on Tuesday nights. All are welcome. Please reach out to us for location information.",
};

export default function MidweekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
