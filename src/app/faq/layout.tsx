import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Întrebări Frecvente",
  description: "Răspunsuri la întrebările frecvente despre crearea site-urilor web, prețuri, durata proiectelor, servicii de mentenanță și suport.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

