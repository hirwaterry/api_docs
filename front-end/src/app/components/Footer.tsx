import React from 'react';
import Image from 'next/image'; // Import Image for logo
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import social icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181818] text-white min-h-screen py-8 px-4 flex flex-col justify-between">
      <div className="container mx-auto">
        {/* Logo and Hashtag */}
        <div className="text-center h-40 items-center mb-8">
          {/* <Image src="/spylt-logo.png" alt="bodx Logo" width={100} height={50} className="mx-auto" /> Replace with your logo path and dimensions */}
          <h1 className="text-4xl font-bold pt-20 bebas ">#BODX</h1>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-2xl"><FaYoutube /></a>
          <a href="#" className="text-2xl"><FaInstagram /></a>
          <a href="#" className="text-2xl"><FaTiktok /></a>
        </div>

        {/* Navigation and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <div>
              <h3 className="font-semibold mb-2">BODX Flavors</h3>
              <ul className="text-sm">
                <li>Chug Club</li>
                <li>Student Marketing</li>
                <li>Dairy Dealers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="text-sm">
                <li>Contacts</li>
                <li>Tasty Talk</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm mb-2">
              Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white border border-gray-700 rounded-l-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <button className="bg-white text-gray-900 py-2 px-4 rounded-r-md">
                →
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[200px] font-bold pt-20 bebas uppercase ">#BODX on the top wlh!</h1>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="text-center md:text-left text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <p>Copyright © 2025 bodx - All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;