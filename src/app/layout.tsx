import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creare Site-uri Web | Programare & Design Modern | Servicii Web Profesionale",
  description: "Specialist în crearea, programarea, optimizarea și modernizarea site-urilor web. Design modern, performanță excelentă, rezultate garantate. Contactează-mă pentru o ofertă personalizată!",
  keywords: "creare site-uri web, programare web, design site-uri, optimizare site-uri, modernizare site-uri, web developer romania, web designer, servicii web profesionale",
  authors: [{ name: "Web Developer & Designer" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://yoursite.com/",
    title: "Creare Site-uri Web | Programare & Design Modern",
    description: "Specialist în crearea, programarea, optimizarea și modernizarea site-urilor web. Design modern, performanță excelentă, rezultate garantate.",
    images: ["https://yoursite.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creare Site-uri Web | Programare & Design Modern",
    description: "Specialist în crearea, programarea, optimizarea și modernizarea site-urilor web. Design modern, performanță excelentă, rezultate garantate.",
    images: ["https://yoursite.com/og-image.jpg"],
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};

import CookieConsent from "@/components/CookieConsent";
import ErrorLogger from "@/components/ErrorLogger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://yoursite.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Web Developer & Designer",
              "url": "https://yoursite.com/",
              "description": "Specialist în crearea, programarea, optimizarea și modernizarea site-urilor web",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Web Developer & Designer",
              "description": "Servicii complete de creare, programare, design și optimizare site-uri web",
              "serviceType": "Web Development",
              "areaServed": {
                "@type": "Country",
                "name": "Romania",
              },
              "provider": {
                "@type": "Person",
                "name": "Web Developer & Designer",
              },
              "offers": {
                "@type": "Offer",
                "description": "Servicii web profesionale",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <ErrorLogger />
      </body>
    </html>
  );
}





