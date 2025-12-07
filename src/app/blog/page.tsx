"use client";

import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      date: "15 Ian 2024",
      title: "Cum să optimizezi performanța site-ului tău",
      excerpt: "Ghid complet despre optimizarea vitezei de încărcare, lazy loading și best practices pentru performanță web.",
      link: "#",
    },
    {
      date: "10 Ian 2024",
      title: "Tendințe în Web Design 2024",
      excerpt: "Descoperă cele mai noi tendințe în design web, de la glassmorphism la dark mode și animații fluide.",
      link: "#",
    },
    {
      date: "5 Ian 2024",
      title: "SEO Essentials pentru Site-uri Web",
      excerpt: "Învață elementele esențiale de SEO care îți vor crește vizibilitatea în motoarele de căutare.",
      link: "#",
    },
  ];

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      
      <div className="page page-7">
        <div className="portfolio-container">
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text-wrapper">
                <div className="hero-badge">BLOG</div>
                <h2 className="hero-title">
                  <span className="title-line">Articole</span>
                  <span className="title-line rotated">Web Dev</span>
                </h2>
                <div className="hero-subtitle-wrapper">
                  <p className="hero-subtitle">
                    Descoperă articole despre web development, design, optimizare și cele mai noi tendințe în tehnologie.
                  </p>
                  <div className="hero-accent-line"></div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="section-content">
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-card-date">{post.date}</div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-link" style={{ cursor: 'default', opacity: 0.6 }}>
                    În curând...
                  </span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
    </>
  );
}

