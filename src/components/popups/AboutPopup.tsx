"use client";

import { useState, useEffect, useRef } from "react";

interface AboutPopupProps {
  onClose: () => void;
}

export default function AboutPopup({ onClose }: AboutPopupProps) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Reset counters when popup opens
    setCount1(0);
    setCount2(0);
    setCount3(0);
    hasAnimated.current = false;

    let timer1: NodeJS.Timeout | null = null;
    let timer2: NodeJS.Timeout | null = null;
    let timer3: NodeJS.Timeout | null = null;

    // Small delay to ensure popup is visible
    const startDelay = setTimeout(() => {
      hasAnimated.current = true;

      // Animate first counter (50+)
      const duration1 = 2000; // 2 seconds
      const steps1 = 50;
      const increment1 = 50 / steps1;
      const stepDuration1 = duration1 / steps1;
      let current1 = 0;

      timer1 = setInterval(() => {
        current1 += increment1;
        if (current1 >= 50) {
          setCount1(50);
          if (timer1) clearInterval(timer1);
        } else {
          setCount1(Math.floor(current1));
        }
      }, stepDuration1);

      // Animate second counter (5+)
      const duration2 = 1500; // 1.5 seconds
      const steps2 = 5;
      const increment2 = 5 / steps2;
      const stepDuration2 = duration2 / steps2;
      let current2 = 0;

      timer2 = setInterval(() => {
        current2 += increment2;
        if (current2 >= 5) {
          setCount2(5);
          if (timer2) clearInterval(timer2);
        } else {
          setCount2(Math.floor(current2));
        }
      }, stepDuration2);

      // Animate third counter (100%)
      const duration3 = 2000; // 2 seconds
      const steps3 = 100;
      const increment3 = 100 / steps3;
      const stepDuration3 = duration3 / steps3;
      let current3 = 0;

      timer3 = setInterval(() => {
        current3 += increment3;
        if (current3 >= 100) {
          setCount3(100);
          if (timer3) clearInterval(timer3);
        } else {
          setCount3(Math.floor(current3));
        }
      }, stepDuration3);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
      if (timer3) clearInterval(timer3);
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

  return (
    <div className="section-popup active" id="popup-about">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="about-layout-creative">
          <div className="about-text-creative">
            <div className="text-block block-1">
              <span className="text-label">FOCUS</span>
              <p>
                Mă ocup exclusiv cu <strong>crearea, programarea, optimizarea, modernizarea și designul</strong> site-urilor web.
              </p>
            </div>
            <div className="text-block block-2">
              <span className="text-label">PROCES</span>
              <p>
                Transform ideile tale în site-uri web <strong>moderne, performante și vizual atractive</strong>, 
                de la concept până la lansare. <strong>Rezultate garantate, prețuri competitive.</strong>
              </p>
            </div>
          </div>
          <div className="about-stats-creative">
            <div className="stat-item-creative stat-1">
              <div className="stat-number-creative">{count1}+</div>
              <div className="stat-label-creative">Site-uri Create</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-item-creative stat-2">
              <div className="stat-number-creative">{count2}+</div>
              <div className="stat-label-creative">Ani Experiență</div>
              <div className="stat-line"></div>
            </div>
            <div className="stat-item-creative stat-3">
              <div className="stat-number-creative">{count3}%</div>
              <div className="stat-label-creative">Satisfacție</div>
              <div className="stat-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

