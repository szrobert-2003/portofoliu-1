import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Articole Web Development & Design",
  description: "Articole despre web development, design, optimizare performanță, SEO, tendințe web design. Ghiduri și tutoriale pentru dezvoltatori.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

