import React from 'react';
import { Link } from 'react-router-dom' //Link component to navigate between pages

//Array for holding the themes.
const themes = [
    'architecture', 'batman', 'brickheadz', 'city', 'classic',
    'creator-3-in-1', 'creator-expert', 'super-heroes-dc', 'despicable-me-4', 
    'disney', 'dots', 'duplo', 'friends', 'harry-potter', 'ideas',
    'jurassic-world', 'animal-crossing', 'lego-art', 'avatar', 'dreamzzz', 
    'fortnite', 'gabbys-dollhouse', 'icons', 'indiana-jones', 'super-mario',
    'the-legend-of-zelda', 'the-lord-of-the-rings', 'marvel', 'minecraft',
    'monkie-kid', 'ninjago', 'powered-up', 'sonic-the-hedgehog', 'speed-champions',
    'spider-man', 'star-wars', 'technic'
  ];
  

const HomePage = () => {
  return (
    <>
    {/*Container for welcome message*/}
    <div className='flex flex-col items-center justify-center max-h-px-100 bg-gray-800 p-4 max-w-90 border-red-700 border-4 rounded-lg max-w-4xl mx-auto'>
      <h1 className='text-5xl font-bold mb-8 text-white'>Welcome to BrickBuddy</h1>
      <p className='text-lg text-gray-200 mb-8 text-center max-w-2xl'>
        BrickBuddy helps you manage your Lego collection with ease. Keep track of your owned/wanted sets and find pieces and new sets.
      </p>
      
    </div>

    <br />

    <div className='w-full bg-gray-800  p-8 rounded-lg border-yellow-400 border-4 max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center text-white'>Find Sets by Theme</h2>
        <p className='text-lg text-gray-200 mb-8 text-center'>Browse through our catalog by your favorite theme</p>
        
        {/* Scrolling container for theme buttons */}
        <div className='overflow-x-auto whitespace-nowrap'>
          {/* Loop through each theme and create a button for it */}
          {themes.map((theme) => (
            <Link key={theme} to={`/theme/${theme}`}>
              <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold capitalize'>
                  {theme.replace(/-/g, ' ')}
                </h3>
              </div>
            </Link>
          ))}
        </div>

    </div>
    </>
  );
};

export default HomePage;
