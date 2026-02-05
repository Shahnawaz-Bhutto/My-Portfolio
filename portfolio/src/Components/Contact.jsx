import React from "react";
import { Mail, Phone, Headphones, Facebook, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Contact Form */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">
            Send a Message
          </h2>

          <div className="space-y-5">
            <div>
              <label className="text-gray-300 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium">
              Send Message
            </button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-white space-y-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500">
            Contact Information
          </h2>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Mail className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-300">shahnawazbhutto000@gmail.com</p>
              <p className="text-blue-500 text-sm">Send an email directly</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Phone className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-300">+923555869818</p>
              <p className="text-blue-500 text-sm">Call me anytime</p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Headphones className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Support</h4>
              <p className="text-gray-300">24/7 Customer Support</p>
              <p className="text-sm text-gray-400">
                Fast response times for all client inquiries
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {[Facebook, Github, Linkedin, Instagram].map((Icon, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
