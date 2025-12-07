import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acasă | Web Developer & Designer",
  description: "Bun venit! Specializat în crearea, programarea, optimizarea și modernizarea site-urilor web. Design modern, performanță excelentă.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

