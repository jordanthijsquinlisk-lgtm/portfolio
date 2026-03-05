import ProjectPage from '../components/ProjectPage';

export default function PinpointPage() {
  return (
    <ProjectPage
      tag="Product / Tool"
      year="2023"
      title="Pinpoint"
      description="A click-to-annotate feedback widget built for Resi's internal design workflow. Click anywhere on a live page to drop a pin, add a comment, and route it directly into Teamwork Desk — no screenshots, no guessing coordinates."
      body="Pinpoint started from a real frustration: feedback on live pages meant screenshots, coordinates, and long Slack threads. I designed and built a lightweight widget that injects into any page, lets reviewers click to place annotated pins, and creates tickets in Teamwork Desk automatically. It was pitched internally and adopted as part of the Resi design review process."
      images={[
        { label: 'Widget in action',     accent: 'rgba(0,76,193,0.3)',  height: 440 },
        { label: 'Pin UI',               accent: 'rgba(20,60,180,0.3)', height: 360 },
        { label: 'Teamwork integration', accent: 'rgba(10,40,140,0.35)',height: 400 },
        { label: 'Ticket created',       accent: 'rgba(0,50,160,0.35)', height: 340 },
      ]}
      role="Designer & Developer"
      stack="Vanilla JS, CSS, Teamwork Desk API"
      scope="Widget design, API integration, internal pitch"
      links={[{ label: 'GitHub', href: '#' }]}
      prev={{ title: 'Resi', href: '/resi' }}
      next={{ title: 'Thursday Tea', href: '/standup' }}
    />
  );
}
