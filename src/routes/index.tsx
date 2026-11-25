import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, ShieldCheck, Layers3, RefreshCw, MapPin, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/site/layout';
import { pageHead } from '@/lib/site-meta';
import hero from '@/assets/utah-energy-infrastructure.webp.asset.json';

export const Route = createFileRoute('/')({
  head: () => pageHead('Long-Duration Iron Flow Energy Storage', 'XVolt is a Utah-based, veteran-owned clean energy company developing an all-iron flow battery with patent-pending electronic cell balancing.', hero.url),
  component: Home,
});
const features = [
  { icon: ShieldCheck, title: 'Safe Chemistry', label: 'NON-FLAMMABLE ELECTROLYTE', text: 'Water-based iron chemistry avoids thermal runaway associated with flammable battery electrolytes.' },
  { icon: Layers3, title: 'Abundant Materials', label: 'IRON, NOT LITHIUM OR COBALT', text: 'Built around abundant iron, without relying on lithium or cobalt for the active storage chemistry.' },
  { icon: RefreshCw, title: 'Built to Last', label: 'NPJ ACTIVE BALANCING', text: 'Patent-pending electronic balancing is designed to reduce degradation and support a multi-decade service-life target.' },
];
function Home() {
  return <main>
    <section className="home-hero">
      <img src={hero.url} alt="Illustrative energy infrastructure in Utah’s high-desert landscape" fetchPriority="high" />
      <div className="site-container hero-content">
        <p className="eyebrow">Utah-based · Veteran-owned · Patent pending</p>
        <h1 className="mt-7">Long-Duration<br className="hidden sm:block" /> Iron Flow<br className="hidden sm:block" /> Energy Storage.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted">Abundant materials, non-flammable chemistry, and patent-pending electronic cell balancing, engineered for multi-decade service life.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" variant="hero"><Link to="/technology">Our Technology <ArrowUpRight /></Link></Button><Button asChild size="lg" variant="heroOutline"><Link to="/partner">Partner With Us <ArrowUpRight /></Link></Button></div>
        <p className="mt-7 flex items-center gap-2 text-xs text-hero-muted"><FlaskConical className="size-3.5" />Multi-decade service life is a design target, not a proven result.</p>
      </div>
      <span className="absolute bottom-5 right-6 z-10 text-[10px] text-hero-muted">Illustrative infrastructure · not an XVolt installation</span>
    </section>
    <section className="border-b border-border bg-secondary/50 py-5"><div className="site-container flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-medium text-muted-foreground"><span className="flex items-center gap-2 text-primary"><ShieldCheck className="size-4 text-accent" />Veteran-Owned Small Business</span><span>Registered on SAM.gov</span><span>NAICS 335911</span><span className="flex items-center gap-1.5"><MapPin className="size-3.5" />Spanish Fork, Utah</span><span>Patent Pending</span></div></section>
    <section className="content-section"><div className="site-container"><Reveal>
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">A considered approach to energy storage</p><h2 className="section-heading mt-4">Grounded in chemistry.<br />Engineered for longevity.</h2></div><Link to="/technology" className="flex items-center gap-2 text-sm font-medium text-primary">Explore the technology <ArrowRight className="size-4 text-accent" /></Link></div>
      <div className="grid gap-5 md:grid-cols-3">{features.map(({ icon: Icon, title, label, text }) => <article key={title} className="rounded-lg border border-border bg-card p-7"><div className="feature-icon"><Icon /></div><h3 className="mt-6 text-xl font-semibold text-primary">{title}</h3><p className="mt-3 text-[10px] font-semibold text-muted-foreground">{label}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
    </Reveal></div></section>
    <section className="border-t border-border bg-secondary/40 py-8"><div className="site-container flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="flex gap-4"><FlaskConical className="mt-1 size-5 shrink-0 text-accent" /><div><h2 className="text-sm font-semibold text-primary">Development, with validation at the center.</h2><p className="mt-2 text-sm text-muted-foreground">Bench-scale demonstration cell under construction and test.</p></div></div><Button variant="outline" asChild><Link to="/development">View Development <ArrowRight /></Link></Button></div></section>
  </main>;
}
