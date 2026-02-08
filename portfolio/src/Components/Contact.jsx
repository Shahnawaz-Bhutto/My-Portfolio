import React from "react";
import {
  Mail,
  Phone,
  Headphones,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Social links (pure JS – safe for .jsx)
const SOCIAL_LINKS = [
  {
    icon: MessageCircle,
    link: "https://wa.me/923555869818", // WhatsApp
  },
  {
    icon: Github,
    link: "https://github.com/Shahnawaz-Bhutto",
  },
  {
    icon: Linkedin,
    link: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Mail,
    link: "mailto:shahnawazbhutto000@gmail.com", // Gmail
  },
];

function Contact() {
  // DOM-based submit handler (NO TypeScript, JSX-safe)
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    console.log({ name, email, message });
    alert("Message sent successfully!");

    const form = document.getElementById("contactForm");
    if (form) form.reset();
  };

  return (
    <div
      id="Contact"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">Send a Message</h2>

          <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-300 text-sm">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="text-white space-y-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-500">Contact Information</h2>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Mail className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-300">shahnawazbhutto000@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Phone className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-300">+923555869818</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Headphones className="text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold">Support</h4>
              <p className="text-gray-300">24/7 Customer Support</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition cursor-pointer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
