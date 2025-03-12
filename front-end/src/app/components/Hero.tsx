import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="bg-[#ffff] container mx-auto px-20 pt-32  lg:pt-0 h-screen flex flex-col lg:flex-row items-center">
      <div className="max-w-xl mx-auto px-4  sm:px-6 lg:px-8  text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl  font-bold text-gray-900 mb-6">
          Put people first
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Fast, user-friendly and engaging - turn HR into people and culture and streamline your daily operations with your own branded app.
        </p>
        
        <div className="mt-8 flex flex-col items-center lg:items-start">
          <span className="ml-2 text-gray-700">Dive into Bodx — and start building.</span>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 justify-center lg:justify-start">
          <div>
            <p className="text-4xl font-bold text-gray-900">75.2%</p>
            <p className="text-gray-700">Average daily activity</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">~20k</p>
            <p className="text-gray-700">Average daily users</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
        {/* SVG as Image */}
        <Image

          src="/Hero1.svg"
          alt="Hero SVG"
          width={600}
          height={400}
          layout="intrinsic"
          className="object-contain "
        />
      </div>
    </div>
  );
};

export default Hero;