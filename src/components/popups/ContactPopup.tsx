"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Send } from "lucide-react";

interface ContactPopupProps {
  onClose: () => void;
}

export default function ContactPopup({ onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Mesajul a fost trimis! Voi reveni cu un răspuns în cel mai scurt timp.");
    setFormData({ name: "", email: "", message: "" });
  };

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
    <div className="section-popup active" id="popup-contact">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content popup-content-large">
        <div className="contact-layout-modern">
          <div className="contact-info-modern">
            <div className="contact-header-modern">
              <div className="contact-badge">HAI SĂ CREĂM</div>
              <h3 className="contact-title-modern">Site-ul tău web</h3>
              <div className="contact-accent-dot"></div>
            </div>
            <p className="contact-description-modern">
              Transform ideile tale în site-uri web moderne, performante și vizual atractive. 
              De la concept până la lansare, fiecare proiect este tratat cu atenție la detalii.
            </p>
            <div className="contact-methods-modern">
              {/* TODO: Replace with actual email address */}
              <a href="mailto:email@example.com" className="contact-method-modern method-1">
                <div className="method-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="method-content">
                  <span className="method-label">Email</span>
                  <span className="method-value">email@example.com</span>
                </div>
                <div className="method-arrow">→</div>
              </a>
              {/* TODO: Replace with actual phone number */}
              <a href="tel:+40123456789" className="contact-method-modern method-2">
                <div className="method-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div className="method-content">
                  <span className="method-label">Telefon</span>
                  <span className="method-value">+40 123 456 789</span>
                </div>
                <div className="method-arrow">→</div>
              </a>
            </div>
          </div>
          <form className="contact-form-modern" onSubmit={handleSubmit}>
            <div className="form-header-modern">
              <span className="form-label-modern">Trimite un mesaj</span>
              <div className="form-accent-line"></div>
            </div>
            <div className="form-group-modern">
              <label className="form-label">Nume</label>
              <input
                type="text"
                className="form-input-modern"
                name="name"
                placeholder="Cum te numești?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <div className="input-underline"></div>
            </div>
            <div className="form-group-modern">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input-modern"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div className="input-underline"></div>
            </div>
            <div className="form-group-modern form-group-textarea">
              <label className="form-label">Mesaj</label>
              <textarea
                className="form-input-modern form-textarea-modern"
                name="message"
                placeholder="Spune-mi despre proiectul tău..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <div className="input-underline"></div>
            </div>
            <button type="submit" className="btn-submit-modern" aria-label="Trimite mesajul">
              <span className="btn-text">Trimite Mesaj - Cere Ofertă</span>
              <div className="btn-icon">
                <Send size={20} />
              </div>
              <div className="btn-glow"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

