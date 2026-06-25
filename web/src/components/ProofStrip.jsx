import React from 'react';
import Reveal from './Reveal.jsx';

const proofPoints = [
  '.Net Full Stack Development',
  'REST API Development',
  'Software Testing & Quality Assurance',
  'Database Design & Optimization',
];

export default function ProofStrip() {
  return (
    <section className="section proof-section-v2" id="proof">
      <Reveal as="div" className="proof-card-v2">
        <p className="section-label">Social Proof</p>
        <h2>Recognized for secure delivery, performance improvement, and independent problem solving.</h2>
        <div className="proof-points-v2">
          {proofPoints.map((point, i) => (
            <Reveal as="span" delay={i * 90} key={point}>{point}</Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
