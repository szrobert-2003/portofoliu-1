"use client";

import { useEffect } from "react";

interface PricingPopupProps {
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function PricingPopup({ onClose, onOpenContact }: PricingPopupProps) {
  useEffect(() => {
    // Hide background elements when pricing popup is open
    const backgroundGradient = document.querySelector(".background-gradient");
    const fogBalloon = document.querySelector(".fog-balloon");
    
    if (backgroundGradient) {
      (backgroundGradient as HTMLElement).style.display = "none";
    }
    if (fogBalloon) {
      (fogBalloon as HTMLElement).style.display = "none";
    }
    
    return () => {
      // Restore background elements when popup closes
      if (backgroundGradient) {
        (backgroundGradient as HTMLElement).style.display = "";
      }
      if (fogBalloon) {
        (fogBalloon as HTMLElement).style.display = "";
      }
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

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
    <div className="section-popup active" id="popup-pricing">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content popup-content-large">
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
                onClick={() => {
                  onClose();
                  if (onOpenContact) {
                    setTimeout(() => {
                      onOpenContact();
                    }, 100);
                  }
                }}
                aria-label={`Cere ofertă pentru pachet ${plan.badge}`}
              >
                Cere Ofertă
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

