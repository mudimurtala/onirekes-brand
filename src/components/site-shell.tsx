import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Menu, MessageCircle, Sparkles, Youtube } from "lucide-react";

function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.03-.07Z" />
    </svg>
  );
}

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

const socialLinks = [
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: XLogo, label: "X / Twitter" },
  { icon: TikTokLogo, label: "TikTok" },
  { icon: MessageCircle, label: "WhatsApp Business" },
];

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

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="nav-link"
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

        {/* Main grid: brand left, nav columns right */}
        <div className="grid gap-14 border-b border-paper/12 pb-12 md:grid-cols-[1.25fr_2fr] md:gap-20 md:pb-16">

          {/* Left: brand identity + social icons */}
          <div>
            <div className="mb-5 flex size-12 rotate-[-3deg] items-center justify-center rounded-xl bg-gold font-serif font-bold text-gold-foreground">AAO</div>
            <p className="font-serif text-lg font-semibold text-paper">Afeez Amusa Onireke</p>
            <p className="mt-1 text-sm text-paper/50">Writer · Tiler · SAP Consultant · Educator</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-paper/45">Useful ideas, thoughtful work, and craftsmanship that lasts.</p>

            {/* Social icon circles */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-14 items-center justify-center rounded-full bg-paper/12 text-paper ring-1 ring-paper/15 transition-all duration-200 hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground hover:ring-gold hover:shadow-button"
                >
                  <Icon className="size-[1.45rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: nav link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="eyebrow text-gold">Explore</p>
              <div className="mt-5 flex flex-col gap-3.5">
                {navItems.slice(0, 5).map((item) => (
                  <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-gold">Discover</p>
              <div className="mt-5 flex flex-col gap-3.5">
                {navItems.slice(5).map((item) => (
                  <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>
                ))}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow text-gold">Work Together</p>
              <div className="mt-5">
                <p className="text-sm leading-6 text-paper/50">Have a project or collaboration in mind? Let's talk.</p>
                <a href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all duration-200">
                  Start a conversation <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-7 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Afeez Amusa Onireke. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-gold">Privacy Policy</a>
            <span className="text-paper/20">·</span>
            <a href="#" className="transition-colors hover:text-gold">Cookie Policy</a>
            <span className="text-paper/20">·</span>
            <a href="#" className="transition-colors hover:text-gold">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}