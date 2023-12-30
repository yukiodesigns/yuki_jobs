import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/hiring.jpg")', objectFit: 'cover' }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Yuki Jobs</h1>
        <p className="text-lg mb-8 text-center">Explore and discover amazing opportunities.</p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto flex items-center mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 rounded-l-md focus:outline-none focus:border-blue-500 border-t border-b border-l text-gray-800 border-gray-300 bg-white"
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded-r-md hover:bg-green-700 focus:outline-none">
            Search
          </button>
        </div>

        {/* Call to Action Button
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
