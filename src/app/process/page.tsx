"use client";

import { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import ContactPopup from "@/components/popups/ContactPopup";
import { Lightbulb, Palette, Code, Rocket, Shield, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: Lightbulb,
    badge: "Fundament",
    title: "Consultare & Planificare",
    tags: ["Analiză", "Strategie"],
    description: "Înțelegem nevoile tale, obiectivele și viziunea pentru site. Analizăm piața și concurenții pentru a crea o strategie personalizată.",
    features: [
      "Analiză detaliată a nevoilor",
      "Strategie personalizată",
      "Plan de proiect clar"
    ]
  },
  {
    id: 2,
    icon: Palette,
    badge: "Viziune",
    title: "Design & Wireframes",
    tags: ["UI/UX", "Mockup"],
    description: "Creăm wireframe-uri și mockup-uri care transformă ideile în designuri vizuale. Fiecare element este planificat pentru o experiență optimă.",
    features: [
      "Wireframes interactive",
      "Design modern și responsiv",
      "Revizuiri și ajustări"
    ]
  },
  {
    id: 3,
    icon: Code,
    badge: "Implementare",
    title: "Dezvoltare Frontend",
    tags: ["HTML/CSS", "JS"],
    description: "Transformăm designul în cod. Creăm interfața utilizatorului cu tehnologii moderne, asigurându-ne că totul funcționează perfect pe toate dispozitivele.",
    features: [
      "HTML5, CSS3, JavaScript",
      "Design responsiv",
      "Animații și interacțiuni"
    ]
  },
  {
    id: 4,
    icon: Code,
    badge: "Funcționalitate",
    title: "Dezvoltare Backend",
    tags: ["API", "Database"],
    description: "Construim funcționalitățile de backend care fac site-ul tău dinamic. Integrăm baze de date, API-uri și sisteme de management al conținutului.",
    features: [
      "Baze de date optimizate",
      "API-uri și integrare",
      "Securitate și performanță"
    ]
  },
  {
    id: 5,
    icon: Shield,
    badge: "Calitate",
    title: "Testare & Optimizare",
    tags: ["QA", "Performance"],
    description: "Testăm exhaustiv site-ul pentru a ne asigura că totul funcționează perfect. Optimizăm performanța, securitatea și experiența utilizatorului.",
    features: [
      "Testare cross-browser",
      "Optimizare performanță",
      "Testare securitate"
    ]
  },
  {
    id: 6,
    icon: Rocket,
    badge: "Finalizare",
    title: "Lansare & Suport",
    tags: ["Live", "Support"],
    description: "Lansăm site-ul tău live și oferim suport continuu. Te ajutăm cu hosting, domeniu și menținere pentru a-ți asigura succesul online.",
    features: [
      "Deployment profesional",
      "Configurare hosting",
      "Suport post-lansare"
    ]
  }
];

export default function ProcessPage() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('scroll-enabled');
    document.body.classList.add('scroll-enabled');
    return () => {
      document.documentElement.classList.remove('scroll-enabled');
      document.body.classList.remove('scroll-enabled');
    };
  }, []);

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>

      {/* Floating Cards Background */}
      <div className="hero-visual hero-visual-right">
        <div className="floating-card card-1">
          <div className="card-content">PLAN</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-content">DESIGN</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-content">CODE</div>
        </div>
      </div>
      
      <div className="hero-visual hero-visual-left">
        <div className="floating-card card-4">
          <div className="card-content">TEST</div>
        </div>
        <div className="floating-card card-5">
          <div className="card-content">LAUNCH</div>
        </div>
        <div className="floating-card card-6">
          <div className="card-content">SUPPORT</div>
        </div>
      </div>

      <div className="process-page">
        {/* Hero Section */}
        <section className="process-hero-section">
          <div className="process-container">
            <div className="process-hero-content">
              <h1 className="process-hero-title">Procesul de Creare a Site-ului</h1>
              <p className="process-hero-subtitle">Descoperă pașii care transformă ideea ta într-un site web profesional</p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="process-steps-section">
          <div className="process-container">
            <div className="process-grid">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="process-card">
                    <div className="process-card-badge">{step.badge}</div>
                    <div className="process-card-icon">
                      <Icon size={48} />
                    </div>
                    <div className="process-card-content">
                      <div className="process-card-header">
                        <h2 className="process-card-title">{step.title}</h2>
                        <div className="process-card-tags">
                          {step.tags.map((tag, idx) => (
                            <span key={idx} className="process-card-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <p className="process-card-description">{step.description}</p>
                      <ul className="process-card-features">
                        {step.features.map((feature, idx) => (
                          <li key={idx}>
                            <CheckCircle2 size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="process-cta-section">
          <div className="process-container">
            <div className="process-cta-card">
              <h2 className="process-cta-title">Gata să începem?</h2>
              <p className="process-cta-description">Hai să discutăm despre proiectul tău și să transformăm ideile în realitate.</p>
              <button className="process-cta-button" onClick={() => setShowContact(true)}>
                Contactează-ne acum
              </button>
            </div>
          </div>
        </section>
      </div>

      <BottomNav />

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}
