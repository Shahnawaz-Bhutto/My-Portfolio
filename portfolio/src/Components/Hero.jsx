import React from 'react'
import image from '../assets/image/image2.png' // change if needed
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-slate-950 flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* TEXT SIDE */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-blue-500 text-lg sm:text-xl font-semibold">
            Hi, I’m
          </h2>

          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Shahnawaz Bhutto
          </h1>

          <h3 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-slate-300">
            Frontend Web Developer
          </h3>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            I build modern, responsive, and user-friendly websites using
            React, Tailwind CSS, and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white transition rounded-md font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
            <img
              src={image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
