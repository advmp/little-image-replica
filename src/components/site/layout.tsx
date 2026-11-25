import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X, Zap, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  { label: 'Home', to: '/' }, { label: 'Technology', to: '/technology' },
  { label: 'Development', to: '/development' }, { label: 'Applications', to: '/applications' },
  { label: 'Team', to: '/team' },
] as const;
export function Wordmark() {
  return <span className="wordmark"><Zap className="size-7" strokeWidth={2} aria-hidden="true" /><span>XVolt<span className="text-accent">.</span></span></span>;
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-20 border-b border-border bg-background">
    <div className="site-container flex h-20 items-center justify-between gap-6">
      <Link to="/" aria-label="XVolt home" onClick={() => setOpen(false)}><Wordmark /></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} className="nav-link">{item.label}</Link>)}
      </nav>
      <Button asChild className="hidden lg:inline-flex"><Link to="/partner">Partner With Us <ArrowUpRight /></Link></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-4 shadow-sm lg:hidden">
      {[...navigation, { label: 'Partner With Us', to: '/partner' } as const].map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3 text-sm text-primary hover:bg-secondary">{item.label}</Link>)}
    </nav>}
  </header>;
}
export function SiteFooter() {
  return <footer className="border-t border-border bg-background py-12">
    <div className="site-container">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div><Link to="/" aria-label="XVolt home"><Wordmark /></Link><p className="mt-4 text-sm text-muted-foreground">Iron chemistry. Long-duration storage.</p><p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="size-3.5" />Spanish Fork, Utah</p></div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-muted-foreground">{navigation.filter(item => item.to !== '/').map(item => <Link key={item.to} to={item.to} className="hover:text-primary">{item.label}</Link>)}<Link to="/partner" className="hover:text-primary">Partner With Us</Link></nav>
      </div>
      <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row"><span>© XVolt. All rights reserved.</span><span className="flex items-center gap-2"><ShieldCheck className="size-3.5" />Veteran-Owned Small Business<span className="mx-2">·</span>Patent Pending</span></div>
    </div>
  </footer>;
}
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.05 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${visible ? 'reveal' : ''} ${className}`}>{children}</div>;
}
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1 className="page-heading mt-5">{title}</h1><div className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{children}</div></div></section>;
}
