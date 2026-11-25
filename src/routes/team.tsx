import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, Reveal } from '@/components/site/layout';
import { pageHead } from '@/lib/site-meta';
export const Route = createFileRoute('/team')({ head: () => pageHead('Founders & Team', 'Meet XVolt co-founders Randy Johnson, Lagrand Johnson, M.D., and Chris Taylor, the inventors and systems team developing NPJ and iron flow energy storage in Utah.'), component: Team });
const founders = [
  { initials: 'RJ', name: 'Randy Johnson', role: 'Co-Founder & Chief Technology Officer', bio: "Inventor of XVolt's solar technology and principal architect of the patent-pending NPJ system. Brings extensive hands-on experience in electrical systems and power electronics. Leads cell and power electronics design." },
  { initials: 'LJ', name: 'Lagrand Johnson, M.D.', role: 'Co-Founder', bio: "Physician and inventor. Co-developer of XVolt's solar technology and the NPJ system. Contributes to research direction and technical development." },
  { initials: 'CT', name: 'Chris Taylor', role: 'Co-Founder & Director of Systems Integration', bio: 'U.S. Army veteran (1st Infantry Division) with 25+ years in software engineering (C#/.NET) and field experience in automotive and electrical systems and 3D scanning/CAD drafting. Leads data acquisition, controls software, and test automation.' },
];
function Team() {
  return <main><PageIntro eyebrow="Our team" title="Inventors. Engineers. Builders."><p>XVolt's technology was developed by its three co-founders, inventors who bring decades of hands-on electrical, engineering, and systems experience.</p></PageIntro><section className="content-section"><div className="site-container"><Reveal className="grid gap-6 lg:grid-cols-3">{founders.map(founder => <article key={founder.name} className="rounded-lg border border-border bg-card p-8"><div className="flex size-20 items-center justify-center rounded-full border border-border bg-secondary text-2xl font-medium text-primary" aria-label={`${founder.name} initials`}>{founder.initials}</div><h2 className="mt-7 text-xl font-semibold text-primary">{founder.name}</h2><p className="mt-3 min-h-12 text-xs font-medium leading-6 text-accent">{founder.role}</p><div className="my-6 h-px bg-border" /><p className="text-sm leading-7 text-muted-foreground">{founder.bio}</p></article>)}</Reveal></div></section></main>;
}
