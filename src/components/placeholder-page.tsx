import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <main>
      <section className="bg-ink text-paper">
        <div className="site-container flex min-h-[62vh] flex-col justify-end py-20 md:py-28">
          <p className="eyebrow text-gold">Afeez Amusa Onireke</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none sm:text-6xl md:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-paper/70 md:text-lg">{description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Start a conversation <ArrowUpRight /></Link>
            </Button>
            <Button asChild variant="goldOutline" size="lg">
              <Link to="/"><ArrowLeft /> Back home</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="site-container py-16 md:py-24">
        <div className="max-w-2xl border-l border-gold pl-6">
          <p className="eyebrow">Coming next</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">This page is being thoughtfully developed.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">The complete experience will be added in the next phase. The navigation is ready, so this destination can grow without changing the site structure.</p>
        </div>
      </section>
    </main>
  );
}