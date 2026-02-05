import React from "react";
import {
  Code2,
  ServerCog,
  Smartphone,
  CloudUpload,
} from "lucide-react";

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

        {/* Card 1 */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Code2 className="text-blue-500 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Front-End Development
          </h3>
          <p className="text-slate-400">
            Building modern, interactive, and user-friendly interfaces using
            React.js, HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <ServerCog className="text-blue-500 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Full-Stack Development
          </h3>
          <p className="text-slate-400">
            Creating complete web applications with Node.js, databases, APIs,
            and dynamic functionality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Smartphone className="text-blue-500 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Responsive Design
          </h3>
          <p className="text-slate-400">
            Designing websites that look perfect and work smoothly on mobile,
            tablet, and desktop devices.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-blue-600/30 hover:-translate-y-2 transition duration-300">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <CloudUpload className="text-blue-500 w-10 h-10" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Deployment & Hosting Setup
          </h3>
          <p className="text-slate-400">
            Deploying websites to live servers with proper hosting, domain setup,
            and performance optimization.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;
