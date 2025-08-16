import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'AI-PRA', desc: 'AI Powered Resume Analyser', link: 'https://github.com/J-riah/AI-PRA' }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-bg">
      <h2 className="h-heading text-4xl text-center mb-12 text-accent">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -4 }}
            className="bg-surface p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-text mb-2">{p.title}</h3>
            <p className="text-muted">{p.desc}</p>
            <a href={p.link} className="text-accent mt-4 inline-block hover:underline" target="_blank" rel="noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
