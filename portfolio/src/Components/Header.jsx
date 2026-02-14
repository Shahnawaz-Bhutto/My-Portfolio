// Import useState for menu toggle
import { useState } from "react"

// Import animation tools from Framer Motion
import { motion, AnimatePresence } from "framer-motion"

function Header() {

  // State to control mobile menu open/close
  const [open, setOpen] = useState(false)

  // Navigation menu items
  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    // Header container (same color everywhere)
    <header className="bg-blue-950 text-white shadow-lg relative z-50">

      {/* =========================
          TOP NAVBAR SECTION
         ========================= */}
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-16 py-4">

        {/* Logo / Name */}
        <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold">
          Shahnawaz Bhutto
        </h1>

        {/* =========================
            DESKTOP MENU
           ========================= */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* =========================
            HAMBURGER MENU (Mobile)
           ========================= */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)} // Toggle open/close
        >

          {/* Top Line */}
          <motion.div
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white mb-1 rounded"
          />

          {/* Middle Line */}
          <motion.div
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white mb-1 rounded"
          />

          {/* Bottom Line */}
          <motion.div
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white rounded"
          />

        </div>
      </div>

      {/* =========================
          MOBILE MENU (Animated)
         ========================= */}
      <AnimatePresence>

        {open && (
          <motion.div
            // Animation when opening
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}

            // Animation when closing
            exit={{ y: -20, opacity: 0 }}

            transition={{ duration: 0.4, ease: "easeInOut" }}

            // SAME COLOR as header
            className="lg:hidden bg-blue-950 px-6 py-6 border-t border-blue-800"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">

              {menu.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)} // Close after click
                    className="block hover:text-blue-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}

            </ul>
          </motion.div>
        )}

      </AnimatePresence>

    </header>
  )
}

export default Header
