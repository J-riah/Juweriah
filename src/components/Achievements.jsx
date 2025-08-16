// src/components/Achievements.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const achievements = [
  {
    id: 1,
    title: 'EY Hackathon',
    thumbnail: `${import.meta.env.BASE_URL}images/EY-1.jpg`,
    description: 'Top 10 Finalists among 1.25 lakh teams at EY Techathon4.0 2024',
  },
  {
    id: 2,
    title: 'Hack-Z ‘23',
    thumbnail: `${import.meta.env.BASE_URL}images/hackz-1.jpg`,
    description: 'Winner of Hack-Z conducted by Osmania TBI ‘23',
  },
  {
    id: 4,
    title: 'Ideathon',
    thumbnail: `${import.meta.env.BASE_URL}images/khushi-2.jpg`,
    description: 'Winner of Rs.1 lakh worth of Incubation support in Idea Hackathon',
  },
  {
    id: 5,
    title: 'GS CSI CBIT',
    thumbnail: `${import.meta.env.BASE_URL}images/csiclub-1.jpg`,
    description: 'General Secretary of CSI Student Branch at CBIT',
  },
  {
    id: 6,
    title: 'VP HICON CBIT',
    thumbnail: `${import.meta.env.BASE_URL}images/anchorblack-1.jpg`,
    description: 'Vice President of HICON (Hackathons, Ideathons Committee Club) of CBIT',
  },
  {
    id: 7,
    title: 'and more',
    thumbnail: `${import.meta.env.BASE_URL}images/money-1.jpg`,
    description: 'updating soon',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-bg text-center">
      <h2 className="text-4xl font-bold mb-6 text-accent">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {achievements.map((a) => (
          <Link
            key={a.id}
            to={`/achievement/${a.id}`}
            className="bg-bg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            <img src={a.thumbnail} alt={a.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p className="text-gray-400">{a.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
