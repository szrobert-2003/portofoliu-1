"use client";

import { useEffect } from "react";
import { Monitor, Code, Palette, TrendingUp, RefreshCw, Shield } from "lucide-react";

interface ServicesPopupProps {
  onClose: () => void;
}

export default function ServicesPopup({ onClose }: ServicesPopupProps) {
  const services = [
    {
      number: "01",
      icon: Monitor,
      title: "Creare Site-uri",
      description: "Dezvoltare completă de la zero, adaptată nevoilor tale. Design modern, performanță garantată.",
    },
    {
      number: "02",
      icon: Code,
      title: "Programare",
      description: "Codare profesională cu tehnologii moderne. Funcționalități complexe, performanță optimă.",
    },
    {
      number: "03",
      icon: Palette,
      title: "Design",
      description: "Design modern care combină estetica cu funcționalitatea. UX excepțional, conversii mai mari.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimizare",
      description: "Performanță, viteză și SEO pentru mai mulți vizitatori. Rezultate măsurabile, trafic crescut.",
    },
    {
      number: "05",
      icon: RefreshCw,
      title: "Modernizare",
      description: "Actualizare site-uri vechi cu tehnologii noi. Modernizare completă, performanță îmbunătățită.",
    },
    {
      number: "06",
      icon: Shield,
      title: "Mentenanță",
      description: "Suport continuu și actualizări de securitate. Disponibilitate 24/7, răspuns rapid.",
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
    <div className="section-popup active" id="popup-services">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="services-layout-creative">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.number} className={`service-card-creative service-${index + 1}`}>
                <div className="service-number">{service.number}</div>
                <div className="service-content-wrapper">
                  <div className="service-icon-creative">
                    <Icon size={40} />
                  </div>
                  <h3 className="service-title-creative">{service.title}</h3>
                  <p className="service-description-creative">
                    {service.description.split(" ").slice(0, -2).join(" ")}{" "}
                    <strong>{service.description.split(" ").slice(-2).join(" ")}</strong>
                  </p>
                </div>
                <div className="service-accent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

