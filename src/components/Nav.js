import React from 'react';
import { Link } from 'react-router-dom';
//Header component that is shared across pages
const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
            <span className='text-red-600'>
              <Link to ="/">Brick</Link>
            </span>
            <span className='text-yellow-400'>
              <Link to ="/">Buddy</Link>
            </span>
        </h1>
        <nav>
          <ul className="flex space-x-4">{/*links*/}
            <li><Link to="/" className='hover:underline'>Home</Link></li>
            <li><Link to="/login" className='hover:underline'>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
