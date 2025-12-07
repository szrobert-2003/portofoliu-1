import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recenzii | Feedback Clienți",
  description: "Citește recenziile clienților mei. Feedback real despre serviciile de creare site-uri web, programare și design. Rezultate garantate, clienți mulțumiți.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

