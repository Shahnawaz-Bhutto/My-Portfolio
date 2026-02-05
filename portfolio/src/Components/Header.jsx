import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-16 py-4">

        {/* LOGO */}
        <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold">
          Shahnawaz Bhutto
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Service</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Skills</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden lg:block px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md">
          Contact
        </button>

        {/* HAMBURGER */}
        <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-7 h-1 bg-white mb-1"></div>
          <div className="w-7 h-1 bg-white mb-1"></div>
          <div className="w-7 h-1 bg-white"></div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-blue-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Service</li>
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li className="hover:text-blue-400 cursor-pointer">Skills</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>

          <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md">
            Contact
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
