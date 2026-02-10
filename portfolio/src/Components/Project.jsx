import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Simple Calculator",
    description:
      "A responsive calculator built using HTML, CSS, and JavaScript that performs all basic arithmetic operations with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "./src/assets/image/link/calc.html",
    image: "./src/assets/image/calc.png",
  },
  {
    title: "Registration Form",
    description:
      "A fully validated student registration form with input validation and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "./src/assets/image/link/index.html",
    image: "./src/assets/image/form.png",
  },
  {
    title: "Tour Website",
    description:
      "A multi-page responsive tour and travel website with beautiful layout and navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "",
    image: "./src/assets/image/tour.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 text-white px-6 py-20"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-3">My Projects</h2>
        <p className="text-slate-400">
          Here are some of the projects I have built recently
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.4)",
            }}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-blue-500 transition-all"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-slate-400 mb-4">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
