import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import AchievementDetail from './components/AchievementDetail.jsx'
import Contact from './components/Contact.jsx'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievement/:id" element={<AchievementDetail />} />
      </Routes>
    </Router>
  )
}
