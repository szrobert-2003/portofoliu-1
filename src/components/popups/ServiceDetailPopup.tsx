"use client";

import { useEffect } from "react";
import { LucideIcon, Sparkles, CheckCircle2 } from "lucide-react";

interface ServiceDetailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    number: string;
    icon: LucideIcon;
    title: string;
    text: string;
    details?: {
      description: string;
      features: string[];
      technologies?: string[];
      benefits: string[];
    };
  } | null;
}

export default function ServiceDetailPopup({
  isOpen,
  onClose,
  service,
}: ServiceDetailPopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const Icon = service.icon;

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header Section - Modern Design */}
        <div className="service-modal-header">
          <div className="service-modal-icon-bg">
            <Icon size={56} />
          </div>
          <div className="service-modal-header-content">
            <span className="service-modal-badge">SERVICIU {service.number}</span>
            <h2 className="service-modal-title">{service.title}</h2>
            <p className="service-modal-subtitle">{service.text}</p>
          </div>
        </div>

        {service.details && (
          <div className="service-modal-body">
            {/* Description Card */}
            <div className="service-modal-card service-modal-card-primary">
              <div className="service-modal-card-header">
                <Sparkles size={20} />
                <h3 className="service-modal-card-title">Despre Serviciu</h3>
              </div>
              <p className="service-modal-card-text">
                {service.details.description}
              </p>
            </div>

            {/* Features Grid */}
            {service.details.features && service.details.features.length > 0 && (
              <div className="service-modal-card">
                <div className="service-modal-card-header">
                  <CheckCircle2 size={20} />
                  <h3 className="service-modal-card-title">Caracteristici</h3>
                </div>
                <div className="service-modal-grid">
                  {service.details.features.map((feature, index) => (
                    <div key={index} className="service-modal-grid-item">
                      <div className="service-modal-grid-icon">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="service-modal-grid-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies & Benefits Side by Side */}
            <div className="service-modal-row">
              {service.details.technologies &&
                service.details.technologies.length > 0 && (
                  <div className="service-modal-card service-modal-card-half">
                    <div className="service-modal-card-header">
                      <h3 className="service-modal-card-title">Tehnologii</h3>
                    </div>
                    <div className="service-modal-tech-grid">
                      {service.details.technologies.map((tech, index) => (
                        <div key={index} className="service-modal-tech-badge">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {service.details.benefits && service.details.benefits.length > 0 && (
                <div className="service-modal-card service-modal-card-half">
                  <div className="service-modal-card-header">
                    <h3 className="service-modal-card-title">Beneficii</h3>
                  </div>
                  <div className="service-modal-benefits-list">
                    {service.details.benefits.map((benefit, index) => (
                      <div key={index} className="service-modal-benefit-item">
                        <div className="service-modal-benefit-dot"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="service-modal-footer">
          <button
            className="service-modal-cta-btn"
            onClick={onClose}
            aria-label="Închide"
          >
            <span>Am înțeles</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

