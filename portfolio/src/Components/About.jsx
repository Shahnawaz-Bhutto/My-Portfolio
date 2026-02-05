import React from 'react'
import image from '../assets/image/image.png'

function About() {
  return (
    <section className="w-full bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">

        {/* IMAGE SIDE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600">
            <img
              src={image}
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            About Me
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            I’m a passionate web developer who loves turning ideas into clean,
            functional, and user-friendly digital experiences. With a strong focus
            on modern design, performance, and scalability, I build websites and
            applications that look great and work seamlessly across devices.
            <br /><br />
            I enjoy exploring new technologies and continuously sharpening my
            skills to deliver better solutions. My core skill set includes HTML,
            CSS, JavaScript, React.js, Node.js, and Bootstrap, which I use to
            craft responsive interfaces and efficient back-end systems.
            <br /><br />
            For me, web development isn’t just about writing code — it’s about
            solving real problems and bringing creative ideas to life through
            technology.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
