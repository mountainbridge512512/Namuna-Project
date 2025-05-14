import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.jpg'; // Ensure this path is correct

const Navbar = () => {
  const navItems = ['Home', 'About Us', 'Our Products', 'Contact Us', 'Work With Us', 'Media and Article'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-14 transition-transform duration-300 hover:scale-110"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black font-medium">
          {navItems.map(item => (
            <li key={item}>
              <NavLink
                to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                className={({ isActive }) =>
                  `${isActive ? 'text-green-500 font-semibold' : 'hover:text-green-500'} 
                  transition-transform duration-200 hover:scale-105 inline-block`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md mt-4 rounded-lg shadow-lg px-4 py-3 space-y-3">
          {navItems.map(item => (
            <NavLink
              key={item}
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${isActive ? 'text-green-500 font-semibold' : 'text-black hover:text-green-500'} 
                block text-base transition-all duration-200`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
