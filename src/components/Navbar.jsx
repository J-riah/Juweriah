import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl card-surface px-4 py-2">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="J logo"
              className="h-10 w-10 rounded-full object-cover"
              style={{ ringColor: 'var(--border)' }}
            />
            <span className="h-heading text-accent text-lg">Juweriah</span>
          </a>

          <div className="flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:opacity-90">Projects</a>
            <a href="#achievements" className="hover:opacity-90">Achievements</a>
            <a href="#contact" className="hover:opacity-90">Contact</a>
            <a href="#projects" className="btn-accent">View Work</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
