import { createFileRoute, Link } from '@tanstack/react-router';
import { RadioTower, Sprout, Building2, Network, Sun, ArrowUpRight } from 'lucide-react';
import { PageIntro, Reveal } from '@/components/site/layout';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/lib/site-meta';
export const Route = createFileRoute('/applications')({ head: () => pageHead('Stationary Energy Storage Applications', 'Explore intended applications for XVolt’s long-duration iron flow energy storage in telecom, agriculture, off-grid facilities, microgrids, and renewable firming.'), component: Applications });
const applications = [
  { icon: RadioTower, name: 'Remote Telecom & Infrastructure', text: 'Intended to support reliable stored energy for remote communications and infrastructure sites.' },
  { icon: Sprout, name: 'Agriculture & Ranching', text: 'Intended to store locally generated energy for agricultural operations and ranch facilities.' },
  { icon: Building2, name: 'Off-Grid Facilities', text: 'Intended to support stationary energy storage for facilities beyond the electrical grid.' },
  { icon: Network, name: 'Microgrids', text: 'Intended to integrate with local generation and loads as part of a microgrid.' },
  { icon: Sun, name: 'Renewable Firming', text: 'Intended to store renewable generation for use when solar or wind output declines.' },
];
function Applications() {
  return <main><PageIntro eyebrow="Intended applications" title="Storage where it matters."><p>Long-duration stationary energy storage for distributed infrastructure, off-grid operations, and renewable energy systems.</p></PageIntro><section className="content-section"><div className="site-container"><Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{applications.map(({ icon: Icon, name, text }) => <article key={name} className="rounded-lg border border-border bg-card p-8"><div className="feature-icon"><Icon /></div><h2 className="mt-7 text-xl font-semibold leading-snug text-primary">{name}</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</Reveal><p className="mt-7 text-xs leading-6 text-muted-foreground">These are intended use cases, not validated deployments. Suitability will depend on system testing and site requirements.</p></div></section><section className="content-section border-t border-border bg-secondary/40"><div className="site-container flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow">Pilot site hosting</p><h2 className="section-heading mt-4">Have a site in mind?</h2><p className="mt-4 text-sm text-muted-foreground">Discuss your operating environment and energy storage requirements.</p></div><Button size="lg" asChild><Link to="/partner">Partner With Us <ArrowUpRight /></Link></Button></div></section></main>;
}
