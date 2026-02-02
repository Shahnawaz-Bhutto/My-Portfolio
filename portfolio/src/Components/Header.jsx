import React from 'react'

function Header() {
  return (
    <>
    {/* Header Section */}
    <header>
      <div className="w-screen h-20 bg-gray-900 flex items-center px-8 text-center justify-center">
        <h1 className="text-white text-2xl font-bold">Shahnawaz Bhutto</h1>
        <ul className="flex items-center justify-center ">
        <li className="text-white">Home</li>
        <li className="text-white">About</li>
        <li className="text-white">Projects</li>
        <li className="text-white">Skills</li>
        <li className="text-white">Contact</li>
        </ul>
      </div>
    </header>
    </>
  )
}

export default Header
