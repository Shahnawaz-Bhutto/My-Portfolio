import React from 'react'
import image from '../assets/image/image.png'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="w-full bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">

        {/* IMAGE SIDE */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600">
            <img
              src={image}
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            About Me
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            I’m a passionate web developer who loves turning ideas into clean,
            functional, and user-friendly digital experiences.
            <br /><br />
            I enjoy exploring new technologies and continuously sharpening my
            skills to deliver better solutions.
            <br /><br />
            Web development isn’t just about writing code — it’s about solving
            real problems and bringing ideas to life.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default About
