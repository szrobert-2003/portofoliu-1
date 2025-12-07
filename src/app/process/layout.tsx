import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proces | Cum Lucrăm Împreună",
  description: "Procesul complet de creare site web: consultație, planificare, design, dezvoltare, testare, lansare. Pași clari, comunicare constantă, rezultate garantate.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

