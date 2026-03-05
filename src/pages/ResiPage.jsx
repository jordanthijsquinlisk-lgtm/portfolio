import ProjectPage from '../components/ProjectPage';

export default function ResiPage() {
  return (
    <ProjectPage
      tag="Web Design"
      year="2022 — Ongoing"
      title="Resi"
      description="Marketing websites for apartment communities across the US — designed and built end-to-end inside YOOtheme Pro & WordPress. Each site is architected for speed, SEO, and leasing conversion."
      body="Resi needed a scalable design system for dozens of property websites — each with unique branding but shared architecture. I built a modular component library in YOOtheme Pro that lets the team spin up new properties in days rather than weeks. Every site is performance-optimised, mobile-first, and wired up for leasing enquiries."
      images={[
        { label: 'Homepage',      accent: 'rgba(0,76,193,0.3)',  height: 460 },
        { label: 'Property page', accent: 'rgba(0,50,150,0.35)', height: 340 },
        { label: 'Mobile view',   accent: 'rgba(0,60,170,0.3)',  height: 420 },
        { label: 'Components',    accent: 'rgba(0,40,130,0.35)', height: 360 },
      ]}
      role="Designer & Developer"
      stack="YOOtheme Pro, WordPress, PHP"
      scope="Full-site builds, template systems, component libraries"
      links={[{ label: 'Live site', href: '#' }]}
      next={{ title: 'Pinpoint', href: '/pinpoint' }}
    />
  );
}
