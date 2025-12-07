"use client";

import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import AboutPopup from "@/components/popups/AboutPopup";
import ContactPopup from "@/components/popups/ContactPopup";
import PricingPopup from "@/components/popups/PricingPopup";

export default function HomePage() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (id: string) => {
    setActivePopup(id);
  };

  const closePopup = (id: string) => {
    setActivePopup(null);
  };

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      
      <div className="page page-2">
        <div className="portfolio-container">
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text-wrapper">
                <div className="hero-badge">WEB SPECIALIST</div>
                <h2 className="hero-title">
                  <span className="title-line">Developer</span>
                  <span className="title-line rotated">Web Designer</span>
                </h2>
                <div className="hero-subtitle-wrapper">
                  <p className="hero-subtitle">
                    Transform ideile tale în site-uri web moderne, performante și vizual atractive. 
                    De la concept până la lansare, cu rezultate garantate.
                  </p>
                  <div className="hero-accent-line"></div>
                </div>
              </div>
              
              <div className="hero-visual hero-visual-right">
                <div className="floating-card card-1">
                  <div className="card-content">HTML</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-content">CSS</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-content">JS</div>
                </div>
              </div>
              
              <div className="hero-visual hero-visual-left">
                <div className="floating-card card-4">
                  <div className="card-content">HTML</div>
                </div>
                <div className="floating-card card-5">
                  <div className="card-content">CSS</div>
                </div>
                <div className="floating-card card-6">
                  <div className="card-content">JS</div>
                </div>
              </div>
              
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary" 
                  onClick={() => openPopup("about")}
                  aria-label="Despre mine"
                >
                  Despre
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => openPopup("pricing")}
                  aria-label="Prețuri"
                >
                  Prețuri
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => openPopup("contact")}
                  aria-label="Contactează-mă"
                >
                  Contact
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <BottomNav />

      {activePopup === "about" && (
        <AboutPopup onClose={() => closePopup("about")} />
      )}
      {activePopup === "contact" && (
        <ContactPopup onClose={() => closePopup("contact")} />
      )}
      {activePopup === "pricing" && (
        <PricingPopup 
          onClose={() => closePopup("pricing")} 
          onOpenContact={() => openPopup("contact")}
        />
      )}
    </>
  );
}

