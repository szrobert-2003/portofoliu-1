"use client";

import BottomNav from "@/components/BottomNav";
import ContactPopup from "@/components/popups/ContactPopup";
import ServiceDetailPopup from "@/components/popups/ServiceDetailPopup";
import { useState } from "react";
import { Monitor, Code, Palette, TrendingUp, RefreshCw, Shield } from "lucide-react";

export default function ServicesPage() {
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      icon: Monitor,
      title: "Creare Site-uri",
      text: "Dezvoltare completă de la zero, adaptată nevoilor tale. Design modern, performanță garantată.",
      details: {
        description:
          "Dezvoltare completă de site-uri web de la zero, adaptate perfect nevoilor tale specifice. Fiecare proiect este construit cu atenție la detalii, folosind cele mai moderne tehnologii și best practices din industrie.",
        features: [
          "Dezvoltare custom de la zero",
          "Design responsive pentru toate dispozitivele",
          "Optimizare pentru performanță maximă",
          "Integrare cu sisteme externe (API-uri, servicii terțe)",
          "Cod curat și bine structurat",
          "Documentație completă a proiectului",
          "Testare completă înainte de lansare",
        ],
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript/TypeScript",
          "React/Next.js",
          "Node.js",
          "MongoDB/PostgreSQL",
        ],
        benefits: [
          "Site-uri rapide și performante",
          "Design modern și atractiv",
          "Compatibilitate cross-browser",
          "Optimizare SEO integrată",
          "Scalabilitate pentru viitor",
        ],
      },
    },
    {
      number: "02",
      icon: Code,
      title: "Programare",
      text: "Codare profesională cu tehnologii moderne. Funcționalități complexe, performanță optimă.",
      details: {
        description:
          "Programare profesională cu tehnologii moderne și best practices. Dezvolt funcționalități complexe, aplicații web interactive și soluții custom adaptate nevoilor tale specifice.",
        features: [
          "Arhitectură software robustă",
          "API-uri RESTful și GraphQL",
          "Autentificare și autorizare securizată",
          "Integrare cu baze de date",
          "Real-time features (WebSockets)",
          "Microservicii și arhitectură modulară",
          "Code review și optimizare continuă",
        ],
        technologies: [
          "JavaScript/TypeScript",
          "Python",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Redis",
        ],
        benefits: [
          "Cod curat și maintainable",
          "Performanță optimă",
          "Securitate la nivel enterprise",
          "Scalabilitate orizontală",
          "Documentație tehnică completă",
        ],
      },
    },
    {
      number: "03",
      icon: Palette,
      title: "Design",
      text: "Design modern care combină estetica cu funcționalitatea. UX excepțional, conversii mai mari.",
      details: {
        description:
          "Design modern care combină perfect estetica cu funcționalitatea. Creăm interfețe utilizator excepționale care nu doar că arată bine, dar și convertesc vizitatorii în clienți.",
        features: [
          "UI/UX Design modern",
          "Prototipuri interactive (Figma)",
          "Design responsive pentru toate dispozitivele",
          "Aplicație design system consistent",
          "Optimizare pentru conversie (CRO)",
          "Accesibilitate (WCAG compliance)",
          "Animations și micro-interactions",
        ],
        technologies: [
          "Figma",
          "Adobe XD",
          "Photoshop",
          "Illustrator",
          "Principle",
          "Framer",
        ],
        benefits: [
          "Interfețe intuitive și ușor de folosit",
          "Design atractiv care diferențiază",
          "Experiență utilizator excepțională",
          "Conversii mai mari",
          "Branding consistent",
        ],
      },
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimizare",
      text: "Performanță, viteză și SEO pentru mai mulți vizitatori. Rezultate măsurabile, trafic crescut.",
      details: {
        description:
          "Optimizare completă pentru performanță, viteză și SEO. Transform site-ul tău într-o mașină eficientă care atrage mai mulți vizitatori și convertește mai bine.",
        features: [
          "Optimizare viteza de încărcare",
          "SEO on-page și off-page",
          "Optimizare imagini și assets",
          "Lazy loading și code splitting",
          "Caching strategies",
          "CDN integration",
          "Core Web Vitals optimization",
        ],
        technologies: [
          "Google Analytics",
          "Google Search Console",
          "PageSpeed Insights",
          "Lighthouse",
          "GTmetrix",
          "CDN (Cloudflare, AWS)",
        ],
        benefits: [
          "Viteză de încărcare îmbunătățită",
          "Poziții mai bune în Google",
          "Trafic organic crescut",
          "Experiență utilizator îmbunătățită",
          "Conversii mai mari",
        ],
      },
    },
    {
      number: "05",
      icon: RefreshCw,
      title: "Modernizare",
      text: "Actualizare site-uri vechi cu tehnologii noi. Modernizare completă, performanță îmbunătățită.",
      details: {
        description:
          "Modernizare completă a site-urilor vechi cu tehnologii noi și moderne. Transform site-ul tău într-unul performant, securizat și la zi cu tendințele actuale.",
        features: [
          "Migrare la tehnologii moderne",
          "Refactoring cod legacy",
          "Actualizare design la standarde actuale",
          "Optimizare arhitectură",
          "Migrare la framework-uri moderne",
          "Actualizare securitate",
          "Compatibilitate dispozitive noi",
        ],
        technologies: [
          "React/Next.js",
          "Vue.js",
          "TypeScript",
          "Modern CSS (Grid, Flexbox)",
          "Progressive Web Apps",
          "Modern JavaScript (ES6+)",
        ],
        benefits: [
          "Performanță mult îmbunătățită",
          "Securitate la zi",
          "Design modern și atractiv",
          "Mentenanță mai ușoară",
          "Experiență utilizator îmbunătățită",
        ],
      },
    },
    {
      number: "06",
      icon: Shield,
      title: "Mentenanță",
      text: "Suport continuu și actualizări de securitate. Disponibilitate 24/7, răspuns rapid.",
      details: {
        description:
          "Suport continuu și mentenanță pentru site-ul tău. Asigurăm că totul funcționează perfect, este securizat și actualizat constant.",
        features: [
          "Monitorizare continuă",
          "Backup-uri regulate automate",
          "Actualizări de securitate",
          "Actualizări software și plugin-uri",
          "Suport tehnic 24/7",
          "Răspuns rapid la probleme",
          "Rapoarte periodice de status",
        ],
        technologies: [
          "Monitoring tools",
          "Backup systems",
          "Security scanners",
          "Performance monitoring",
          "Uptime monitoring",
        ],
        benefits: [
          "Site-ul funcționează perfect mereu",
          "Securitate maximă",
          "Răspuns rapid la probleme",
          "Liniște deplină",
          "Actualizări constante",
        ],
      },
    },
  ];

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      
      <div className="page page-3">
        <div className="services-page-wrapper">
          {/* Floating Cards Background */}
          <div className="hero-visual hero-visual-right">
            <div className="floating-card card-1">
              <div className="card-content">WEB</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">DEV</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">UX</div>
            </div>
          </div>
          <div className="hero-visual hero-visual-left">
            <div className="floating-card card-4">
              <div className="card-content">SEO</div>
            </div>
            <div className="floating-card card-5">
              <div className="card-content">UI</div>
            </div>
            <div className="floating-card card-6">
              <div className="card-content">CODE</div>
            </div>
          </div>
          
          {/* LEFT SIDE - Text */}
          <div className="services-text-side">
            <div className="services-badge">SERVICII WEB</div>
            <h1 className="services-main-title">Soluții Complete</h1>
            <p className="services-description">
              Ofer servicii complete de creare, programare, design și optimizare pentru site-urile tale web. 
              De la concept până la lansare și mentenanță.
            </p>
            <button
              className="btn btn-primary services-cta-btn"
              onClick={() => setShowContact(true)}
              aria-label="Cere o ofertă"
            >
              Cere o ofertă
            </button>
          </div>
          
          {/* RIGHT SIDE - Service Boxes */}
          <div className="services-boxes-side">
            <div className="services-boxes-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="service-box service-box-clickable"
                    onClick={() => setSelectedService(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedService(index);
                      }
                    }}
                    aria-label={`Vezi detalii despre ${service.title}`}
                  >
                    <div className="service-box-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-box-title">{service.title}</h3>
                    <p className="service-box-text">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}

      {selectedService !== null && (
        <ServiceDetailPopup
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}
    </>
  );
}
