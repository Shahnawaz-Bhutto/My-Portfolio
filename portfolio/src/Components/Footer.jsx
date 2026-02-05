import React from 'react'
import { Github, Mail, MessageCircle } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full bg-blue-950 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-white text-2xl font-bold">
              Shahnawaz Bhutto
            </h2>
            <p className="text-slate-400 mt-2">
              Web Designer & Developer
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="flex gap-6 text-slate-400">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Shahnawaz-Bhutto"
              target="_blank"
              className="w-10 h-10 rounded-full border border-blue-700
                         flex items-center justify-center text-slate-400
                         transition-all duration-300
                         hover:bg-blue-600 hover:text-white hover:scale-110"
            >
              <Github size={20} />
            </a>

            {/* Gmail */}
            <a
              href="mailto:shahnawazbhutto000@gmail.com"
              className="w-10 h-10 rounded-full border border-blue-700
                         flex items-center justify-center text-slate-400
                         transition-all duration-300
                         hover:bg-blue-600 hover:text-white hover:scale-110"
            >
              <Mail size={20} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923555869818"
              target="_blank"
              className="w-10 h-10 rounded-full border border-blue-700
                         flex items-center justify-center text-slate-400
                         transition-all duration-300
                         hover:bg-blue-600 hover:text-white hover:scale-110"
            >
              <MessageCircle size={20} />
            </a>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-blue-800 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shahnawaz Bhutto. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
