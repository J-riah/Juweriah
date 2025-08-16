import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  const email = 'juweriahabdulraheem@gmail.com'
  const instagramUrl = 'https://www.instagram.com/juweri.ah'
  const linkedinUrl = 'https://www.linkedin.com/in/juweriahabdulraheem'

  return (
    <section
      id="contact"
      className="py-20 text-center text-white"
      style={{ backgroundColor: '#9E2A2B' }} 
    >
      <h2 className="text-4xl font-bold mb-6 text-accent">Get In Touch</h2>
      <p className="text-gray-300 mb-8">Have a project in mind or want to connect?</p>

      {/* Email Button */}
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center bg-accent text-bg px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition gap-2"
      >
        <MdEmail size={20} />
        Email Me
      </a>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  )
}
