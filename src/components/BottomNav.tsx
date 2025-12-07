"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Monitor, Layers, HelpCircle, Workflow } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: "home", path: "/home", icon: Home, label: "Acasă" },
    { id: "services", path: "/services", icon: Monitor, label: "Servicii" },
    { id: "technologies", path: "/technologies", icon: Layers, label: "Tehnologii" },
    { id: "faq", path: "/faq", icon: HelpCircle, label: "FAQ" },
    { id: "process", path: "/process", icon: Workflow, label: "Proces" },
  ];

  const handleNavClick = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path;
  };

  return (
    <nav className="windows-nav">
      <div className="nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          if (!Icon) return null;

          return (
            <a
              key={item.id}
              href={item.path}
              className={`nav-item nav-${item.id} ${active ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
              aria-label={item.label}
            >
              <Icon className="nav-icon" size={20} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

