import React, { useState, useEffect, useRef } from 'react';
import icon from './resources/accounting-woman-upper-body-svgrepo-com.svg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !navRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-blue-200 fixed z-100 w-full p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img className="w-12" src={icon} alt="bank" />
        <span className="text-blue-900 text-xl font-semibold">AFFIONG'S & ASSOCIATES</span>
      </div>
        
      <ul className="flex items-center space-x-6">
        <li>
          <a
            href="https://www.example.com"
            className="text-blue-900 mb-10 px-4 py-2 rounded transition duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative rounded hover:shadow-xl overflow-hidden group">
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                Pricing & Approach
            </button>  
          </a>
        </li>

        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="text-blue-900 rounded hover:shadow-xl transition duration-200 cursor-pointer relative overflow-hidden group"
          >
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
            Services
          </button>
          {isDropdownOpen && (
            <ul ref={dropdownRef} className="absolute left-0 bg-blue-200 rounded shadow-lg mt-2 w-48">
              <li>
                <a
                  href="https://www.example.com/Research"
                  className="text-blue-900 hover:bg-blue-300 block px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Research & Analysis
                </a>
              </li>
              <li>
                <a
                  href="https://www.example.com/app-development"
                  className="text-blue-900 hover:bg-blue-300 block px-4 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultancy
                </a>
              </li>
              <li>
                <a
                  href="https://www.example.com/seo-services"
                  className="text-blue-900 hover:bg-blue-300 block px-4 py-2"
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
            <button className="relative rounded hover:shadow-xl overflow-hidden group">
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                About
            </button>
          </a>
        </li>
      </ul>

      <button className="bg-blue-600 text-white p-2 rounded-lg cursor-pointer hover:shadow-lg hover:bg-blue-700">Book a Consultation</button>
    </nav>
  );
};

export default Navbar;
