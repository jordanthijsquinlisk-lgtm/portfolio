import ProjectPage from '../components/ProjectPage';

export default function StandupPage() {
  return (
    <ProjectPage
      tag="Internal Tool"
      year="2024"
      title="Thursday Tea"
      description="A weekly standup board for Resi's team meetings. Departments submit updates before the call; a presenter walks through them fullscreen, one card at a time. Updates auto-archive every Monday and reset for the new week."
      body="Thursday Tea replaces the chaos of copy-pasted Slack updates before weekly standups. Each of Resi's 9 departments gets a card with rich-text editing (TipTap), a Start/Stop/Continue toggle, and an 800ms debounced auto-save. When the meeting starts, presenter mode takes over — fullscreen dark view, arrow-key navigation, dot progress bar. Past weeks are archived automatically every Monday via a cron job and available as read-only views."
      images={[
        { src: '/images/standup/hero.png', label: 'Board view',      accent: 'rgba(60,30,120,0.5)',  height: 460, position: 'top' },
        { label: 'Presenter mode',         accent: 'rgba(50,20,110,0.45)', height: 360 },
        { label: 'Department card',        accent: 'rgba(70,40,130,0.4)', height: 420 },
        { label: 'Archive view',           accent: 'rgba(40,10,100,0.5)', height: 340 },
      ]}
      role="Designer & Developer"
      stack="React, Node.js, Express, SQLite, Railway"
      scope="Real-time board, presenter mode, auto-archive"
      links={[{ label: 'Internal tool', href: '#' }]}
      prev={{ title: 'Pinpoint', href: '/pinpoint' }}
      next={{ title: 'Reimagine', href: '/reimagine' }}
    />
  );
}
