import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Books", to: "/books" },
  { label: "Courses", to: "/courses" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
] as const;

const socialItems = ["Facebook", "LinkedIn", "Instagram", "YouTube", "TikTok", "WhatsApp Business", "X"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-ink/95 text-paper backdrop-blur-xl">
      <div className="site-container flex h-18 items-center justify-between gap-6">
        <Link to="/" className="group flex items-center gap-3" aria-label="Afeez Amusa Onireke home">
          <span className="flex size-10 rotate-[-3deg] items-center justify-center rounded-xl bg-gold font-serif text-sm font-bold text-gold-foreground shadow-soft transition-transform group-hover:rotate-0 group-hover:scale-105">
            AAO
          </span>
          <span className="hidden max-w-40 font-serif text-lg font-semibold leading-none text-paper sm:block">Afeez Amusa Onireke</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-xs font-semibold text-paper/65 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="gold" className="hidden sm:inline-flex">
              <Link to="/contact">Work with me <ArrowUpRight /></Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="goldOutline" size="icon" className="bg-ink text-paper xl:hidden" aria-label="Open navigation">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-border bg-background p-0">
              <SheetHeader className="border-b border-border px-6 py-7 text-left">
                <SheetTitle className="flex items-center gap-2 font-serif text-2xl"><Sparkles className="size-5 text-gold-strong" /> Afeez Amusa Onireke</SheetTitle>
                <SheetDescription>Writer, consultant, craftsman and educator</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-5" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="flex items-center justify-between border-b border-border py-3 text-sm font-semibold"
                    >
                      <span><span className="mr-3 text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{item.label}</span>
                      <ArrowUpRight className="size-4 text-gold" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="px-6 pb-8">
                <SheetClose asChild>
                  <Button asChild variant="gold" className="w-full">
                    <Link to="/contact">Work with me <ArrowUpRight /></Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-12 border-b border-paper/15 pb-12 md:grid-cols-[1.3fr_2fr] md:pb-16">
          <div>
            <div className="mb-6 flex size-12 rotate-[-3deg] items-center justify-center rounded-xl bg-gold font-serif font-bold text-gold-foreground">AAO</div>
            <h2 className="max-w-md font-serif text-3xl leading-tight md:text-4xl">Useful ideas, thoughtful work, and craftsmanship that lasts.</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-gold">Explore</p>
              <div className="mt-5 flex flex-col gap-3">
                {navItems.slice(0, 5).map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}
              </div>
            </div>
            <div>
              <p className="eyebrow text-gold">Discover</p>
              <div className="mt-5 flex flex-col gap-3">
                {navItems.slice(5).map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow text-gold">Connect</p>
              <div className="mt-5 flex flex-col gap-3">
                {socialItems.map((item) => <a key={item} href="#" className="footer-link">{item}</a>)}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Afeez Amusa Onireke. All rights reserved.</p>
          <p>Built around craft, clarity, and lasting value.</p>
        </div>
      </div>
    </footer>
  );
}