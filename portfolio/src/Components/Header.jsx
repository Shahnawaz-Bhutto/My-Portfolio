import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  const menu = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Service', link: '#service' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <header className="bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-16 py-4">

        <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold">
          Shahnawaz Bhutto
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-blue-400">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="lg:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-7 h-1 bg-white mb-1"></div>
          <div className="w-7 h-1 bg-white mb-1"></div>
          <div className="w-7 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-blue-900 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
