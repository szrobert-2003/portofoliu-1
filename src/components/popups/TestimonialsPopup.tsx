"use client";

import { useEffect } from "react";

interface TestimonialsPopupProps {
  onClose: () => void;
}

export default function TestimonialsPopup({ onClose }: TestimonialsPopupProps) {
  const testimonials = [
    {
      rating: "★★★★★",
      text: '"Site-ul creat este exact ce aveam nevoie. Design modern, viteză excelentă și suport continuu. Recomand cu încredere!"',
      author: "Alexandru M.",
      role: "CEO, Companie Tech",
    },
    {
      rating: "★★★★★",
      text: '"Profesionalism de top! A transformat complet site-ul nostru vechi într-unul modern și performant. Rezultatele au depășit așteptările."',
      author: "Maria P.",
      role: "Manager Marketing",
    },
    {
      rating: "★★★★★",
      text: '"Răspuns rapid, prețuri corecte și rezultate excelente. Site-ul nostru arată profesional și funcționează perfect pe toate dispozitivele."',
      author: "Ion D.",
      role: "Antreprenor",
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
    <div className="section-popup active" id="popup-testimonials">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

