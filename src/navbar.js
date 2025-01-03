import React, { useState, useEffect, useRef } from 'react';
import icon from './resources/accounting-woman-upper-body-svgrepo-com.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu toggle
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-blue-200 fixed z-50 w-full p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="w-12" src={icon} alt="bank" />

        {/* Display A&A on mobile and AFFIONG'S & ASSOCIATES on larger screens */}
        <span className="text-blue-900 text-xl font-semibold md:hidden">A&A</span> {/* A&A for mobile */}
        <span className="text-blue-900 text-xl font-semibold hidden md:block">AFFIONG'S & ASSOCIATES</span> {/* Full text for larger screens */}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-blue-900 hover:text-blue-700 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main Menu */}
      <ul
        className={`md:flex items-center space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-20 left-0 w-full md:w-auto bg-blue-200 md:bg-transparent shadow-lg md:shadow-none`}
      >
        <li>
          <a
            href="https://www.example.com"
            className="text-blue-900 mb-10 ml-2 px-4 py-2 rounded transition duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative rounded overflow-hidden">
              Pricing & Approach
            </button>
          </a>
        </li>

        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="text-blue-900 rounded transition duration-200 cursor-pointer relative overflow-hidden"
          >
            Services
          </button>

          {/* Mobile Dropdown Content */}
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute left-0 bg-blue-200 rounded shadow-lg mt-2 w-full py-2 z-50"
            >
              <li>
                <a
                  href="https://www.example.com/Research"
                  className="text-blue-900 hover:bg-blue-300 block px-6 py-4 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research & Analysis
                </a>
              </li>
              <li>
                <a
                  href="https://www.example.com/app-development"
                  className="text-blue-900 hover:bg-blue-300 block px-6 py-4 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="https://www.example.com/seo-services"
                  className="text-blue-900 hover:bg-blue-300 block px-6 py-4 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Budgeting & Auditing
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            href="https://www.example.com/about"
            className="text-blue-900 transition duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative rounded overflow-hidden">
              About
            </button>
          </a>
        </li>
      </ul>

      {/* Book a Consultation Button (Hidden on Mobile) */}
      <button className="hidden md:block bg-blue-600 text-white p-2 rounded-lg cursor-pointer hover:shadow-lg hover:bg-blue-700">
        Book a Consultation
      </button>
    </nav>
  );
};

export default Navbar;
