import React from "react";
import { Code2, ServerCog, Smartphone, CloudUpload } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code2 className="text-blue-500 w-10 h-10" />,
    title: "Front-End Development",
    desc: "Building modern, interactive, and user-friendly interfaces using React.js, HTML, CSS, and JavaScript.",
  },
  {
    icon: <ServerCog className="text-blue-500 w-10 h-10" />,
    title: "Full-Stack Development",
    desc: "Creating complete web applications with Node.js, databases, APIs, and dynamic functionality.",
  },
  {
    icon: <Smartphone className="text-blue-500 w-10 h-10" />,
    title: "Responsive Design",
    desc: "Designing websites that look perfect and work smoothly on mobile, tablet, and desktop devices.",
  },
  {
    icon: <CloudUpload className="text-blue-500 w-10 h-10" />,
    title: "Deployment & Hosting Setup",
    desc: "Deploying websites to live servers with proper hosting, domain setup, and performance optimization.",
  },
];

function Services() {
  return (
    <section className="w-full bg-slate-900 py-20 px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">My Services</h2>
        <p className="text-slate-400 mt-4 text-lg">
          Professional solutions to build modern, fast, and scalable web applications
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
