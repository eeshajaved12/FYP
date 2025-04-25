import React from 'react'

function NAVBAR() {
  return (
    <>
      <nav className="bg-indigo-700 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      {/* Left side (Logo + Desktop Nav) */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <i className="fas fa-user-graduate text-2xl mr-2 text-indigo-200" />
          <span className="text-xl font-bold">FYP<span className="text-indigo-200">Finder</span></span>
        </div>
        {/* Primary Desktop Nav */}
        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-800 text-white">
            <i className="fas fa-home mr-1" /> Home
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition">
            <i className="fas fa-search mr-1" /> Find Supervisors
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition">
            <i className="fas fa-book mr-1" /> Projects
          </a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600 hover:text-white transition">
            <i className="fas fa-question-circle mr-1" /> Guidelines
          </a>
        </div>
      </div>
      {/* Right side (User + Mobile button) */}
      <div className="flex items-center">
        {/* User dropdown (desktop) */}
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="ml-3 relative">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <i className="fas fa-user text-sm" />
              </div>
              <span className="text-sm font-medium">John Doe</span>
              <i className="fas fa-chevron-down text-xs" />
            </div>
            {/* Dropdown menu (hidden by default) */}
            <div className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i className="fas fa-user-circle mr-2" /> Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i className="fas fa-cog mr-2" /> Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i className="fas fa-sign-out-alt mr-2" /> Sign out
              </a>
            </div>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
            <span className="sr-only">Open main menu</span>
            <i className="fas fa-bars text-xl" id="menu-icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Mobile menu (hidden by default) */}
  <div className="md:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-800 text-white">
        <i className="fas fa-home mr-2" /> Home
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
        <i className="fas fa-search mr-2" /> Find Supervisors
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
        <i className="fas fa-book mr-2" /> Projects
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
        <i className="fas fa-question-circle mr-2" /> Guidelines
      </a>
      <div className="border-t border-indigo-800 pt-4 pb-3">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
              <i className="fas fa-user text-lg" />
            </div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium">John Doe</div>
            <div className="text-sm font-medium text-indigo-200">Student</div>
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
            <i className="fas fa-user-circle mr-2" /> Profile
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
            <i className="fas fa-cog mr-2" /> Settings
          </a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 hover:text-white">
            <i className="fas fa-sign-out-alt mr-2" /> Sign out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default NAVBAR
