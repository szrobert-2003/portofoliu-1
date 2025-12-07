"use client";

import BottomNav from "@/components/BottomNav";
import { Monitor, Server, Wrench, Zap, ShoppingCart, Building, Briefcase, Layers, Users } from "lucide-react";

export default function TechnologiesPage() {
  const technologies = [
    {
      number: "01",
      icon: Monitor,
      title: "Frontend",
      text: "HTML5, CSS3, JavaScript, React, Vue.js, TypeScript. Tehnologii moderne pentru interfețe utilizator performante.",
    },
    {
      number: "02",
      icon: Server,
      title: "Backend",
      text: "Node.js, Python, PHP, Express, MongoDB, MySQL. Soluții server-side robuste și scalabile.",
    },
    {
      number: "03",
      icon: Wrench,
      title: "Tools & Design",
      text: "Figma, Git, Webpack, Docker, AWS, Photoshop. Instrumente profesionale pentru dezvoltare și design.",
    },
    {
      number: "04",
      icon: Zap,
      title: "Performance",
      text: "Optimizare viteza, caching, CDN, lazy loading. Tehnici avansate pentru performanță maximă.",
    },
  ];

  const portfolioItems = [
    {
      number: "01",
      icon: ShoppingCart,
      title: "E-Commerce",
      text: "Site-uri de vânzare online complete, optimizate pentru conversie și performanță. Design modern, funcționalități avansate.",
    },
    {
      number: "02",
      icon: Building,
      title: "Corporate",
      text: "Site-uri corporative profesionale, optimizate SEO, viteză îmbunătățită. Modernizare și redesign complet.",
    },
    {
      number: "03",
      icon: Briefcase,
      title: "Portfolio",
      text: "Site-uri portfolio creative, design unic, animații fluide. UX excepțională pentru prezentare profesională.",
    },
    {
      number: "04",
      icon: Layers,
      title: "Landing Pages",
      text: "Pagini de destinație optimizate pentru conversie. Design atractiv, mesaje clare, call-to-action eficiente.",
    },
  ];

  const testimonials = [
    {
      number: "01",
      icon: Users,
      title: "Alexandru M.",
      text: '"Site-ul creat este exact ce aveam nevoie. Design modern, viteză excelentă și suport continuu. Recomand cu încredere!"',
      rating: "★★★★★",
      author: "CEO, Companie Tech",
    },
    {
      number: "02",
      icon: Users,
      title: "Maria P.",
      text: '"Profesionalism de top! A transformat complet site-ul nostru vechi într-unul modern și performant. Rezultatele au depășit așteptările."',
      rating: "★★★★★",
      author: "Manager Marketing",
    },
    {
      number: "03",
      icon: Users,
      title: "Ion D.",
      text: '"Răspuns rapid, prețuri corecte, rezultate excelente. Site-ul nostru e-commerce funcționează perfect de luni de zile."',
      rating: "★★★★★",
      author: "Fondator E-Commerce",
    },
    {
      number: "04",
      icon: Users,
      title: "Ana C.",
      text: '"Colaborare excelentă de la început până la final. Site-ul este exact cum l-am imaginat, chiar mai bine. Mulțumim!"',
      rating: "★★★★★",
      author: "Designer Freelancer",
    },
  ];

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      
      <div className="page page-4">
        {/* Technologies Section */}
        <div className="services-page-wrapper">
          <div className="hero-visual hero-visual-right">
            <div className="floating-card card-1">
              <div className="card-content">REACT</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">NODE</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">VUE</div>
            </div>
          </div>
          <div className="hero-visual hero-visual-left">
            <div className="floating-card card-4">
              <div className="card-content">TS</div>
            </div>
            <div className="floating-card card-5">
              <div className="card-content">PY</div>
            </div>
            <div className="floating-card card-6">
              <div className="card-content">PHP</div>
            </div>
          </div>

          <div className="services-text-side">
            <div className="services-badge">TECH STACK</div>
            <h1 className="services-main-title">Tehnologii Moderne</h1>
            <p className="services-description">
              Folosesc cele mai moderne tehnologii și framework-uri pentru a crea soluții web performante, 
              scalabile și de ultimă generație.
            </p>
          </div>

          <div className="services-boxes-side">
            <div className="services-boxes-grid">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="service-box">
                    <div className="service-box-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-box-title">{tech.title}</h3>
                    <p className="service-box-text">{tech.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="services-page-wrapper" style={{ paddingTop: "80px" }}>
          <div className="hero-visual hero-visual-right">
            <div className="floating-card card-1">
              <div className="card-content">PROJ</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">SITE</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">APP</div>
            </div>
          </div>
          <div className="hero-visual hero-visual-left">
            <div className="floating-card card-4">
              <div className="card-content">DESIGN</div>
            </div>
            <div className="floating-card card-5">
              <div className="card-content">DEV</div>
            </div>
            <div className="floating-card card-6">
              <div className="card-content">CODE</div>
            </div>
          </div>

          <div className="services-text-side">
            <div className="services-badge">PROIECTE</div>
            <h1 className="services-main-title">Portofoliu Realizări</h1>
            <p className="services-description">
              Explorează proiectele mele și descoperă calitatea și diversitatea soluțiilor web 
              pe care le-am creat pentru clienții mei.
            </p>
          </div>

          <div className="services-boxes-side">
            <div className="services-boxes-grid">
              {portfolioItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="service-box">
                    <div className="service-box-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-box-title">{item.title}</h3>
                    <p className="service-box-text">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="services-page-wrapper" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="hero-visual hero-visual-right">
            <div className="floating-card card-1">
              <div className="card-content">★</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">5★</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">100%</div>
            </div>
          </div>
          <div className="hero-visual hero-visual-left">
            <div className="floating-card card-4">
              <div className="card-content">REV</div>
            </div>
            <div className="floating-card card-5">
              <div className="card-content">TEST</div>
            </div>
            <div className="floating-card card-6">
              <div className="card-content">OK</div>
            </div>
          </div>

          <div className="services-text-side">
            <div className="services-badge">RECENZII</div>
            <h1 className="services-main-title">Feedback Clienți</h1>
            <p className="services-description">
              Descoperă ce spun clienții mei despre colaborarea cu mine și despre calitatea serviciilor oferite.
            </p>
          </div>

          <div className="services-boxes-side">
            <div className="services-boxes-grid">
              {testimonials.map((testimonial, index) => {
                const Icon = testimonial.icon;
                return (
                  <div key={index} className="service-box">
                    <div className="service-box-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="service-box-title">{testimonial.title}</h3>
                    <p className="service-box-text">{testimonial.text}</p>
                    <div className="service-box-rating">{testimonial.rating}</div>
                    <div className="service-box-author">{testimonial.author}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
