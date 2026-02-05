import React from "react";
import {
  FileCode,
  Palette,
  Braces,
  Layout,
  Wind,
  Server,
  Atom,
} from "lucide-react";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FileCode size={28} /> },
    { name: "CSS", icon: <Palette size={28} /> },
    { name: "JavaScript", icon: <Braces size={28} /> },
    { name: "Bootstrap", icon: <Layout size={28} /> },
    { name: "Tailwind CSS", icon: <Wind size={28} /> },
    { name: "Node.js", icon: <Server size={28} /> },
    { name: "React JS", icon: <Atom size={28} /> },
    { name: "Python", icon: <Server size={28} /> }, // Added skill
  ];

  return (
    <section className="bg-slate-900 py-20 px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
        <p className="text-slate-400 mt-4 text-lg">
          Technologies and tools I use to build modern web applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300"
          >
            <div className="p-4 bg-blue-600/20 rounded-full text-blue-500 mb-4">
              {skill.icon}
            </div>
            <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
