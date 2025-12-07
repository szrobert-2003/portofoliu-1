import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prețuri | Pachete Site-uri Web",
  description: "Pachete de prețuri pentru crearea site-urilor web: Basic, Pro, Premium. Prețuri transparente, fără surprize. Contactează-mă pentru o ofertă personalizată.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

