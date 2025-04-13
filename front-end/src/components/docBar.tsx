"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Search } from "lucide-react";

// Updated NAV_LINKS to match Aceternity UI
const NAV_LINKS = [
  { name: 'Components', href: '/components' },
  { name: 'Templates', href: '/templates' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Showcase', href: '/showcase' },
];

const LANGUAGE_OPTIONS = [
  { name: 'English', code: 'en' },
  { name: 'Spanish', code: 'es' },
  { name: 'French', code: 'fr' },
];

// Social links
const SOCIAL_LINKS = [
  { name: 'Discord', href: 'https://discord.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
];

const DocBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isscrolled, setIsscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsscrolled(true);
      } else {
        setIsscrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${isscrolled ? 'fixed border top-0 py-3 left-0 w-full z-50 bg-gray-50  transition-all duration-300' : 'fixed border top-0 py-3 left-0 w-full z-50 bg-gray-50 transition-all duration-300'}`}>
      <div className=" md:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-[180px] items-center">

            <Link href="/" className="flex items-center space-x-2">
              <span className="text-black font-bold text-xl">BoDx</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="text-gray-900 hover:text-gray-500 px-3 py-2 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>


          {/* Right side - Social links and Search */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-gray-500 text-sm"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button className="text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            </button>
            
            {/* Search */}
            <div className="relative">
              <div className="flex items-center bg-gray-900 rounded-2xl px-3 py-3 border border-gray-700">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search Components" 
                  className="bg-transparent text-sm text-gray-300 outline-none w-40"
                />
                <div className="ml-2 px-1.5 py-0.5 rounded bg-gray-800 text-xs text-gray-400">⌘K</div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Search for mobile */}
            <div className="relative">
              <div className="flex items-center bg-gray-900 rounded-md px-2 py-1 border border-gray-700">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="h-5 w-5" />
              ) : (
                <FaTimes className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Social links in mobile menu */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-5 space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white block text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Search in mobile menu */}
            <div className="px-5 pt-2">
              <div className="flex items-center bg-gray-900 rounded-md px-3 py-2 border border-gray-700">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search Components" 
                  className="bg-transparent text-sm text-gray-300 outline-none w-full"
                />
              </div>
            </div>
            
            {/* Language selector in mobile menu */}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <select className="w-full bg-gray-900 text-sm text-gray-300 p-2 rounded-md border border-gray-700 focus:outline-none">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DocBar;