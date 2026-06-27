import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sagar Solar Solution — UP NEDA Approved Solar Plans" },
      {
        name: "description",
        content:
          "Sagar Solar Solution offers government-subsidized solar energy plans in Uttar Pradesh. UP NEDA & PM Surya Ghar approved installations from 1kW to 10kW+.",
      },
      { property: "og:title", content: "Sagar Solar Solution — Subsidized Solar for India" },
      {
        property: "og:description",
        content: "UP NEDA approved solar installations with PM Surya Ghar subsidy.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const CSS = `
:root{
  --gold:#F5A623; --navy:#0A1628; --white:#FFFFFF; --green:#2ECC71; --gray:#F8F9FA;
  --muted:#5b6b80;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Poppins',sans-serif;color:#1a2332;background:var(--white);line-height:1.6;-webkit-font-smoothing:antialiased}
.hindi{font-family:'Noto Sans Devanagari','Poppins',sans-serif}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(255,255,255,.96);backdrop-filter:blur(10px);transition:box-shadow .3s}
.nav.scrolled{box-shadow:0 4px 20px rgba(10,22,40,.08)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px}
.logo{font-weight:700;font-size:1.15rem;color:var(--navy);display:flex;align-items:center;gap:8px}
.logo .sun-emoji{font-size:1.5rem}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{position:relative;font-weight:500;color:var(--navy);padding:6px 0;transition:color .2s}
.nav-links a:hover{color:var(--gold)}
.nav-links a.active::after,.nav-links a:hover::after{content:'';position:absolute;left:0;right:0;bottom:-4px;height:3px;background:var(--gold);border-radius:2px}
.burger{display:none;background:none;width:40px;height:40px;flex-direction:column;gap:5px;align-items:center;justify-content:center}
.burger span{width:24px;height:2px;background:var(--navy);transition:.3s}

/* HERO */
.hero{position:relative;min-height:100vh;background:radial-gradient(ellipse at top right,#13294a 0%,var(--navy) 60%);color:var(--white);display:flex;align-items:center;overflow:hidden;padding:120px 0 60px}
.hero-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:48px;align-items:center;width:100%}
.hero h1{font-size:clamp(2rem,4.5vw,3.6rem);font-weight:700;line-height:1.2;margin-bottom:18px}
.hero h1 .accent{color:var(--gold)}
.hero p.sub{font-size:1.2rem;color:#d4dae5;margin-bottom:32px;font-weight:500}
.hero-ctas{display:flex;gap:16px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;border-radius:8px;font-weight:600;font-size:1rem;transition:transform .2s,box-shadow .2s;white-space:nowrap}
.btn-primary{background:var(--gold);color:var(--navy);box-shadow:0 8px 24px rgba(245,166,35,.35)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(245,166,35,.45)}
.btn-outline{background:transparent;color:var(--white);border:2px solid rgba(255,255,255,.4)}
.btn-outline:hover{border-color:var(--gold);color:var(--gold)}
.btn-green{background:var(--green);color:var(--white)}
.btn-green:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(46,204,113,.4)}

/* Animated Sun */
.sun-wrap{position:relative;width:min(420px,90vw);aspect-ratio:1;margin:0 auto}
.sun-core{position:absolute;inset:25%;border-radius:50%;background:radial-gradient(circle at 35% 35%,#ffd271,var(--gold) 60%,#d68a10);box-shadow:0 0 60px rgba(245,166,35,.6),0 0 120px rgba(245,166,35,.3);animation:pulse 3s ease-in-out infinite}
.sun-rays{position:absolute;inset:0;animation:spin 22s linear infinite}
.sun-rays span{position:absolute;left:50%;top:50%;width:4px;height:46%;margin-left:-2px;margin-top:-46%;transform-origin:50% 100%;background:linear-gradient(to top,transparent,var(--gold));border-radius:2px;opacity:.85}
.sun-rays-2{position:absolute;inset:0;animation:spin 35s linear infinite reverse}
.sun-rays-2 span{position:absolute;left:50%;top:50%;width:2px;height:48%;margin-left:-1px;margin-top:-48%;transform-origin:50% 100%;background:linear-gradient(to top,transparent,rgba(255,210,113,.7));border-radius:2px}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{0%,100%{box-shadow:0 0 60px rgba(245,166,35,.6),0 0 120px rgba(245,166,35,.3)}50%{box-shadow:0 0 90px rgba(245,166,35,.8),0 0 160px rgba(245,166,35,.45)}}

/* STATS */
.stats{background:var(--navy);color:var(--white);padding:48px 0;border-top:1px solid rgba(255,255,255,.08)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
.stat-num{font-size:2.5rem;font-weight:700;color:var(--gold);line-height:1}
.stat-label{margin-top:8px;font-size:.95rem;color:#c4cbd8;font-weight:500}

/* SECTION GENERIC */
section{padding:96px 0}
.section-head{text-align:center;margin-bottom:56px}
.eyebrow{display:inline-block;color:var(--gold);font-weight:600;letter-spacing:.1em;text-transform:uppercase;font-size:.85rem;margin-bottom:12px}
.section-head h2{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:700;color:var(--navy);line-height:1.2}
.section-head p{color:var(--muted);margin-top:14px;font-size:1.05rem;max-width:620px;margin-inline:auto}

/* PLANS */
.plans{background:var(--gray)}
.plans-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px}
.plan{background:var(--white);border-radius:16px;padding:32px 24px;box-shadow:0 4px 20px rgba(10,22,40,.05);position:relative;transition:transform .25s,box-shadow .25s;display:flex;flex-direction:column;border:2px solid transparent}
.plan:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(10,22,40,.12)}
.plan.popular{border-color:var(--gold);transform:scale(1.03)}
.plan.popular:hover{transform:scale(1.03) translateY(-6px)}
.popular-tag{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--navy);padding:6px 16px;border-radius:999px;font-weight:700;font-size:.78rem;letter-spacing:.05em}
.kw-badge{display:inline-block;background:rgba(245,166,35,.12);color:var(--gold);padding:6px 14px;border-radius:8px;font-weight:700;font-size:.9rem;margin-bottom:16px}
.plan-price{font-size:1.9rem;font-weight:700;color:var(--navy);margin-bottom:4px}
.plan-price small{font-size:.75rem;color:var(--muted);font-weight:500;display:block;margin-top:2px}
.plan-desc{color:var(--muted);font-size:.95rem;margin:12px 0 18px;min-height:42px}
.plan ul{list-style:none;margin:0 0 24px;padding:0}
.plan li{padding:7px 0;font-size:.95rem;color:#3a4a60;display:flex;gap:8px;align-items:flex-start}
.plan li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
.plan .btn{margin-top:auto;width:100%}

/* GOV */
.gov{background:linear-gradient(135deg,#fff8ec 0%,#fffdf7 100%)}
.gov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:48px}
.gov-box{background:var(--white);border-radius:14px;padding:28px;border-left:4px solid var(--gold);box-shadow:0 4px 16px rgba(10,22,40,.06)}
.gov-box h3{color:var(--navy);font-size:1.2rem;margin-bottom:10px;font-weight:700}
.gov-box p{color:var(--muted);font-size:.95rem}
.gov-badges{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}
.gov-badge{background:var(--white);border:2px dashed #d0d6e0;padding:18px 28px;border-radius:10px;font-weight:600;color:var(--navy);font-size:.9rem;display:flex;align-items:center;gap:10px}
.gov-badge::before{content:'🏛️';font-size:1.3rem}

/* HOW */
.how-timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;position:relative}
.how-timeline::before{content:'';position:absolute;top:34px;left:10%;right:10%;height:2px;background:linear-gradient(to right,var(--gold),var(--green));z-index:0}
.step{text-align:center;position:relative;z-index:1}
.step-num{width:68px;height:68px;border-radius:50%;background:var(--white);border:3px solid var(--gold);color:var(--navy);font-size:1.6rem;font-weight:700;display:grid;place-items:center;margin:0 auto 18px;box-shadow:0 4px 12px rgba(245,166,35,.25)}
.step h3{color:var(--navy);font-size:1.1rem;margin-bottom:6px}
.step p{color:var(--muted);font-size:.9rem}

/* WHY */
.why{background:var(--navy);color:var(--white)}
.why .section-head h2{color:var(--white)}
.why .section-head p{color:#c4cbd8}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.why-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:28px;transition:transform .25s,background .25s}
.why-card:hover{transform:translateY(-4px);background:rgba(245,166,35,.1);border-color:var(--gold)}
.why-icon{font-size:2.2rem;margin-bottom:14px;display:block}
.why-card h3{font-size:1.1rem;font-weight:600;margin-bottom:6px}
.why-card p{color:#9fb3ce;font-size:.92rem}

/* TESTIMONIALS */
.testi{background:var(--gray)}
.testi-slider{position:relative;max-width:780px;margin:0 auto;overflow:hidden}
.testi-track{display:flex;transition:transform .5s ease}
.testi-card{min-width:100%;background:var(--white);padding:40px 36px;border-radius:16px;box-shadow:0 6px 24px rgba(10,22,40,.08);text-align:center}
.stars{color:var(--gold);font-size:1.2rem;margin-bottom:16px;letter-spacing:2px}
.testi-text{font-size:1.05rem;color:#2a3548;line-height:1.7;margin-bottom:20px;font-style:italic}
.testi-name{font-weight:700;color:var(--navy)}
.testi-city{color:var(--muted);font-size:.9rem}
.dots{display:flex;justify-content:center;gap:10px;margin-top:24px}
.dot{width:10px;height:10px;border-radius:50%;background:#cfd6e0;cursor:pointer;transition:.25s;border:none}
.dot.active{background:var(--gold);width:28px;border-radius:6px}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px}
.contact form{display:flex;flex-direction:column;gap:14px}
.contact label{font-weight:500;color:var(--navy);font-size:.92rem;margin-bottom:-8px}
.contact input,.contact select,.contact textarea{padding:13px 14px;border:1.5px solid #dde2eb;border-radius:8px;font-family:inherit;font-size:1rem;background:var(--white);transition:border-color .2s}
.contact input:focus,.contact select:focus,.contact textarea:focus{outline:none;border-color:var(--gold)}
.contact textarea{resize:vertical;min-height:110px}
.contact .btn{margin-top:8px}
.contact-info{background:var(--navy);color:var(--white);padding:36px;border-radius:16px;display:flex;flex-direction:column;gap:18px}
.contact-info h3{color:var(--gold);font-size:1.3rem;margin-bottom:6px}
.info-row{display:flex;gap:14px;align-items:flex-start;font-size:.98rem;color:#dfe5f0}
.info-row .icn{font-size:1.3rem;flex-shrink:0}
.map-placeholder{margin-top:auto;height:180px;border-radius:10px;background:linear-gradient(135deg,#1a2d4d,#0a1628);display:grid;place-items:center;color:#7c8aa5;font-size:.9rem;border:1px dashed rgba(255,255,255,.15)}

/* FOOTER */
footer{background:#060e1c;color:#a8b3c5;padding:64px 0 24px;font-size:.93rem}
.foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.foot-brand .logo{color:var(--white);margin-bottom:12px}
.foot-tag{color:#8895ad;margin-bottom:20px}
.socials{display:flex;gap:12px}
.socials a{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.06);display:grid;place-items:center;transition:.2s}
.socials a:hover{background:var(--gold)}
.socials svg{width:18px;height:18px;fill:var(--white)}
.foot-col h4{color:var(--white);font-size:1rem;margin-bottom:14px;font-weight:600}
.foot-col ul{list-style:none}
.foot-col li{padding:5px 0}
.foot-col a:hover{color:var(--gold)}
.foot-bottom{padding-top:24px;border-top:1px solid rgba(255,255,255,.08);text-align:center;color:#6b778d;font-size:.88rem}

/* Back to top */
.to-top{position:fixed;right:24px;bottom:24px;width:48px;height:48px;border-radius:50%;background:var(--gold);color:var(--navy);font-size:1.4rem;font-weight:700;display:grid;place-items:center;box-shadow:0 6px 18px rgba(245,166,35,.4);opacity:0;pointer-events:none;transition:.3s;z-index:90}
.to-top.show{opacity:1;pointer-events:auto}
.to-top:hover{transform:translateY(-3px)}

/* RESPONSIVE */
@media (max-width:900px){
  .hero-grid{grid-template-columns:1fr;text-align:center}
  .sun-wrap{width:min(320px,80vw)}
  .stats-grid{grid-template-columns:repeat(2,1fr);gap:32px}
  .gov-grid{grid-template-columns:1fr}
  .how-timeline{grid-template-columns:1fr;gap:20px}
  .how-timeline::before{display:none}
  .why-grid{grid-template-columns:repeat(2,1fr)}
  .contact-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr 1fr;gap:32px}
}
@media (max-width:640px){
  section{padding:64px 0}
  .nav-links{display:none;position:absolute;top:72px;left:0;right:0;background:var(--white);flex-direction:column;padding:20px;gap:14px;box-shadow:0 8px 20px rgba(0,0,0,.08)}
  .nav-links.open{display:flex}
  .burger{display:flex}
  .hero-ctas{justify-content:center}
  .why-grid{grid-template-columns:1fr}
  .foot-grid{grid-template-columns:1fr;text-align:center}
  .socials{justify-content:center}
  .plan.popular{transform:none}
  .plan.popular:hover{transform:translateY(-6px)}
  .stat-num{font-size:2rem}
}
`;

type Plan = {
  kw: string;
  price: string;
  priceNote: string;
  desc: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  { kw: "1 kW", price: "₹45,000", priceNote: "सब्सिडी के बाद", desc: "1-2 कमरों के लिए आदर्श", features: ["~4 यूनिट / दिन", "मोनोक्रिस्टलाइन पैनल", "5 साल सर्विस"] },
  { kw: "2 kW", price: "₹85,000", priceNote: "सब्सिडी के बाद", desc: "मध्यम परिवार के लिए", features: ["~8 यूनिट / दिन", "नेट मीटरिंग सपोर्ट", "इंस्टॉलेशन फ्री"] },
  { kw: "3 kW", price: "₹1,20,000", priceNote: "सब्सिडी के बाद", desc: "बड़े घर / दुकान के लिए", features: ["~12 यूनिट / दिन", "PM Surya Ghar एलिजिबल", "25 साल पैनल वारंटी"], popular: true },
  { kw: "5 kW", price: "₹1,90,000", priceNote: "सब्सिडी के बाद", desc: "व्यावसायिक उपयोग", features: ["~20 यूनिट / दिन", "व्यावसायिक मीटरिंग", "प्रायोरिटी सपोर्ट"] },
  { kw: "10 kW+", price: "Custom", priceNote: "साइट सर्वे आधारित", desc: "औद्योगिक समाधान", features: ["कस्टम डिज़ाइन", "लोन सहायता", "AMC प्लान शामिल"] },
];

const features = [
  { e: "✅", t: "सरकारी अनुमोदित", d: "UP NEDA व MNRE से प्रमाणित" },
  { e: "⚡", t: "तेज़ इंस्टॉलेशन", d: "7 दिनों में पूरा सेटअप" },
  { e: "💰", t: "सब्सिडी सहायता", d: "पूरी प्रक्रिया में मार्गदर्शन" },
  { e: "🔧", t: "25 साल की वारंटी", d: "पैनल पर लंबी वारंटी" },
  { e: "📞", t: "24/7 सपोर्ट", d: "जब भी ज़रूरत हो, हम मौजूद" },
  { e: "🌱", t: "पर्यावरण अनुकूल", d: "स्वच्छ ऊर्जा, हरित भविष्य" },
];

const testimonials = [
  { name: "राजेश शर्मा", city: "लखनऊ, उ.प्र.", text: "Sagar Solar ने हमारे घर में 3kW सिस्टम लगाया। बिजली का बिल लगभग शून्य हो गया है। सब्सिडी की प्रक्रिया भी टीम ने पूरी की।", stars: 5 },
  { name: "सुनीता देवी", city: "कानपुर, उ.प्र.", text: "बहुत ही पेशेवर टीम। इंस्टॉलेशन समय पर हुआ और सपोर्ट भी शानदार है। मैं सभी को सिफ़ारिश करती हूँ।", stars: 5 },
  { name: "अमित वर्मा", city: "वाराणसी, उ.प्र.", text: "PM Surya Ghar योजना का लाभ इन्हीं की वजह से मिला। पूरी प्रक्रिया पारदर्शी और भरोसेमंद रही।", stars: 5 },
];

function Sun() {
  return (
    <div className="sun-wrap" aria-hidden="true">
      <div className="sun-rays-2">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ transform: `rotate(${i * 15}deg)` }} />
        ))}
      </div>
      <div className="sun-rays">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{ transform: `rotate(${i * 30}deg)` }} />
        ))}
      </div>
      <div className="sun-core" />
    </div>
  );
}

function Index() {
  const [navOpen, setNavOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    // sticky shadow
    const onScroll = () => {
      const nav = document.getElementById("mainNav");
      const top = document.getElementById("toTop");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
      if (top) top.classList.toggle("show", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // counters
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (!ent.isIntersecting) return;
          const el = ent.target as HTMLElement;
          const target = Number(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const dur = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const v = Math.floor(p * target);
            el.textContent = v + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  // testimonial autoplay
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || phone.length < 10) {
      alert("कृपया अपना नाम और मान्य फ़ोन नंबर भरें / Please enter a valid name and phone number.");
      return;
    }
    alert(`धन्यवाद ${name}! हमारी टीम जल्द ही आपसे संपर्क करेगी.`);
    f.reset();
  };

  const navLink = (href: string, label: string) => (
    <a href={href} onClick={() => setNavOpen(false)}>{label}</a>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* NAV */}
      <nav id="mainNav" className="nav">
        <div className="container nav-inner">
          <a href="#home" className="logo"><span className="sun-emoji">☀️</span> Sagar Solar Solution</a>
          <ul className={`nav-links${navOpen ? " open" : ""}`}>
            <li>{navLink("#home", "Home")}</li>
            <li>{navLink("#plans", "Plans")}</li>
            <li>{navLink("#about", "About")}</li>
            <li>{navLink("#scheme", "Government Scheme")}</li>
            <li>{navLink("#contact", "Contact")}</li>
          </ul>
          <button className="burger" aria-label="Menu" onClick={() => setNavOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hindi">
              सौर ऊर्जा से <span className="accent">रोशन करें</span> अपना घर
            </h1>
            <p className="sub hindi">सरकारी सब्सिडी के साथ — UP NEDA अनुमोदित</p>
            <div className="hero-ctas">
              <a href="#plans" className="btn btn-primary hindi">अभी जानें</a>
              <a href="#contact" className="btn btn-outline hindi">निःशुल्क सर्वे बुक करें</a>
            </div>
          </div>
          <Sun />
        </div>
      </header>

      {/* STATS */}
      <section className="stats" style={{ padding: "48px 0" }}>
        <div className="container">
          <div className="stats-grid">
            <div><div className="stat-num"><span data-count="500" data-suffix="+">0</span></div><div className="stat-label">Installations</div></div>
            <div><div className="stat-num"><span data-count="10" data-suffix="+">0</span></div><div className="stat-label">Years Experience</div></div>
            <div><div className="stat-num">★</div><div className="stat-label">UP NEDA Certified</div></div>
            <div><div className="stat-num"><span data-count="24" data-suffix="/7">0</span></div><div className="stat-label">Customer Support</div></div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="plans">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Plans</span>
            <h2>Choose The Right Solar Plan</h2>
            <p>Transparent pricing — post government subsidy. Customized for every home and business.</p>
          </div>
          <div className="plans-grid">
            {plans.map((p) => (
              <div key={p.kw} className={`plan${p.popular ? " popular" : ""}`}>
                {p.popular && <span className="popular-tag">MOST POPULAR</span>}
                <span className="kw-badge">{p.kw}</span>
                <div className="plan-price">{p.price}<small>{p.priceNote}</small></div>
                <p className="plan-desc hindi">{p.desc}</p>
                <ul className="hindi">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="#contact" className="btn btn-primary">Get Quote</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOV */}
      <section id="scheme" className="gov">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow hindi">सरकारी सहायता</span>
            <h2 className="hindi">सरकारी सब्सिडी योजना</h2>
            <p className="hindi">केंद्र व राज्य सरकार की योजनाओं का पूरा लाभ — एक ही जगह</p>
          </div>
          <div className="gov-grid">
            <div className="gov-box">
              <h3>PM Surya Ghar Yojana</h3>
              <p className="hindi">केंद्र सरकार की मुफ़्त बिजली योजना के तहत ₹78,000 तक की सब्सिडी।</p>
            </div>
            <div className="gov-box">
              <h3>UP NEDA Approval</h3>
              <p className="hindi">उत्तर प्रदेश नवीन एवं नवीकरणीय ऊर्जा विकास अभिकरण से अधिकृत वेंडर।</p>
            </div>
            <div className="gov-box">
              <h3>Bank Loan Facility</h3>
              <p className="hindi">SBI, PNB जैसे प्रमुख बैंकों से आसान EMI पर सोलर लोन उपलब्ध।</p>
            </div>
          </div>
          <div className="gov-badges">
            <div className="gov-badge">Government of India</div>
            <div className="gov-badge">UP NEDA</div>
            <div className="gov-badge">MNRE</div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="about">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Simple 4-Step Process</h2>
            <p>From your first call to subsidy in your account — we handle everything.</p>
          </div>
          <div className="how-timeline">
            {[
              { n: "1", t: "Free Survey", d: "On-site visit & energy assessment" },
              { n: "2", t: "Plan Selection", d: "Choose the right kW for your needs" },
              { n: "3", t: "Installation", d: "Certified team installs in 7 days" },
              { n: "4", t: "Subsidy Claim", d: "We file & track your subsidy" },
            ].map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow hindi">क्यों Sagar Solar</span>
            <h2 className="hindi">हमें क्यों चुनें?</h2>
            <p className="hindi">अनुभव, भरोसा और सरकारी मान्यता — एक ही छत के नीचे</p>
          </div>
          <div className="why-grid">
            {features.map((f) => (
              <div className="why-card" key={f.t}>
                <span className="why-icon">{f.e}</span>
                <h3 className="hindi">{f.t}</h3>
                <p className="hindi">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow hindi">ग्राहक प्रशंसा</span>
            <h2 className="hindi">हमारे संतुष्ट ग्राहक</h2>
          </div>
          <div className="testi-slider">
            <div className="testi-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {testimonials.map((t) => (
                <div className="testi-card" key={t.name}>
                  <div className="stars">{"★".repeat(t.stars)}</div>
                  <p className="testi-text hindi">"{t.text}"</p>
                  <div className="testi-name hindi">{t.name}</div>
                  <div className="testi-city hindi">{t.city}</div>
                </div>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === slide ? " active" : ""}`}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Contact</span>
            <h2><span className="hindi">संपर्क करें</span> | Get In Touch</h2>
            <p>Book a free site survey today — our team will reach out within 24 hours.</p>
          </div>
          <div className="contact-grid">
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" placeholder="e.g. Lucknow" required />
              <label htmlFor="plan">Plan Interest</label>
              <select id="plan" name="plan" defaultValue="">
                <option value="" disabled>Select a plan</option>
                <option>1 kW</option>
                <option>2 kW</option>
                <option>3 kW</option>
                <option>5 kW</option>
                <option>10 kW+ / Custom</option>
              </select>
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="message" placeholder="Tell us about your requirement..." />
              <button type="submit" className="btn btn-green">Submit Enquiry</button>
            </form>
            <aside className="contact-info">
              <h3>Reach Us Directly</h3>
              <div className="info-row"><span className="icn">📞</span><span>+91 98765 43210</span></div>
              <div className="info-row"><span className="icn">📧</span><span>info@sagarsolar.in</span></div>
              <div className="info-row"><span className="icn">📍</span><span>Lucknow, Uttar Pradesh, India</span></div>
              <div className="info-row"><span className="icn">🕒</span><span>Mon - Sat: 9:00 AM - 7:00 PM</span></div>
              <div className="map-placeholder">📍 Google Maps Embed</div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo"><span className="sun-emoji">☀️</span> Sagar Solar Solution</div>
              <p className="foot-tag">Powering India with Clean Energy</p>
              <div className="socials">
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg></a>
                <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20.5 3.5A11 11 0 0 0 3.2 17.1L2 22l5-1.3a11 11 0 0 0 5.3 1.4A11 11 0 0 0 20.5 3.5Zm-8.2 16.9a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3A9.2 9.2 0 1 1 21.5 12 9.2 9.2 0 0 1 12.3 20.4Zm5-6.9c-.3-.1-1.7-.8-1.9-.9s-.4-.2-.6.1-.7.9-.8 1.1-.3.2-.5 0a7.5 7.5 0 0 1-2.2-1.3 8.1 8.1 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4.2-.4a.4.4 0 0 0 0-.4l-.9-2c-.2-.5-.5-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c.6.3 1.1.4 1.4.5a3.4 3.4 0 0 0 1.5.1 2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.5-.3Z"/></svg></a>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4a4 4 0 0 1 1.5 1 4 4 0 0 1 1 1.5c.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2a4.3 4.3 0 0 1-2.5 2.5c-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a4.3 4.3 0 0 1-2.5-2.5c-.2-.4-.4-1-.4-2.2C2 15.6 2 15.2 2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.5A4.3 4.3 0 1 0 16.3 12 4.3 4.3 0 0 0 12 7.7Zm5.5-.2a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM12 14.8A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8Z"/></svg></a>
                <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z"/></svg></a>
              </div>
            </div>
            <div className="foot-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#plans">Residential Solar</a></li>
                <li><a href="#plans">Commercial Solar</a></li>
                <li><a href="#scheme">Subsidy Assistance</a></li>
                <li><a href="#contact">Free Survey</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>Contact</h4>
              <ul>
                <li>📞 +91 98765 43210</li>
                <li>📧 info@sagarsolar.in</li>
                <li>📍 Lucknow, U.P.</li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">© 2024 Sagar Solar Solution. All Rights Reserved.</div>
        </div>
      </footer>

      <a href="#home" id="toTop" className="to-top" aria-label="Back to top">↑</a>
    </>
  );
}
