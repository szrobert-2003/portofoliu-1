import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii | Creare Site-uri Web, Programare, Design",
  description: "Servicii complete: creare site-uri web, programare, design modern, optimizare SEO, modernizare site-uri vechi. Soluții profesionale adaptate nevoilor tale.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

