import { useState, useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Building2, Film, GraduationCap, Headphones, Mic, Newspaper, PenTool, Quote, Radio, Sparkles, Star, Tv } from "lucide-react";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afeez Amusa Onireke | Author, Consultant & Educator" },
      { name: "description", content: "The digital headquarters of Afeez Amusa Onireke—author, professional tiler, SAP consultant, educator, and entrepreneur." },
      { property: "og:title", content: "Afeez Amusa Onireke | Professional Ecosystem" },
      { property: "og:description", content: "Creating lasting value through writing, craftsmanship, enterprise technology, and education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { number: "01", icon: PenTool, title: "Writing & Publishing", text: "Communicate with clarity through books, ghostwriting, editing, content, and business writing.", to: "/services/writing", hoverColor: "#f0c832" },
  { number: "02", icon: Building2, title: "Professional Tiling & Construction", text: "Premium residential and commercial tiling delivered with precision and professionalism.", to: "/services/tiling", hoverColor: "#c47838" },
  { number: "03", icon: ArrowUpRight, title: "SAP Consulting", text: "Optimise manufacturing and real estate operations with SAP S/4HANA PP, QM, and RE FX.", to: "/services/sap", hoverColor: "#d4a840" },
  { number: "04", icon: GraduationCap, title: "Education & Knowledge Products", text: "Practical books, courses, resources, training programmes, workshops, and speaking.", to: "/services/education", hoverColor: "#f0d890" },
] as const;

const work = [
  { category: "Writing", title: "Ideas that move people and organisations", image: "Editorial writing project or published book cover" },
  { category: "Craftsmanship", title: "Precision-led spaces built to endure", image: "Premium completed tiling project" },
  { category: "Enterprise", title: "Operations made clear, connected, and scalable", image: "SAP consulting workshop or project environment" },
] as const;

const mediaFeatures = [
  {
    type: "Television",
    desc: "Broadcast television interviews and features reaching audiences across the country.",
    topBg: "#1a130c",
    bottomBg: "#c8922a",
    bottomText: "#120d07",
    badge: "On Screen",
    badgeBg: "rgba(240,200,50,0.22)",
    badgeText: "#e8c020",
    mainIcon: Tv,
    mainIconColor: "#f0c832",
    floats: [
      { icon: Film, style: { position: "absolute" as const, top: "1.5rem", left: "1.5rem", width: "4rem", height: "4rem", transform: "rotate(-12deg)", opacity: 0.22, color: "#f0d890" } },
      { icon: Sparkles, style: { position: "absolute" as const, top: "2rem", right: "3rem", width: "2rem", height: "2rem", transform: "rotate(20deg)", opacity: 0.45, color: "#f0c832" } },
      { icon: Star, style: { position: "absolute" as const, bottom: "1.75rem", right: "1.75rem", width: "2.5rem", height: "2.5rem", transform: "rotate(8deg)", opacity: 0.28, color: "#d4a840" } },
      { icon: Mic, style: { position: "absolute" as const, bottom: "1.5rem", left: "3.5rem", width: "2.25rem", height: "2.25rem", transform: "rotate(-6deg)", opacity: 0.22, color: "#f0d890" } },
    ],
  },
  {
    type: "Radio",
    desc: "Radio conversations reaching wide and diverse audiences across the country.",
    topBg: "#c8922a",
    bottomBg: "#1a130c",
    bottomText: "#f0c832",
    badge: "On Air",
    badgeBg: "rgba(20,10,5,0.22)",
    badgeText: "#120d07",
    mainIcon: Radio,
    mainIconColor: "#120d07",
    floats: [
      { icon: Mic, style: { position: "absolute" as const, top: "1.25rem", left: "1.25rem", width: "4rem", height: "4rem", transform: "rotate(8deg)", opacity: 0.22, color: "#120d07" } },
      { icon: Headphones, style: { position: "absolute" as const, top: "1.75rem", right: "2.5rem", width: "2.5rem", height: "2.5rem", transform: "rotate(-12deg)", opacity: 0.28, color: "#120d07" } },
      { icon: Star, style: { position: "absolute" as const, bottom: "1.75rem", right: "1.75rem", width: "2rem", height: "2rem", transform: "rotate(15deg)", opacity: 0.3, color: "#120d07" } },
      { icon: Sparkles, style: { position: "absolute" as const, bottom: "1.5rem", left: "3.5rem", width: "2.25rem", height: "2.25rem", transform: "rotate(-6deg)", opacity: 0.22, color: "#120d07" } },
    ],
  },
  {
    type: "Podcasts",
    desc: "Deep-dive podcast episodes on writing, craft, enterprise, and ideas that matter.",
    topBg: "#b84535",
    bottomBg: "#e07040",
    bottomText: "#1a0d08",
    badge: "Listen Now",
    badgeBg: "rgba(255,255,255,0.2)",
    badgeText: "rgba(255,255,255,0.92)",
    mainIcon: Headphones,
    mainIconColor: "#ffffff",
    floats: [
      { icon: Mic, style: { position: "absolute" as const, top: "1.5rem", left: "1.5rem", width: "3.5rem", height: "3.5rem", transform: "rotate(-10deg)", opacity: 0.22, color: "#fff" } },
      { icon: Radio, style: { position: "absolute" as const, top: "1.75rem", right: "2rem", width: "2.5rem", height: "2.5rem", transform: "rotate(15deg)", opacity: 0.22, color: "#fff" } },
      { icon: Sparkles, style: { position: "absolute" as const, bottom: "2rem", right: "2.5rem", width: "2rem", height: "2rem", transform: "rotate(-6deg)", opacity: 0.28, color: "#fff" } },
      { icon: Star, style: { position: "absolute" as const, bottom: "1.5rem", left: "3rem", width: "2.25rem", height: "2.25rem", transform: "rotate(8deg)", opacity: 0.22, color: "#fff" } },
    ],
  },
  {
    type: "Press",
    desc: "Editorial features, profiles, and interviews in print and online publications.",
    topBg: "#3d6b52",
    bottomBg: "#5a9970",
    bottomText: "#0d1f15",
    badge: "In Print",
    badgeBg: "rgba(255,255,255,0.22)",
    badgeText: "rgba(255,255,255,0.92)",
    mainIcon: Newspaper,
    mainIconColor: "#ffffff",
    floats: [
      { icon: PenTool, style: { position: "absolute" as const, top: "1.5rem", left: "1.5rem", width: "3.5rem", height: "3.5rem", transform: "rotate(-6deg)", opacity: 0.22, color: "#fff" } },
      { icon: Quote, style: { position: "absolute" as const, top: "1.75rem", right: "2rem", width: "3rem", height: "3rem", transform: "rotate(10deg)", opacity: 0.22, color: "#fff" } },
      { icon: BookOpen, style: { position: "absolute" as const, bottom: "1.75rem", right: "2rem", width: "2.5rem", height: "2.5rem", transform: "rotate(-12deg)", opacity: 0.22, color: "#fff" } },
      { icon: Star, style: { position: "absolute" as const, bottom: "1.5rem", left: "3rem", width: "2rem", height: "2rem", transform: "rotate(6deg)", opacity: 0.28, color: "#fff" } },
    ],
  },
];

const products = [
  { type: "Book", title: "A featured title by Afeez", detail: "Ideas, insights, and practical lessons for meaningful growth.", accent: "01" },
  { type: "Course", title: "Professional Tiling Masterclass", detail: "Build foundational technique, precision, and a professional practice.", accent: "02" },
  { type: "Programme", title: "SAP Operations Learning Series", detail: "Practical enterprise systems knowledge for modern organisations.", accent: "03" },
] as const;

function PillarCard({ pillar, className }: { pillar: (typeof pillars)[number]; className?: string }) {
  const [hovered, setHovered] = useState(false);
  const { number, icon: Icon, title, text, to, hoverColor } = pillar;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? hoverColor : "var(--paper)",
        boxShadow: hovered
          ? "0px 30px 40px -15px rgba(194, 179, 164, 0.6)"
          : "0px 4px 24px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
      }}
      className={`group flex min-h-[22rem] cursor-pointer flex-col rounded-[1.75rem] p-8 transition-all duration-200 ease-in-out md:p-10${className ? ` ${className}` : ""}`}
    >
      <div className="flex items-start justify-between">
        <Icon className="size-10 text-gold transition-transform duration-200 group-hover:scale-110" />
        <span className="text-xs font-bold text-ink/30">{number}</span>
      </div>
      <div className="mt-auto pt-10">
        <h3 className="max-w-md font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-lg text-sm leading-6 text-ink/60">{text}</p>
        <Link
          to={to}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
        >
          Learn more
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function MoreCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#f0c832" : "var(--paper)",
        boxShadow: hovered
          ? "0px 30px 40px -15px rgba(194, 179, 164, 0.6)"
          : "0px 4px 24px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-12px)" : "translateY(0)",
      }}
      className="group flex min-h-[10rem] cursor-pointer flex-col justify-center rounded-[1.75rem] p-8 transition-all duration-200 ease-in-out md:p-10"
    >
      <h3 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">...and more!</h3>
      <Link
        to="/services"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
      >
        Explore all services
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}

function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none -mt-px" style={{ height: "64px", backgroundColor: from }}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="block h-full w-full">
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          style={{ fill: to }}
        />
      </svg>
    </div>
  );
}

function MediaCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector<HTMLElement>("a");
    const amount = card ? card.offsetWidth + 20 : 440;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="rounded-[1.5rem] bg-background py-14 lg:rounded-none md:py-20">
      <div className="site-container">
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow text-gold-strong">Conversations & features</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              <span className="relative mr-1 inline-block">
                In the media
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  fill="none"
                  style={{ position: "absolute", bottom: "-0.22em", left: 0, width: "100%", overflow: "visible", pointerEvents: "none" }}
                >
                  <path d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6" stroke="var(--gold)" strokeWidth="3.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M0 12 Q25 6 50 12 Q75 18 100 12 Q125 6 150 12 Q175 18 200 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>.
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex size-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-strong hover:shadow-button-hover"
              aria-label="Scroll left"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex size-12 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-button transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-strong hover:shadow-button-hover"
              aria-label="Scroll right"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {mediaFeatures.map((card) => {
            const MainIcon = card.mainIcon;
            return (
              <Link
                key={card.type}
                to="/media"
                className="group flex-shrink-0 overflow-hidden rounded-[1.75rem] shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                style={{ width: "min(85vw, 420px)", scrollSnapAlign: "start" }}
              >
                {/* Coloured top panel */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: card.topBg, height: "20rem" }}
                >
                  {card.floats.map((f, i) => {
                    const FIcon = f.icon;
                    return <FIcon key={i} style={f.style} />;
                  })}
                  <div
                    className="absolute rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ top: "1rem", right: "1rem", backgroundColor: card.badgeBg, color: card.badgeText }}
                  >
                    {card.badge}
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
                    <MainIcon
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ width: "4.5rem", height: "4.5rem", color: card.mainIconColor }}
                    />
                    <p className="font-serif text-4xl font-bold leading-tight" style={{ color: card.mainIconColor }}>
                      {card.type}
                    </p>
                  </div>
                </div>
                {/* Coloured bottom panel */}
                <div className="p-7" style={{ backgroundColor: card.bottomBg }}>
                  <h3 className="font-serif text-2xl font-bold leading-tight" style={{ color: card.bottomText }}>
                    {card.type}
                  </h3>
                  <p className="mt-3 text-sm leading-6" style={{ color: card.bottomText, opacity: 0.72 }}>
                    {card.desc}
                  </p>
                  <span
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
                    style={{ color: card.bottomText }}
                  >
                    View{" "}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-gold lg:bg-transparent">
      <section className="overflow-hidden rounded-b-[1.5rem] bg-ink text-paper lg:rounded-none">
        <div className="site-container grid pt-4 pb-8 lg:min-h-[calc(100svh-4.5rem)] lg:items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">

          {/* Portrait — top on mobile, right on desktop */}
          <div className="relative order-1 mx-auto w-full max-w-[195px] lg:order-2 lg:max-w-lg">
            <div className="absolute -left-5 top-10 hidden size-20 rotate-[-10deg] rounded-[1.5rem] border border-gold/50 bg-gold/10 lg:block" />
            <div className="absolute -right-4 bottom-12 hidden size-24 rotate-12 rounded-full border border-paper/15 bg-paper/5 lg:block" />
            <div className="relative lg:rotate-[2deg] lg:rounded-[2.5rem] lg:border-8 lg:border-paper lg:bg-paper lg:p-2 lg:shadow-card lg:transition-transform lg:duration-300 lg:hover:rotate-0">
              <img
                src="/images/afeez-portrait.webp"
                alt="Afeez Amusa Onireke — professional portrait"
                className="aspect-[4/5] w-full object-contain lg:rounded-[2rem]"
              />
            </div>
            <div className="absolute -bottom-4 left-5 hidden items-center gap-3 rounded-2xl border border-gold/40 bg-paper px-4 py-3 text-ink shadow-card lg:flex">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold"><Star className="size-4 fill-current text-gold-foreground" /></span>
              <div><p className="text-sm font-bold">Based in Ilorin</p><p className="text-xs text-muted-foreground">Working across disciplines</p></div>
            </div>
          </div>

          {/* Text — below image on mobile, left on desktop */}
          <div className="reveal order-2 pt-4 text-center lg:order-1 lg:pt-0 lg:text-left">
            <div className="hidden items-center gap-2 rounded-full border border-gold/45 bg-gold/10 px-4 py-2 text-xs font-semibold text-paper lg:inline-flex">
              <Sparkles className="size-4 text-gold" /> A multidisciplinary creative professional
            </div>
            <h1 className="max-w-3xl font-serif text-[2rem] font-semibold leading-[0.96] lg:mt-6 lg:text-[clamp(3.25rem,7vw,6.8rem)] lg:leading-[0.94]">
              <span className="relative mr-1 inline-block whitespace-nowrap">
                Hi, I’m
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  fill="none"
                  style={{ position: "absolute", bottom: "-0.18em", left: 0, width: "100%", overflow: "visible", pointerEvents: "none" }}
                >
                  <path d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M0 12 Q25 6 50 12 Q75 18 100 12 Q125 6 150 12 Q175 18 200 12" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.45" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="align-middle font-sans text-[0.5em]">👋</span>{" "}
              Afeez Amusa{" "}
              <span className="relative inline-block">Onireke.<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-gold/45 md:h-5" /></span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-paper/70 lg:mt-6 lg:text-xl lg:leading-7">I turn ideas, craft, and enterprise knowledge into work that helps people and organisations build lasting value.</p>
            <p className="mt-2 max-w-2xl text-xs font-semibold leading-6 text-paper/75 lg:mt-4 lg:text-sm lg:leading-7">Author · Writer · Professional Tiler · SAP Consultant · Educator · Entrepreneur</p>
            <div className="mt-8 hidden flex-wrap justify-center gap-3 lg:flex lg:justify-start">
              <Button asChild variant="gold" size="lg"><Link to="/contact">Work with me <ArrowUpRight /></Link></Button>
              <Button asChild variant="goldOutline" size="lg" className="bg-ink text-paper"><Link to="/portfolio">Explore my work <ArrowRight /></Link></Button>
            </div>
          </div>

        </div>
      </section>

      {/* Gold gap — mobile only, makes sections feel like floating cards */}
      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-sun-soft py-10 md:py-28 lg:rounded-none">
        <div className="site-container">

          {/* ── MOBILE layout ── */}
          <div className="md:hidden">
            <p className="eyebrow text-center text-gold-strong">Ways to work together</p>
            <h2 className="mt-3 text-center font-serif text-3xl font-bold leading-tight">
              How can I help{" "}
              <span className="relative inline-block whitespace-nowrap">
                you?
                <svg aria-hidden="true" viewBox="0 0 200 80" preserveAspectRatio="none" fill="none"
                  style={{ position: "absolute", top: "-0.2em", left: "-0.3em", width: "calc(100% + 0.6em)", height: "calc(100% + 0.45em)", overflow: "visible", pointerEvents: "none" }}>
                  <path d="M 183 44 C 182 16, 146 1, 100 2 C 54 3, 17 18, 16 40 C 15 62, 53 78, 100 78 C 148 78, 180 64, 184 54"
                    stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
            </h2>
            <p className="mt-3 text-center text-sm leading-6 text-muted-foreground">Four pathways to solve problems and create lasting value.</p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-gold-strong">
              Swipe to explore <ArrowRight className="size-3.5" />
            </p>

            {/* Horizontal swipe carousel with right-edge fade hint */}
            <div className="relative mt-5">
              <div
                className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {pillars.map((pillar) => (
                  <div key={pillar.number} className="flex flex-shrink-0 flex-col" style={{ width: "78vw", maxWidth: "300px", scrollSnapAlign: "start" }}>
                    <PillarCard pillar={pillar} className="flex-1" />
                  </div>
                ))}
                <div className="flex-shrink-0 self-start" style={{ width: "62vw", maxWidth: "240px", scrollSnapAlign: "start" }}>
                  <MoreCard />
                </div>
              </div>
              {/* Right-edge gradient — signals more cards to the right */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-sun-soft to-transparent" />
            </div>
          </div>

          {/* ── DESKTOP layout (unchanged) ── */}
          <div className="hidden md:block">
            <div className="grid gap-5 md:grid-cols-2 md:items-start">
              <div className="flex flex-col gap-5">
                <div className="pb-3">
                  <p className="eyebrow text-gold-strong">Ways to work together</p>
                  <h2 className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl">
                    How can<br />
                    <span className="font-bold">I help{" "}
                      <span className="relative inline-block whitespace-nowrap">
                        you?
                        <svg aria-hidden="true" viewBox="0 0 200 80" preserveAspectRatio="none" fill="none"
                          style={{ position: "absolute", top: "-0.2em", left: "-0.3em", width: "calc(100% + 0.6em)", height: "calc(100% + 0.45em)", overflow: "visible", pointerEvents: "none" }}>
                          <path d="M 183 44 C 182 16, 146 1, 100 2 C 54 3, 17 18, 16 40 C 15 62, 53 78, 100 78 C 148 78, 180 64, 184 54"
                            stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </span>
                  </h2>
                  <p className="mt-6 max-w-sm leading-7 text-muted-foreground">One professional ecosystem. Four distinct pathways to solve meaningful problems, build capability, and create work that lasts.</p>
                </div>
                <PillarCard pillar={pillars[0]} />
                <PillarCard pillar={pillars[1]} />
              </div>
              <div className="flex flex-col gap-5">
                <PillarCard pillar={pillars[2]} />
                <PillarCard pillar={pillars[3]} />
                <MoreCard />
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-background lg:rounded-none">
        {/* Mobile layout — full-width image, text below */}
        <div className="md:hidden">
          <img
            src="/images/afeez-speaking.webp"
            alt="Afeez Amusa Onireke speaking at an event"
            className="w-full rounded-[1.5rem] aspect-[3/4] object-cover object-top shadow-card"
          />
          <div className="px-5 pt-6 pb-10">
            <div className="h-1 w-10 rounded-full bg-gold mb-4" />
            <p className="eyebrow text-gold-strong">A multidisciplinary journey</p>
            <h2 className="mt-3 font-serif text-[2rem] font-semibold leading-tight">Craft, knowledge, and enterprise belong together.</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Afeez has built his career where ideas meet execution—writing with purpose, creating enduring spaces, improving enterprise operations, and teaching others what works.</p>
            <Button asChild variant="ink" size="lg" className="mt-6 w-full justify-center"><Link to="/about">Read my story <ArrowRight /></Link></Button>
          </div>
        </div>
        {/* Desktop layout — unchanged */}
        <div className="hidden md:block">
          <div className="site-container grid items-center gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-28">
            <img
              src="/images/afeez-speaking.webp"
              alt="Afeez Amusa Onireke speaking at an event"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-card"
            />
            <div>
              <p className="eyebrow text-gold-strong">A multidisciplinary journey</p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">Craft, knowledge, and enterprise belong together.</h2>
              <div className="mt-7 h-2 w-24 rounded-full bg-gold/55" />
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Afeez has built his career where ideas meet execution—writing with purpose, creating enduring spaces, improving enterprise operations, and teaching others what works.</p>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">His work is united by one conviction: lasting value comes from clarity, discipline, and a deep respect for craft.</p>
              <Button asChild variant="ink" size="lg" className="mt-9"><Link to="/about">Read my story <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-ink py-20 text-paper lg:rounded-none md:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <p className="eyebrow text-gold">Selected work</p>
              <h2 className="mt-4 font-serif text-3xl md:text-7xl">Proof in the practice.</h2>
            </div>
            <div className="hidden md:block">
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/portfolio">View Portfolio <ArrowUpRight /></Link>
              </Button>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {work.map((item, index) => (
              <article
                key={item.category}
                className="group rounded-[2rem] border border-paper/20 bg-paper/5 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-300 hover:-translate-y-2 hover:border-paper/35 hover:bg-paper/10 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_24px_rgba(200,146,42,0.12)]"
              >
                <ImagePlaceholder label={item.image} dark className="aspect-[4/3] min-h-0 rounded-[1.5rem]" />
                <div className="px-3 pb-3 pt-6">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-gold">{item.category}</p>
                    <span className="text-xs text-paper/40">0{index + 1}</span>
                  </div>
                  <h3 className="mt-3 max-w-sm font-serif text-2xl leading-tight">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-paper py-10 lg:rounded-none md:py-28">
        <div className="site-container">

          {/* ── MOBILE layout ── */}
          <div className="md:hidden">
            <p className="eyebrow text-center text-gold-strong">Books, courses & resources</p>
            <h2 className="mt-3 text-center font-serif text-3xl font-bold leading-tight">Knowledge made useful.</h2>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-gold-strong">
              Swipe to explore <ArrowRight className="size-3.5" />
            </p>
            <div className="relative mt-5">
              <div
                className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {products.map((item) => (
                  <div key={item.title} className="flex flex-shrink-0 flex-col" style={{ width: "78vw", maxWidth: "300px", scrollSnapAlign: "start" }}>
                    <article className="group flex flex-1 flex-col rounded-[2rem] border border-gold/25 bg-ink p-7 text-paper shadow-card">
                      <div className="flex items-start justify-between">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-soft"><BookOpen className="size-5" /></span>
                        <span className="font-serif text-5xl text-gold/35">{item.accent}</span>
                      </div>
                      <div className="mt-auto pt-8">
                        <p className="eyebrow text-gold">{item.type}</p>
                        <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{item.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-paper/65">{item.detail}</p>
                        <Link to={item.type === "Book" ? "/books" : "/courses"} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Explore <ArrowUpRight className="size-4" /></Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-paper to-transparent" />
            </div>
          </div>

          {/* ── DESKTOP layout (unchanged) ── */}
          <div className="hidden md:block">
            <div className="max-w-3xl"><p className="eyebrow text-gold-strong">Books, courses & resources</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Knowledge made useful.</h2></div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {products.map((item) => <article key={item.title} className="group flex min-h-[26rem] flex-col rounded-[2rem] border border-gold/25 bg-ink p-7 text-paper shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-card-hover"><div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-soft"><BookOpen className="size-5" /></span><span className="font-serif text-5xl text-gold/35">{item.accent}</span></div><div className="mt-auto"><p className="eyebrow text-gold">{item.type}</p><h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">{item.title}</h3><p className="mt-4 text-sm leading-6 text-paper/65">{item.detail}</p><Link to={item.type === "Book" ? "/books" : "/courses"} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Explore <ArrowUpRight className="size-4" /></Link></div></article>)}
            </div>
          </div>

        </div>
      </section>

      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-ink py-10 text-paper lg:rounded-none lg:border-y lg:border-gold/20 md:py-28">
        <div className="site-container">

          {/* ── MOBILE layout ── */}
          <div className="md:hidden">
            <p className="eyebrow text-center text-gold-strong">What collaborators say</p>
            <h2 className="mt-3 text-center font-serif text-3xl font-bold leading-tight">Kind words.</h2>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-gold-strong">
              Swipe to read <ArrowRight className="size-3.5" />
            </p>
            <div className="relative mt-5">
              <div
                className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {["Afeez brings rare clarity to complex work. He listens carefully, thinks deeply, and delivers with conviction.", "The quality of the craftsmanship was exceptional—precise, professional, and built to last.", "His ability to connect systems knowledge with real operational needs made the engagement genuinely valuable."].map((quote, index) => (
                  <div key={quote} className="flex flex-shrink-0 flex-col" style={{ width: "82vw", maxWidth: "320px", scrollSnapAlign: "start" }}>
                    <blockquote className="flex flex-1 flex-col rounded-[2rem] border border-gold/25 bg-paper/5 p-7 shadow-card">
                      <Quote className="size-8 text-gold" />
                      <p className="mt-5 font-serif text-xl leading-8">"{quote}"</p>
                      <footer className="mt-auto pt-6 text-xs font-semibold text-paper/55">Client testimonial <span className="text-gold">0{index + 1}</span></footer>
                    </blockquote>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-ink to-transparent" />
            </div>
          </div>

          {/* ── DESKTOP layout (unchanged) ── */}
          <div className="hidden md:block">
            <p className="eyebrow text-gold-strong">What collaborators say</p>
            <div className="mt-9 grid gap-10 md:grid-cols-3">
              {["Afeez brings rare clarity to complex work. He listens carefully, thinks deeply, and delivers with conviction.", "The quality of the craftsmanship was exceptional—precise, professional, and built to last.", "His ability to connect systems knowledge with real operational needs made the engagement genuinely valuable."].map((quote, index) => <blockquote key={quote} className="rounded-[2rem] border border-gold/25 bg-paper/5 p-7 shadow-card"><Quote className="size-8 text-gold" /><p className="mt-5 font-serif text-2xl leading-9">"{quote}"</p><footer className="mt-6 text-xs font-semibold text-paper/55">Client testimonial <span className="text-gold">0{index + 1}</span></footer></blockquote>)}
            </div>
          </div>

        </div>
      </section>

      <div className="h-3 bg-gold lg:hidden" />

      <MediaCarousel />

      <div className="h-3 bg-gold lg:hidden" />

      <section className="rounded-[1.5rem] bg-ink text-paper lg:rounded-none">

        {/* ── MOBILE layout ── */}
        <div className="md:hidden">
          <div className="px-5 pt-8 pb-7">
            <p className="eyebrow text-gold">The lasting value letter</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight">Useful ideas for better work and a more intentional life.</h2>
            <p className="mt-4 text-sm leading-6 text-paper/65">Occasional notes on writing, craftsmanship, enterprise technology, education, and the lessons connecting them.</p>
            <form className="mt-7 flex flex-col gap-3" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email-m" className="sr-only">Email address</label>
              <input id="newsletter-email-m" type="email" placeholder="Your email address" className="h-14 w-full rounded-full border border-paper/25 bg-paper/5 px-5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold" />
              <Button type="submit" variant="gold" size="lg" className="w-full justify-center">Join the letter <ArrowRight /></Button>
            </form>
          </div>
          <div className="border-t border-paper/15 px-5 pt-7 pb-9">
            <p className="eyebrow text-gold">Have a project in mind?</p>
            <h3 className="mt-4 font-serif text-2xl leading-tight">Let’s create something of lasting value.</h3>
            <Button asChild variant="paper" size="lg" className="mt-6 w-full justify-center"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button>
          </div>
        </div>

        {/* ── DESKTOP layout (unchanged) ── */}
        <div className="hidden md:block">
          <div className="site-container pb-20 pt-4 md:pb-28 md:pt-4">
            <div className="grid overflow-hidden rounded-[2.5rem] bg-ink shadow-card md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-7 sm:p-10 md:p-14"><p className="eyebrow text-gold">The lasting value letter</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">Useful ideas for better work, stronger systems, and a more intentional life.</h2><p className="mt-5 max-w-xl leading-7 text-paper/65">Occasional notes on writing, craftsmanship, enterprise technology, education, and the lessons connecting them.</p><form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" className="h-14 min-w-0 flex-1 rounded-full border border-paper/25 bg-paper/5 px-5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold" /><Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">Join the letter <ArrowRight /></Button></form></div>
              <div className="flex flex-col justify-between border-t border-paper/15 p-7 sm:p-10 md:border-l md:border-t-0 md:p-14"><div><p className="eyebrow text-gold">Have a project in mind?</p><h3 className="mt-5 font-serif text-4xl leading-tight">Let’s create something of lasting value.</h3></div><Button asChild variant="paper" size="lg" className="mt-12 w-fit"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button></div>
            </div>
          </div>
        </div>

      </section>

      {/* Gold gap before footer — mobile only */}
      <div className="h-3 bg-gold lg:hidden" />
    </main>
  );
}
