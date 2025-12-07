"use client";

import { useRouter } from "next/navigation";
import { BookOpen, HelpCircle, Workflow, X } from "lucide-react";

interface MorePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MorePopup({ isOpen, onClose }: MorePopupProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`more-popup ${isOpen ? "active" : ""}`}>
      <div className="more-popup-overlay" onClick={onClose}></div>
      <div className="more-popup-content">
        <button className="more-popup-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        <div className="more-popup-header">
          <h3 className="more-popup-title">Mai Multe</h3>
        </div>
        <div className="more-popup-buttons">
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', padding: '20px' }}>
            Nu există opțiuni disponibile momentan.
          </p>
        </div>
      </div>
    </div>
  );
}

