"use client";

import { useState, useEffect, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import ContactPopup from "@/components/popups/ContactPopup";
import { Search, X, ChevronDown, HelpCircle } from "lucide-react";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "Ce este acest serviciu?",
    answer: "Ofer servicii complete de creare și dezvoltare site-uri web profesionale. De la design modern până la programare și optimizare, transform ideile tale într-un site web funcțional și atractiv.",
    category: "general",
    tags: ["serviciu", "informații"]
  },
  {
    id: 2,
    question: "Cum pot începe să folosesc serviciul?",
    answer: "Poți începe prin a mă contacta pentru o consultație gratuită. În timpul consultației discutăm despre nevoile tale, obiectivele și bugetul disponibil. Apoi îți pregătesc o ofertă personalizată.",
    category: "general",
    tags: ["început", "ghid"]
  },
  {
    id: 3,
    question: "Care sunt beneficiile acestui serviciu?",
    answer: "Beneficiile includ: site web profesional care reprezintă brandul tău, prezență online 24/7, creștere credibilitate și încredere, posibilitate de a atrage clienți noi, și un instrument puternic pentru marketing și vânzări.",
    category: "general",
    tags: ["beneficii", "avantaje"]
  },
  {
    id: 4,
    question: "Cum pot crea un cont?",
    answer: "Nu este necesar un cont pentru a începe. Pur și simplu mă contactezi prin formularul de contact sau direct, și începem colaborarea. Îți voi oferi acces la un dashboard pentru a urmări progresul proiectului.",
    category: "general",
    tags: ["cont", "înregistrare"]
  },
  {
    id: 5,
    question: "Este serviciul gratuit?",
    answer: "Consultația inițială este gratuită. Serviciile de creare site web sunt plătite, dar ofer pachete flexibile adaptate bugetului tău. Poți alege între pachete de bază sau premium, în funcție de nevoile tale.",
    category: "general",
    tags: ["preț", "gratuit"]
  },
  {
    id: 6,
    question: "Cum funcționează tehnologia din spate?",
    answer: "Folosesc tehnologii moderne și performante: React/Next.js pentru frontend, Node.js/Python pentru backend, și baze de date optimizate. Toate tehnologiile sunt alese pentru performanță, securitate și scalabilitate.",
    category: "technical",
    tags: ["tehnologie", "funcționare"]
  },
  {
    id: 7,
    question: "Ce cerințe tehnice sunt necesare?",
    answer: "Nu ai nevoie de cunoștințe tehnice. Eu mă ocup de toate aspectele tehnice. Tot ce ai nevoie este să îmi comunici ideile și preferințele tale. Site-ul va funcționa perfect pe orice dispozitiv modern.",
    category: "technical",
    tags: ["cerințe", "sistem"]
  },
  {
    id: 8,
    question: "Cum pot rezolva probleme tehnice?",
    answer: "Ofer suport tehnic complet. Dacă apar probleme, mă contactezi și le rezolv rapid. Pentru clienții cu pachete de mentenanță, suportul este inclus și răspund în maximum 24 de ore.",
    category: "technical",
    tags: ["probleme", "soluții"]
  },
  {
    id: 9,
    question: "Este necesară instalarea unui software?",
    answer: "Nu, nu este necesară instalarea de software. Site-ul funcționează direct în browser pe orice dispozitiv. Dacă dorești să administrezi conținutul, îți ofer acces la un panou de administrare web simplu de folosit.",
    category: "technical",
    tags: ["instalare", "software"]
  },
  {
    id: 10,
    question: "Cum pot actualiza aplicația?",
    answer: "Actualizările se fac automat sau la cerere. Pentru clienții cu pachete de mentenanță, actualizările sunt incluse. Pot actualiza funcționalități, adăuga feature-uri noi sau îmbunătăți existente oricând.",
    category: "technical",
    tags: ["actualizare", "versiune"]
  },
  {
    id: 11,
    question: "Care sunt opțiunile de plată?",
    answer: "Accept plăți prin transfer bancar, card bancar sau alte metode convenabile. Ofer flexibilitate în planificarea plăților, de obicei în 2-3 tranșe pe parcursul proiectului.",
    category: "billing",
    tags: ["plată", "facturare"]
  },
  {
    id: 12,
    question: "Cum pot vedea facturile mele?",
    answer: "Îți trimit facturile electronice pe email după fiecare tranșă de plată. Toate facturile sunt documentate și le poți accesa oricând. Ofer și rapoarte periodice pentru clienții cu pachete de mentenanță.",
    category: "billing",
    tags: ["facturi", "istoric"]
  },
  {
    id: 13,
    question: "Pot anula abonamentul oricând?",
    answer: "Da, pachetele de mentenanță pot fi anulate oricând cu o notificare prealabilă. Nu există penalități pentru anulare. Serviciile deja prestate rămân valabile până la data anulării.",
    category: "billing",
    tags: ["anulare", "abonament"]
  },
  {
    id: 14,
    question: "Cum pot schimba metoda de plată?",
    answer: "Poți schimba metoda de plată oricând prin simpla comunicare. Îți actualizez datele și următoarele plăți se vor face conform noii metode alese. Procesul este simplu și rapid.",
    category: "billing",
    tags: ["metodă", "plată"]
  },
  {
    id: 15,
    question: "Când se face facturarea?",
    answer: "Facturarea se face în etape: 30% la începutul proiectului, 40% la jumătatea dezvoltării, și 30% la finalizare și lansare. Pentru pachetele de mentenanță, facturarea este lunară sau anuală, în funcție de planul ales.",
    category: "billing",
    tags: ["dată", "facturare"]
  },
  {
    id: 16,
    question: "Cum pot contacta suportul?",
    answer: "Mă poți contacta prin formularul de contact de pe site, email direct, sau telefon. Răspund la toate solicitările în cel mai scurt timp posibil. Pentru clienții cu pachete premium, ofer suport priorititar.",
    category: "support",
    tags: ["suport", "contact"]
  },
  {
    id: 17,
    question: "Care sunt orele de program ale suportului?",
    answer: "Suportul este disponibil de luni până vineri, 9:00-18:00. Pentru urgențe, pot fi contactat și în afara programului. Clienții cu pachete de mentenanță premium beneficiază de suport extins.",
    category: "support",
    tags: ["program", "ore"]
  },
  {
    id: 18,
    question: "Cât timp durează răspunsul de la suport?",
    answer: "Răspund de obicei în 24 de ore pentru întrebări generale. Pentru probleme urgente, răspund în maximum 4-6 ore. Clienții cu pachete premium beneficiază de răspunsuri în maximum 2 ore.",
    category: "support",
    tags: ["timp", "răspuns"]
  },
  {
    id: 19,
    question: "Pot primi suport prin telefon?",
    answer: "Da, ofer suport telefonic pentru discuții mai complexe sau urgente. Programăm un apel telefonic când este necesar. Pentru clienții cu pachete premium, suportul telefonic este disponibil mai frecvent.",
    category: "support",
    tags: ["telefon", "suport"]
  },
  {
    id: 20,
    question: "Există un chat live disponibil?",
    answer: "Momentan nu ofer chat live, dar răspund rapid la email-uri și mesaje. Pentru întrebări urgente, poți folosi formularul de contact sau să mă suni direct. Planific să adaug chat live în viitor.",
    category: "support",
    tags: ["chat", "live"]
  }
];

const categories = [
  { id: 'general', label: 'General' },
  { id: 'technical', label: 'Tehnic' },
  { id: 'billing', label: 'Facturare' },
  { id: 'support', label: 'Suport' }
];

export default function FAQPage() {
  const [currentCategory, setCurrentCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const answerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const filteredFaqs = faqData.filter(item => {
    if (searchTerm) {
      const matchesSearch = 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSearch;
    }
    return item.category === currentCategory;
  });

  useEffect(() => {
    document.documentElement.classList.add('scroll-enabled');
    document.body.classList.add('scroll-enabled');
    return () => {
      document.documentElement.classList.remove('scroll-enabled');
      document.body.classList.remove('scroll-enabled');
    };
  }, []);

  useEffect(() => {
    Object.keys(answerRefs.current).forEach((key) => {
      const element = answerRefs.current[parseInt(key)];
      if (element) {
        if (activeFaq === parseInt(key)) {
          element.style.maxHeight = `${element.scrollHeight}px`;
        } else {
          element.style.maxHeight = '0px';
        }
      }
    });
  }, [activeFaq]);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setSearchTerm('');
    setActiveFaq(null);
  };

  return (
    <>
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>

      {/* Floating Cards Background */}
      <div className="hero-visual hero-visual-right">
        <div className="floating-card card-1">
          <div className="card-content">FAQ</div>
        </div>
        <div className="floating-card card-2">
          <div className="card-content">HELP</div>
        </div>
        <div className="floating-card card-3">
          <div className="card-content">INFO</div>
        </div>
      </div>
      
      <div className="hero-visual hero-visual-left">
        <div className="floating-card card-4">
          <div className="card-content">Q&A</div>
        </div>
        <div className="floating-card card-5">
          <div className="card-content">SUPPORT</div>
        </div>
        <div className="floating-card card-6">
          <div className="card-content">GUIDE</div>
        </div>
      </div>

      <div className="faq-page">
        {/* Hero Section */}
        <section className="faq-hero-section">
          <div className="faq-container">
            <div className="faq-hero-content">
              <h1 className="faq-hero-title">Întrebări Frecvente</h1>
              <p className="faq-hero-subtitle">Găsește rapid răspunsurile la întrebările tale</p>
              
              {/* Search Bar */}
              <div className="faq-search-container">
                <div className="faq-search-wrapper">
                  <Search className="faq-search-icon" size={20} />
                  <input
                    type="text"
                    className="faq-search-input"
                    placeholder="Caută întrebări..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      className="faq-search-clear"
                      onClick={() => setSearchTerm('')}
                      aria-label="Șterge căutarea"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
                {searchTerm && (
                  <div className="faq-search-results-count">
                    {filteredFaqs.length} {filteredFaqs.length === 1 ? 'rezultat găsit' : 'rezultate găsite'} pentru &quot;{searchTerm}&quot;
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        {!searchTerm && (
          <section className="faq-categories-section">
            <div className="faq-container">
              <div className="faq-categories-wrapper">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`faq-category-btn ${currentCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Content */}
        <section className="faq-content-section">
          <div className="faq-container">
            {filteredFaqs.length > 0 ? (
              <div className="faq-list">
                {filteredFaqs.map((item) => (
                  <div
                    key={item.id}
                    className={`faq-item ${activeFaq === item.id ? 'active' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={activeFaq === item.id}
                    >
                      <span className="faq-question-text">{item.question}</span>
                      <ChevronDown
                        className="faq-question-icon"
                        size={20}
                        style={{
                          transform: activeFaq === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </button>
                    <div
                      ref={(el) => {
                        if (el) answerRefs.current[item.id] = el;
                      }}
                      className="faq-answer"
                    >
                      <div className="faq-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="faq-empty-state">
                <div className="faq-empty-icon">
                  <Search size={64} />
                </div>
                <h3>Nu s-au găsit rezultate</h3>
                <p>Încearcă să modifici termenii de căutare</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="faq-contact-section">
          <div className="faq-container">
            <div className="faq-contact-card">
              <h3>Ai o întrebare care nu este în listă?</h3>
              <p>Echipa noastră este aici să te ajute</p>
              <button className="faq-contact-btn" onClick={() => setShowContact(true)}>
                Contactează-ne
              </button>
            </div>
          </div>
        </section>
      </div>

      <BottomNav />

      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}
    </>
  );
}
