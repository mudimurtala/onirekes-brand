import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Building2, GraduationCap, PenTool, Quote, Sparkles, Star } from "lucide-react";

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
  { number: "01", icon: PenTool, title: "Writing & Publishing", text: "Communicate with clarity through books, ghostwriting, editing, content, and business writing.", to: "/services/writing" },
  { number: "02", icon: Building2, title: "Professional Tiling & Construction", text: "Premium residential and commercial tiling delivered with precision and professionalism.", to: "/services/tiling" },
  { number: "03", icon: ArrowUpRight, title: "SAP Consulting", text: "Optimise manufacturing and real estate operations with SAP S/4HANA PP, QM, and RE FX.", to: "/services/sap" },
  { number: "04", icon: GraduationCap, title: "Education & Knowledge Products", text: "Practical books, courses, resources, training programmes, workshops, and speaking.", to: "/services/education" },
] as const;

const work = [
  { category: "Writing", title: "Ideas that move people and organisations", image: "Editorial writing project or published book cover" },
  { category: "Craftsmanship", title: "Precision-led spaces built to endure", image: "Premium completed tiling project" },
  { category: "Enterprise", title: "Operations made clear, connected, and scalable", image: "SAP consulting workshop or project environment" },
] as const;

const products = [
  { type: "Book", title: "A featured title by Afeez", detail: "Ideas, insights, and practical lessons for meaningful growth.", accent: "01" },
  { type: "Course", title: "Professional Tiling Masterclass", detail: "Build foundational technique, precision, and a professional practice.", accent: "02" },
  { type: "Programme", title: "SAP Operations Learning Series", detail: "Practical enterprise systems knowledge for modern organisations.", accent: "03" },
] as const;

function Index() {
  return (
    <main>
      <section className="overflow-hidden bg-ink text-paper">
        <div className="site-container grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
          <div className="reveal order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/10 px-4 py-2 text-xs font-semibold text-paper"><Sparkles className="size-4 text-gold" /> A multidisciplinary creative professional</div>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.94]">Hi, I’m Afeez Amusa <span className="relative inline-block">Onireke.<span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-gold/45 md:h-5" /></span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/70 md:text-xl">I turn ideas, craft, and enterprise knowledge into work that helps people and organisations build lasting value.</p>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-paper/75">Author · Writer · Professional Tiler · SAP Consultant · Educator · Entrepreneur</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg"><Link to="/contact">Work with me <ArrowUpRight /></Link></Button>
              <Button asChild variant="goldOutline" size="lg" className="bg-ink text-paper"><Link to="/portfolio">Explore my work <ArrowRight /></Link></Button>
            </div>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-lg lg:order-2">
            <div className="absolute -left-5 top-10 size-20 rotate-[-10deg] rounded-[1.5rem] border border-gold/50 bg-gold/10" />
            <div className="absolute -right-4 bottom-12 size-24 rotate-12 rounded-full border border-paper/15 bg-paper/5" />
            <div className="relative rotate-[2deg] rounded-[2.5rem] border-8 border-paper bg-paper p-2 shadow-card transition-transform duration-300 hover:rotate-0">
              <ImagePlaceholder label="Warm professional portrait of Afeez" className="aspect-[4/5] min-h-0 rounded-[2rem]" />
            </div>
            <div className="absolute -bottom-4 left-5 flex items-center gap-3 rounded-2xl border border-gold/40 bg-paper px-4 py-3 text-ink shadow-card">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gold"><Star className="size-4 fill-current text-gold-foreground" /></span>
              <div><p className="text-sm font-bold">Based in Lagos</p><p className="text-xs text-muted-foreground">Working across disciplines</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="eyebrow text-gold-strong">Ways to work together</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">How can I help?</h2></div>
          <p className="max-w-xl leading-7 text-muted-foreground md:justify-self-end">One professional ecosystem. Four distinct pathways to solve meaningful problems, build capability, and create work that lasts.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map(({ number, icon: Icon, title, text, to }) => (
            <article key={title} className="group flex min-h-80 flex-col rounded-[2rem] border border-gold/25 bg-ink p-7 text-paper shadow-card transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.5deg] hover:border-gold/60 hover:shadow-card-hover md:p-9">
              <div className="flex items-start justify-between"><span className="flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"><Icon className="size-6" /></span><span className="text-xs font-bold text-gold">{number}</span></div>
              <div className="mt-auto pt-12"><h3 className="max-w-md font-serif text-3xl font-semibold leading-tight md:text-4xl">{title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-paper/65">{text}</p><Link to={to} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Learn more <span className="flex size-8 items-center justify-center rounded-full bg-gold text-gold-foreground transition-transform group-hover:translate-x-1"><ArrowRight className="size-4" /></span></Link></div>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="site-container grid items-center gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-28">
          <ImagePlaceholder label="Afeez in his workspace or speaking" className="aspect-[4/5] min-h-0 shadow-card" />
          <div>
            <p className="eyebrow text-gold-strong">A multidisciplinary journey</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">Craft, knowledge, and enterprise belong together.</h2>
            <div className="mt-7 h-2 w-24 rounded-full bg-gold/55" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Afeez has built his career where ideas meet execution—writing with purpose, creating enduring spaces, improving enterprise operations, and teaching others what works.</p>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">His work is united by one conviction: lasting value comes from clarity, discipline, and a deep respect for craft.</p>
            <Button asChild variant="ink" size="lg" className="mt-9"><Link to="/about">Read my story <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-gold">Selected work</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">Proof in the practice.</h2></div><Button asChild variant="goldOutline" size="lg"><Link to="/portfolio">View Portfolio <ArrowUpRight /></Link></Button></div>
           <div className="mt-12 grid gap-5 md:grid-cols-3">
             {work.map((item, index) => <article key={item.category} className="group rounded-[2rem] bg-paper/5 p-3 transition-all duration-300 hover:-translate-y-2 hover:bg-paper/10"><ImagePlaceholder label={item.image} dark className="aspect-[4/3] min-h-0 rounded-[1.5rem]" /><div className="px-3 pb-3 pt-6"><div className="flex items-center justify-between"><p className="eyebrow text-gold">{item.category}</p><span className="text-xs text-paper/40">0{index + 1}</span></div><h3 className="mt-3 max-w-sm font-serif text-2xl leading-tight">{item.title}</h3></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container">
          <div className="max-w-3xl"><p className="eyebrow text-gold-strong">Books, courses & resources</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Knowledge made useful.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {products.map((item) => <article key={item.title} className="group flex min-h-[26rem] flex-col rounded-[2rem] border border-gold/25 bg-ink p-7 text-paper shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-gold/60 hover:shadow-card-hover"><div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-soft"><BookOpen className="size-5" /></span><span className="font-serif text-5xl text-gold/35">{item.accent}</span></div><div className="mt-auto"><p className="eyebrow text-gold">{item.type}</p><h3 className="mt-3 font-serif text-3xl font-semibold leading-tight">{item.title}</h3><p className="mt-4 text-sm leading-6 text-paper/65">{item.detail}</p><Link to={item.type === "Book" ? "/books" : "/courses"} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Explore <ArrowUpRight className="size-4" /></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-gold/20 bg-ink py-20 text-paper md:py-28">
        <div className="site-container">
          <p className="eyebrow text-gold-strong">What collaborators say</p>
          <div className="mt-9 grid gap-10 md:grid-cols-3">
            {["Afeez brings rare clarity to complex work. He listens carefully, thinks deeply, and delivers with conviction.", "The quality of the craftsmanship was exceptional—precise, professional, and built to last.", "His ability to connect systems knowledge with real operational needs made the engagement genuinely valuable."].map((quote, index) => <blockquote key={quote} className="rounded-[2rem] border border-gold/25 bg-paper/5 p-7 shadow-card"><Quote className="size-8 text-gold" /><p className="mt-5 font-serif text-2xl leading-9">“{quote}”</p><footer className="mt-6 text-xs font-semibold text-paper/55">Client testimonial <span className="text-gold">0{index + 1}</span></footer></blockquote>)}
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">Conversations & features</p>
        <div className="mt-8 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">{["Television", "Radio", "Podcasts", "Press"].map((item) => <div key={item} className="flex h-24 items-center justify-center border-b border-r border-border font-serif text-xl text-muted-foreground md:h-28 md:text-2xl">{item}</div>)}</div>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-ink text-paper shadow-card md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-10 md:p-14"><p className="eyebrow text-gold">The lasting value letter</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">Useful ideas for better work, stronger systems, and a more intentional life.</h2><p className="mt-5 max-w-xl leading-7 text-paper/65">Occasional notes on writing, craftsmanship, enterprise technology, education, and the lessons connecting them.</p><form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" className="h-14 min-w-0 flex-1 rounded-full border border-paper/25 bg-paper/5 px-5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold" /><Button type="submit" variant="gold" size="lg">Join the letter <ArrowRight /></Button></form></div>
          <div className="flex flex-col justify-between border-t border-paper/15 p-7 sm:p-10 md:border-l md:border-t-0 md:p-14"><div><p className="eyebrow text-gold">Have a project in mind?</p><h3 className="mt-5 font-serif text-4xl leading-tight">Let’s create something of lasting value.</h3></div><Button asChild variant="paper" size="lg" className="mt-12 w-fit"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button></div>
        </div>
      </section>
    </main>
  );
}
