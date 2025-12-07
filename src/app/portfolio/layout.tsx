import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofoliu | Proiecte Web Realizate",
  description: "Explorează proiectele mele: site-uri e-commerce, site-uri corporative, portofolii creative, landing pages. Exemple de lucrări realizate cu succes.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

