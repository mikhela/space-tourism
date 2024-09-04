import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function SpNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading '/'
    setActiveLink(path || 'home'); // Default to 'home' if path is empty
  }, [location]);

  return (
    <div className="w-full fixed" style={{ zIndex: '999' }}>
      <div className="flex justify-between text-white p-4 relative">
        <span
          className={`relative ${isMenuOpen ? 'top-0 left-0' : 'md:top-8 md:left-10'} text-2xl bg-white w-10 h-10 text-black rounded-full flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>

        <div className="border border-mainColor w-[80%] fixed left-[140px] top-16 hidden md:block"></div>

        <div
          className={`left-content-navbarnav z-50 md:flex p-5 text-lg font-semibold lg:px-20 xl:px-32 py-10 ${
            isMenuOpen ? 'fixed w-[75%] h-[100vh] right-0 top-0' : 'hidden'
          }`}
        >
          <FontAwesomeIcon onClick={toggleMenu} icon={faTimes} className={`fixed right-7 top-5 text-3xl ${!isMenuOpen ? 'hidden' : ''}`} />
          <div className={`innerleft gap-12 ${isMenuOpen ? 'fixed left-10' : 'flex'}`}>
            <Link
              to="/"
              className={`block ${activeLink === 'home' ? 'border-b-2 border-white' : ''} py-2`}
              onClick={() => setActiveLink('home')}
            >
              <span className="block font-extrabold">00</span>
              <span className="block">HOME</span>
            </Link>
            <Link
              to="/Destination"
              className={`block ${activeLink === 'destination' ? 'border-b-2 border-white' : ''} py-2`}
              onClick={() => setActiveLink('destination')}
            >
              <span className="block font-extrabold">01</span>
              <span className="block">DESTINATION</span>
            </Link>
            <Link
              to="/Crew"
              className={`block ${activeLink === 'crew' ? 'border-b-2 border-white' : ''} py-2`}
              onClick={() => setActiveLink('crew')}
            >
              <span className="block font-extrabold">02</span>
              <span className="block">CREW</span>
            </Link>
            <Link
              to="/Technology"
              className={`block ${activeLink === 'technology' ? 'border-b-2 border-white' : ''} py-2`}
              onClick={() => setActiveLink('technology')}
            >
              <span className="block font-extrabold">03</span>
              <span className="block">TECHNOLOGY</span>
            </Link>
          </div>
        </div>

        <div className="md:hidden items-center">
          <button onClick={toggleMenu} className={`w-10 text-3xl focus:outline-none ${isMenuOpen ? 'hidden' : ''}`}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
