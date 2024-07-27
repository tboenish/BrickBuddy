import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <h1 className="text-5xl font-bold mb-8">Welcome to BrickBuddy</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        BrickBuddy helps you manage your Lego collection with ease. Keep track of your sets, find pieces, and get inspired to build amazing creations.
      </p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded hover:bg-gray-400 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
