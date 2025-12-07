"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieConsent");
    if (!cookieAccepted) {
      setTimeout(() => {
        setShowConsent(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="cookie-consent" id="cookie-consent">
      <div className="cookie-consent-content">
        <div className="cookie-consent-text">
          <p>
            Acest site folosește cookie-uri pentru a îmbunătăți experiența ta. Continuând să navighezi, 
            ești de acord cu <a href="#" onClick={(e) => { e.preventDefault(); alert("Politica de Cookie-uri"); }}>Politica de Cookie-uri</a>.
          </p>
        </div>
        <div className="cookie-consent-buttons">
          <button
            className="cookie-btn cookie-accept"
            onClick={acceptCookies}
            aria-label="Acceptă cookie-uri"
          >
            Accept
          </button>
          <button
            className="cookie-btn cookie-decline"
            onClick={declineCookies}
            aria-label="Refuză cookie-uri"
          >
            Refuză
          </button>
        </div>
      </div>
    </div>
  );
}

