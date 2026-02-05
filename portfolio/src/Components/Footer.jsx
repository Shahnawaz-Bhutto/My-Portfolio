import React from 'react'
import { Github, Mail, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-black border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-2xl font-bold">
              Shahnawaz Bhutto
            </h2>
            <p className="text-slate-400 mt-2">
              Web Designer & Developer
            </p>
          </motion.div>

          {/* CENTER LINKS */}
          <motion.div
            className="flex gap-6 text-slate-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </motion.div>

          {/* RIGHT SOCIAL ICONS */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/Shahnawaz-Bhutto"
              target="_blank"
              aria-label="GitHub"
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
              aria-label="Email"
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
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-blue-700
                         flex items-center justify-center text-slate-400
                         transition-all duration-300
                         hover:bg-blue-600 hover:text-white hover:scale-110"
            >
              <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          className="mt-10 border-t border-blue-800 pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shahnawaz Bhutto. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
