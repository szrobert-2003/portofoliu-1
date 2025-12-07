"use client";

import BottomNav from "@/components/BottomNav";
import ContactPopup from "@/components/popups/ContactPopup";
import { useState } from "react";

export default function PricingPage() {
  const [showContact, setShowContact] = useState(false);

  const pricingPlans = [
    {
      badge: "BASIC",
      price: "500€",
      period: "/proiect",
      features: [
        "Site web până la 5 pagini",
        "Design responsive",
        "Optimizare SEO de bază",
        "Formular de contact",
        "Suport 1 lună",
      ],
    },
    {
      badge: "PRO",
      price: "1200€",
      period: "/proiect",
      features: [
        "Site web până la 10 pagini",
        "Design custom modern",
        "Optimizare SEO avansată",
        "Integrare social media",
        "Suport 3 luni",
      ],
      featured: true,
    },
    {
      badge: "PREMIUM",
      price: "2500€",
      period: "/proiect",
      features: [
        "Site web nelimitat pagini",
        "Design premium custom",
        "E-commerce integration",
        "Optimizare performanță",
        "Suport 6 luni",
      ],
    },
  ];

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      
      <div className="page page-9">
        <div className="portfolio-container">
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text-wrapper">
                <div className="hero-badge">PREȚURI</div>
                <h2 className="hero-title">
                  <span className="title-line">Pachete</span>
                  <span className="title-line rotated">Servicii</span>
                </h2>
                <div className="hero-subtitle-wrapper">
                  <p className="hero-subtitle">
                    Alege pachetul potrivit pentru nevoile tale. Toate pachetele sunt personalizabile 
                    în funcție de cerințele tale specifice.
                  </p>
                  <div className="hero-accent-line"></div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section-content">
            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
                >
                  <div className="pricing-badge">{plan.badge}</div>
                  <div className="pricing-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  <ul className="pricing-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary"
                    onClick={() => setShowContact(true)}
                    aria-label={`Cere ofertă pentru pachet ${plan.badge}`}
                  >
                    Cere Ofertă
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BottomNav />

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}

