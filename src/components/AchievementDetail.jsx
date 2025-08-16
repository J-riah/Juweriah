// src/components/AchievementDetail.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const achievementData = {
  1: {
    title: 'Top 10 Finalists among 1.25 lakh teams at EY Techathon4.0 2024',
    description: 'Reached Finale of this National Hackathon with Gyan Saathi and AI assistant that helps students in rural areas via multilingual feature, voice assistant, research assistant, allowing students to finetune the model based on their textbooks and so much more.',
    images: [`${import.meta.env.BASE_URL}images/EY-1.jpg`]
  },
  2: {
    title: 'Winner of Hack-Z conducted by Osmania TBI ‘23',
    description: 'Created an AI assistant that took pdfs of textbooks and generated answers based on the data present in them.',
    images: [`${import.meta.env.BASE_URL}images/hackz-1.jpg`, `${import.meta.env.BASE_URL}images/hackz-2.jpg`]
  },
  4: {
    title: 'Winner of Rs.1 lakh worth of Incubation support in Idea Hackathon',
    description: 'Worked on ideas for AI mental health assistant - KhushiAI and ways to improve it.',
    images: [`${import.meta.env.BASE_URL}images/khushi-1.jpg`, `${import.meta.env.BASE_URL}images/khushi-2.jpg`]
  },
  5: {
    title: 'General Secretary of CSI - CBIT Student Branch',
    description: 'Appointed as General Secretary of CSI - CBIT Student Branch. Worked to organise and attend multiple workshops and events.',
    images: [`${import.meta.env.BASE_URL}images/csiclub-1.jpg`, `${import.meta.env.BASE_URL}images/concentrated-1.jpg`]
  },
  6: {
    title: 'Vice President of HICON CBIT 2025-26',
    description: 'Appointed as Vice President of HICON (Hackathons, Ideathons Committee Club) of CBIT. Organised multiple Hackathons and workshops for Microsoft ByteXL, SIH Internal hackathons and more',
    images: [`${import.meta.env.BASE_URL}images/anchorblack-1.jpg`, `${import.meta.env.BASE_URL}images/anchorpurple-1.jpg`]
  },
  7: {
    title: 'Updating soon',
    description: '',
    images: [`${import.meta.env.BASE_URL}images/money-1.jpg`,`${import.meta.env.BASE_URL}images/red-1.jpg`, `${import.meta.env.BASE_URL}images/black-1.jpg`, `${import.meta.env.BASE_URL}images/pink-2.jpg`, `${import.meta.env.BASE_URL}images/anchorblack-1.jpg`, `${import.meta.env.BASE_URL}images/concentrated-1.jpg`, `${import.meta.env.BASE_URL}images/anurag-1.jpg`]
  }
}

export default function AchievementDetail() {
  const { id } = useParams()
  const achievement = achievementData[id]

  if (!achievement) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Achievement not found</h2>
        <Link to="/" className="text-accent">Go Back</Link>
      </div>
    )
  }

  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      <Link to="/" className="text-accent mb-6 inline-block">&larr; Back</Link>
      <h1 className="text-4xl font-bold mb-6 text-accent">{achievement.title}</h1>
      <p className="mb-8 text-lg text-gray-300">{achievement.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {achievement.images.map((img, idx) => (
          <img key={idx} src={img} alt="" className="rounded-lg shadow-lg object-cover w-full h-56" />
        ))}
      </div>
    </section>
  )
}
