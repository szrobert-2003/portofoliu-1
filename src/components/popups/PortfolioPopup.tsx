"use client";

import { useEffect } from "react";
import { ShoppingCart, Building, Briefcase } from "lucide-react";

interface PortfolioPopupProps {
  onClose: () => void;
}

export default function PortfolioPopup({ onClose }: PortfolioPopupProps) {
  const portfolioItems = [
    {
      number: "01",
      title: "Site E-Commerce",
      description: "Design modern, optimizat performanță și conversie.",
      tags: ["HTML5", "CSS3", "JS"],
      placeholder: "E-COMMERCE",
    },
    {
      number: "02",
      title: "Site Corporate",
      description: "Modernizat, optimizat SEO, viteză îmbunătățită.",
      tags: ["React", "SEO"],
      placeholder: "CORPORATE",
    },
    {
      number: "03",
      title: "Portfolio Website",
      description: "Design unic, animații fluide, UX excepțională.",
      tags: ["Vue.js", "Design"],
      placeholder: "PORTFOLIO",
    },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="section-popup active" id="popup-portfolio">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="portfolio-layout-creative">
          {portfolioItems.map((item, index) => (
            <div key={item.number} className={`portfolio-item-creative portfolio-${index + 1}`}>
              <div className="portfolio-number">{item.number}</div>
              <div className="portfolio-image-creative">
                <div className="portfolio-placeholder-creative">{item.placeholder}</div>
              </div>
              <div className="portfolio-info-creative">
                <h3 className="portfolio-title-creative">{item.title}</h3>
                <p className="portfolio-description-creative">{item.description}</p>
                <div className="portfolio-tags-creative">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

