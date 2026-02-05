import React from 'react'
import image2 from '../assets/image/image2.png'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="w-full min-h-screen bg-blue-950 flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-10 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-500 font-bold text-xl sm:text-2xl">
            Hello Everyone, I'm
          </h2>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
            Shahnawaz
          </h1>

          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            Bhutto
          </h1>

          <h2 className="text-slate-400 text-lg sm:text-xl mt-4">
            Web Designer and Developer
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <button className="w-36 h-12 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white text-lg">
              My CV
            </button>
            <button className="w-36 h-12 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white text-lg">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-blue-600 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image2}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  )
}

export default Home
