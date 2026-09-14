import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Building2, GraduationCap, PenTool } from "lucide-react";

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
      <section className="bg-ink text-paper">
        <div className="site-container grid min-h-[calc(100svh-5rem)] items-stretch lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
            <div className="reveal">
              <p className="eyebrow flex items-center gap-3 text-gold"><span className="h-px w-10 bg-gold" /> The professional ecosystem</p>
              <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[0.84]">Afeez Amusa <span className="text-gold">Onireke.</span></h1>
              <p className="mt-8 max-w-2xl text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-paper/75">Author <span className="text-gold">|</span> Writer <span className="text-gold">|</span> Professional Tiler <span className="text-gold">|</span> SAP PP/QM & RE FX Consultant <span className="text-gold">|</span> Educator <span className="text-gold">|</span> Entrepreneur</p>
              <p className="mt-7 max-w-xl text-base leading-7 text-paper/68 md:text-lg">Helping individuals, businesses, and institutions create lasting value through writing, craftsmanship, enterprise technology, and education.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="lg"><Link to="/contact">Hire Me <ArrowUpRight /></Link></Button>
                <Button asChild variant="goldOutline" size="lg"><Link to="/portfolio">Explore My Work <ArrowRight /></Link></Button>
                <Button asChild variant="ghost" size="lg" className="text-paper hover:bg-paper/10 hover:text-gold"><Link to="/books">Books & Courses</Link></Button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[30rem] border-t border-paper/15 lg:border-t-0 lg:border-l">
            <ImagePlaceholder label="Professional portrait of Afeez Amusa Onireke" dark className="absolute inset-0 min-h-full" />
            <div className="absolute bottom-5 left-5 border-l-2 border-gold bg-ink/85 px-4 py-3 backdrop-blur-sm">
              <p className="eyebrow text-gold">Lagos, Nigeria</p>
              <p className="mt-1 text-xs text-paper/65">Creating value across disciplines.</p>
            </div>
          </div>
        </div>
        <div className="site-container flex items-center gap-3 border-t border-paper/15 py-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-paper/50"><ArrowDown className="size-4 text-gold" /> Discover the ecosystem</div>
      </section>

      <section className="site-container py-20 md:py-32">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="eyebrow text-gold-strong">Ways to work together</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">How can I help you?</h2></div>
          <p className="max-w-xl leading-7 text-muted-foreground md:justify-self-end">One professional ecosystem. Four distinct pathways to solve meaningful problems, build capability, and create work that lasts.</p>
        </div>
        <div className="grid border-l border-t border-border md:grid-cols-2">
          {pillars.map(({ number, icon: Icon, title, text, to }) => (
            <article key={title} className="group flex min-h-80 flex-col border-b border-r border-border bg-card p-7 transition-colors duration-300 hover:bg-ink hover:text-paper md:p-10">
              <div className="flex items-start justify-between"><span className="eyebrow text-gold-strong">{number}</span><Icon className="size-6 text-gold-strong" /></div>
              <div className="mt-auto pt-12"><h3 className="max-w-md font-serif text-3xl leading-tight md:text-4xl">{title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground transition-colors group-hover:text-paper/65">{text}</p><Link to={to} className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-strong">Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-muted">
        <div className="site-container grid items-center gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:py-28">
          <ImagePlaceholder label="Afeez in his workspace or speaking" className="aspect-[4/5] min-h-0" />
          <div>
            <p className="eyebrow text-gold-strong">A multidisciplinary journey</p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.98] md:text-7xl">Craft, knowledge, and enterprise belong together.</h2>
            <div className="mt-7 h-px w-20 bg-gold" />
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Afeez has built his career where ideas meet execution—writing with purpose, creating enduring spaces, improving enterprise operations, and teaching others what works.</p>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">His work is united by one conviction: lasting value comes from clarity, discipline, and a deep respect for craft.</p>
            <Button asChild variant="ink" size="lg" className="mt-9"><Link to="/about">Read My Full Story <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="site-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-gold">Selected work</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">Proof in the practice.</h2></div><Button asChild variant="goldOutline" size="lg"><Link to="/portfolio">View Portfolio <ArrowUpRight /></Link></Button></div>
          <div className="mt-12 grid gap-px bg-paper/15 md:grid-cols-3">
            {work.map((item, index) => <article key={item.category} className="group bg-ink pb-7"><ImagePlaceholder label={item.image} dark className="aspect-[4/3] min-h-0" /><div className="px-1 pt-6"><div className="flex items-center justify-between"><p className="eyebrow text-gold">{item.category}</p><span className="text-xs text-paper/40">0{index + 1}</span></div><h3 className="mt-3 max-w-sm font-serif text-2xl leading-tight">{item.title}</h3></div></article>)}
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="max-w-3xl"><p className="eyebrow text-gold-strong">Books, courses & resources</p><h2 className="mt-4 font-serif text-5xl leading-none md:text-7xl">Knowledge made useful.</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((item) => <article key={item.title} className="flex min-h-[26rem] flex-col border border-border bg-card p-7"><div className="flex items-start justify-between"><BookOpen className="size-6 text-gold-strong" /><span className="font-serif text-6xl text-paper-muted">{item.accent}</span></div><div className="mt-auto"><p className="eyebrow text-gold-strong">{item.type}</p><h3 className="mt-3 font-serif text-3xl leading-tight">{item.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.detail}</p><Link to={item.type === "Book" ? "/books" : "/courses"} className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">View <ArrowUpRight className="size-4 text-gold-strong" /></Link></div></article>)}
        </div>
      </section>

      <section className="border-y border-border bg-paper-muted py-20 md:py-28">
        <div className="site-container">
          <p className="eyebrow text-gold-strong">What collaborators say</p>
          <div className="mt-9 grid gap-10 md:grid-cols-3">
            {["Afeez brings rare clarity to complex work. He listens carefully, thinks deeply, and delivers with conviction.", "The quality of the craftsmanship was exceptional—precise, professional, and built to last.", "His ability to connect systems knowledge with real operational needs made the engagement genuinely valuable."].map((quote, index) => <blockquote key={quote} className="border-t border-gold pt-7"><p className="font-serif text-2xl leading-9">“{quote}”</p><footer className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Client testimonial <span className="text-gold-strong">0{index + 1}</span></footer></blockquote>)}
          </div>
        </div>
      </section>

      <section className="site-container py-14 md:py-20">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">Conversations & features</p>
        <div className="mt-8 grid grid-cols-2 border-l border-t border-border sm:grid-cols-4">{["Television", "Radio", "Podcasts", "Press"].map((item) => <div key={item} className="flex h-24 items-center justify-center border-b border-r border-border font-serif text-xl text-muted-foreground md:h-28 md:text-2xl">{item}</div>)}</div>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <div className="grid overflow-hidden bg-ink text-paper md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-7 sm:p-10 md:p-14"><p className="eyebrow text-gold">The lasting value letter</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">Useful ideas for better work, stronger systems, and a more intentional life.</h2><p className="mt-5 max-w-xl leading-7 text-paper/65">Occasional notes on writing, craftsmanship, enterprise technology, education, and the lessons connecting them.</p><form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" className="h-13 min-w-0 flex-1 border border-paper/25 bg-paper/5 px-4 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-gold" /><Button type="submit" variant="gold" size="lg">Join the letter <ArrowRight /></Button></form></div>
          <div className="flex flex-col justify-between border-t border-paper/15 p-7 sm:p-10 md:border-l md:border-t-0 md:p-14"><div><p className="eyebrow text-gold">Have a project in mind?</p><h3 className="mt-5 font-serif text-4xl leading-tight">Let’s create something of lasting value.</h3></div><Button asChild variant="paper" size="lg" className="mt-12 w-fit"><Link to="/contact">Start a conversation <ArrowUpRight /></Link></Button></div>
        </div>
      </section>
    </main>
  );
}
