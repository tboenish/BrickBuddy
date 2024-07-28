import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
            <span className='text-red-600'>Brick</span>
            <span className='text-yellow-400'>Buddy</span>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/inventory" className="hover:underline">Inventory</Link></li>
            <li><Link to="/builder" className="hover:underline">Builder</Link></li>
            <li><Link to="/piece-finder" className="hover:underline">Piece Finder</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
