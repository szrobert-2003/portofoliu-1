import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tehnologii | Frontend, Backend, Tools & Design",
  description: "Tehnologii moderne: React, Vue.js, Node.js, Python, PHP, MongoDB, MySQL, Figma, Git, Docker, AWS. Stack complet pentru dezvoltare web profesională.",
};

export default function TechnologiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

