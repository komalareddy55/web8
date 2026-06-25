import React from 'react';
import { useRef } from 'react';
import Reveal from './Reveal.jsx';

const projects = [
  {
    tag: 'Government Identity · API Integration',
    title: 'T App Folio — Telangana',
    summary:
      'A digital government services platform providing RTA workflows — Driving License and Learner License processing — through secure RESTful APIs, seamless frontend integration, and production-grade backend services.',
    challenge: 'Build reliable APIs for government RTA services with clean integration between backend.',
    result: 'Delivered fully functional DL and LL workflows with seamless API-to-UI data flow and improved performance.',
    impact: ['Driving License APIs', 'Learner License workflows', 'User details flow', 'Token/session revocation'],
    stack: ['ASP.NET Core', 'Web API', 'SQL Server', 'Postman', 'REST APIs', 'JWT'],
    glow: '#5aa7ff',
  },
  {
    tag: 'UCM project ',
    title: 'Bulk Mail & SMS Notification Platform',
    summary:
      'A high-performance bulk messaging platform built with .NET Core 8 — handling mass email and SMS dispatching through MSMQ queue-based architecture, Redis caching for fast delivery tracking, containerised with Docker, and a React.js dashboard for campaign management and monitoring.',
    challenge: 'Deliver thousands of emails and SMS messages reliably without message loss, duplication, or system overload under high load.',
    result: 'Scalable async messaging pipeline with zero message loss, Redis-backed delivery tracking, and Dockerised deployment.',
    impact: ['Bulk mail dispatch', 'Bulk SMS delivery', 'Zero message loss', 'Async queue processing','Redis caching'],
    stack: ['React', '.NET Core 8', 'Redis', 'SQL', 'Docker', 'Postman','Web API'],
    glow: '#ff9d3d',
  },
  {
    tag: 'Finance · Transaction Platform',
    title: 'VCIP — Video Customer Identification Process',
    summary:
      'Live video-based customer verification system for digital onboarding — with face matching, liveness detection, identity document upload, and KYC-compliant secure APIs reducing manual verification time significantly.',
    challenge: 'Handle sensitive identity data securely while meeting KYC and regulatory compliance requirements at scale.',
    result: 'Reduced manual KYC verification time significantly with automated face matching and liveness detection.',
    impact: ['Face matching', 'Liveness detection', '1,000+ verified', 'Zero data loss'],
    stack: ['React', 'ASP.NET Core', 'Web API', 'SQL Server', 'JWT', 'postman'],
    glow: '#42ff91',
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateX = (0.5 - py) * 7;
    const rotateY = (px - 0.5) * 9;
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <Reveal
      as="article"
      className="project-card-v2"
      delay={index * 110}
      style={{ '--glow': project.glow }}
    >
      <div
        ref={cardRef}
        className="project-tilt"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="project-glow" />
        <div className="project-topline">
          <span className="project-index">0{index + 1}</span>
          <p className="project-tag">{project.tag}</p>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="case-mini">
          <div><b>Challenge</b><span>{project.challenge}</span></div>
          <div><b>Result</b><span>{project.result}</span></div>
        </div>

        <div className="impact-list">
          {project.impact.map((point) => <span key={point}>{point}</span>)}
        </div>

        <div className="stack-row">
          {project.stack.map((tool) => <small key={tool}>{tool}</small>)}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="work">
      <Reveal as="div" className="section-heading projects-heading">
        <div className="section-label">Project Showcase</div>
        <h2>Real systems, real constraints, real outcomes.</h2>
      </Reveal>

      <div className="project-grid-v2">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </section>
  );
}
