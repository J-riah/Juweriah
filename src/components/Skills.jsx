import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaPaintBrush } from 'react-icons/fa'
import { SiMongodb } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'SQL', icon: <FaDatabase size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'AI/ML', icon: <GiArtificialIntelligence size={40} /> },
  { name: 'and more...', icon: <FaPaintBrush size={40} /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-bg text-center">
      <h2 className="h-heading text-4xl mb-12 text-accent">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, y: -4 }}
            className="bg-surface p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-center text-accent">{s.icon}</div>
            <p className="mt-4 text-text font-medium">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
