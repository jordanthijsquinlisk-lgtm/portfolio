import ProjectPage from '../components/ProjectPage';

export default function ReimaginePage() {
  return (
    <ProjectPage
      tag="AI Tool"
      year="2023 — 2024"
      title="Reimagine"
      description="An AI-powered image editor built for Resi property photographers. Automates sky replacement, object removal, and image enhancement — deployed to Google Cloud Run inside the Resi AI Toolbox."
      body="Property photography is time-consuming to retouch at scale. Reimagine is an internal AI tool that lets the Resi team upload raw property photos and apply automated enhancements — sky swaps, clutter removal, exposure correction — in seconds. The Python backend runs AI inference on Google Cloud Run, with a React frontend wired into the Resi AI Toolbox dashboard."
      images={[
        { label: 'Editor interface',    accent: 'rgba(0,50,160,0.35)',  height: 460 },
        { label: 'Before / after',      accent: 'rgba(0,40,130,0.35)',  height: 380 },
        { label: 'Sky replacement',     accent: 'rgba(0,60,170,0.3)',   height: 420 },
        { label: 'Cloud Run deployment',accent: 'rgba(0,30,110,0.4)',   height: 340 },
      ]}
      role="Designer & Developer"
      stack="Python, React, Google Cloud Run, AI APIs"
      scope="AI image processing, cloud deployment, internal tooling"
      links={[{ label: 'Internal tool', href: '#' }]}
      prev={{ title: 'Thursday Tea', href: '/standup' }}
    />
  );
}
