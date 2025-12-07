"use client";

import { useEffect } from "react";
import { Monitor, Server, Wrench } from "lucide-react";

interface TechnologiesPopupProps {
  onClose: () => void;
}

export default function TechnologiesPopup({ onClose }: TechnologiesPopupProps) {
  const technologies = [
    {
      badge: "FRONTEND",
      icon: Monitor,
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript"],
    },
    {
      badge: "BACKEND",
      icon: Server,
      tags: ["Node.js", "Python", "PHP", "Express", "MongoDB", "MySQL"],
    },
    {
      badge: "TOOLS & DESIGN",
      icon: Wrench,
      tags: ["Figma", "Adobe XD", "Photoshop", "Git", "Webpack", "SEO"],
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
    <div className="section-popup active" id="popup-technologies">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <div className="skills-layout-modern">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.badge}
                className={`skill-category-modern skill-${tech.badge.toLowerCase().replace(/\s+/g, "-")}-modern`}
              >
                <div className="skill-category-badge">{tech.badge}</div>
                <div className="skill-category-icon">
                  <Icon size={48} />
                </div>
                <div className="skill-tags-modern">
                  {tech.tags.map((tag, tagIndex) => (
                    <div key={tag} className={`skill-tag-modern tag-${tagIndex + 1}`}>
                      <span className="tag-text">{tag}</span>
                      <div className="tag-glow"></div>
                    </div>
                  ))}
                </div>
                <div className="skill-accent-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

