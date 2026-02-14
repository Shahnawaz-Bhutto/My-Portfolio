// Import React hook for state management
import { useState } from "react"

// Import animation tools from Framer Motion
// motion → used to animate elements
// AnimatePresence → allows exit animation when component disappears
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

function Header() {

  // State to control mobile menu open/close
  const [open, setOpen] = useState(false)

  // Navigation menu items (array of objects)
  // Each object contains name (text) and link (section ID)
  const menu = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ]

  return (

    // Header container
    // relative & z-50 ensures it stays above other elements
    <header className="bg-blue-950 text-white shadow-lg relative z-50">

      {/* Top Navbar Section */}
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <h1 className="text-blue-500 text-2xl font-bold">
          Shahnawaz Bhutto
        </h1>

        {/* =========================
            HAMBURGER MENU BUTTON
           ========================= */}

        {/* This button is visible only on small screens (lg:hidden) */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)} // Toggle menu open/close
        >

          {/* Top Line */}
          {/* When open → rotate 45° and move down */}
          <motion.div
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white mb-1 rounded"
          />

          {/* Middle Line */}
          {/* When open → disappear (opacity 0) */}
          <motion.div
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white mb-1 rounded"
          />

          {/* Bottom Line */}
          {/* When open → rotate -45° and move up */}
          <motion.div
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-7 h-1 bg-white rounded"
          />

        </div>
      </div>

      {/* =========================
         MOBILE MENU SECTION
         ========================= */}

      {/* AnimatePresence allows exit animation when closing */}
      <AnimatePresence>

        {/* Show menu only if open is true */}
        {open && (

          // Animated dropdown container
          <motion.div

            // Starting state (before appearing)
            initial={{ y: -20, opacity: 0 }}

            // Animation when appearing
            animate={{ y: 0, opacity: 1 }}

            // Animation when disappearing
            exit={{ y: -20, opacity: 0 }}

            // Animation timing
            transition={{ duration: 0.4, ease: "easeInOut" }}

            className="lg:hidden bg-blue-900 px-6 py-6"
          >

            {/* Menu list */}
            <ul className="flex flex-col gap-6 text-lg font-medium">

              {/* Loop through menu array */}
              {menu.map((item, index) => (

                // Each item has its own animation
                <motion.li
                  key={item.name}

                  // Start slightly left and invisible
                  initial={{ x: -30, opacity: 0 }}

                  // Animate to normal position
                  animate={{ x: 0, opacity: 1 }}

                  // Delay based on index → creates stagger effect
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >

                  {/* Navigation link */}
                  <a
                    href={item.link}

                    // Close menu when clicking any link
                    onClick={() => setOpen(false)}

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
