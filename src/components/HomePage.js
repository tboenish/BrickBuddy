import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
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
        <div className='overflow-x-auto whitespace-nowrap'>
            <Link to="/theme/architecture">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Architecture</h3>
            </div>
            </Link>

            <Link to="/theme/batman">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Batman</h3>
            </div>
            </Link>

            <Link to="/theme/brickheadz">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>BrickHeadz</h3>
            </div>
            </Link>

            <Link to="/theme/city">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>City</h3>
            </div>
            </Link>

            <Link to="/theme/classic">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Classic</h3>
            </div>
            </Link>

            <Link to="/theme/creator-3-in-1">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Creator: 3 in 1</h3>
            </div>
            </Link>

            <Link to="/theme/creator-expert">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Creator: Expert</h3>
            </div>
            </Link>

            <Link to="/theme/super-heroes-dc">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>DC</h3>
            </div>
            </Link>

            <Link to="/theme/despicable-me-4">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Despicable Me 4</h3>
            </div>
            </Link>

            <Link to="/theme/disney">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Disney</h3>
            </div>
            </Link>

            <Link to="/theme/dots">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Dots</h3>
            </div>
            </Link>

            <Link to="/theme/duplo">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Duplo</h3>
            </div>
            </Link>

            <Link to="/theme/friends">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Friends</h3>
            </div>
            </Link>

            <Link to="/theme/harry-potter">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Harry Potter</h3>
            </div>
            </Link>

            <Link to="/theme/ideas">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Ideas</h3>
            </div>
            </Link>

            <Link to="/theme/jurassic-world">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Jurassic World</h3>
            </div>
            </Link>

            <Link to="/theme/animal-crossing">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Animal Crossing</h3>
            </div>
            </Link>

            <Link to="/theme/lego-art">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Lego: Art</h3>
            </div>
            </Link>

            <Link to="/theme/avatar">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Avatar</h3>
            </div>
            </Link>

            <Link to="/theme/dreamzzz">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Dreamzzz</h3>
            </div>
            </Link>

            <Link to="/theme/fortnite">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Fortnite</h3>
            </div>
            </Link>

            <Link to="/theme/gabbys-dollhouse">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Gabby's Dollhouse</h3>
            </div>
            </Link>

            <Link to="/theme/icons">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Lego: Icons</h3>
            </div>
            </Link>

            <Link to="/theme/indiana-jones">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Indiana Jones</h3>
            </div>
            </Link>

            <Link to="/theme/super-mario">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Super Mario</h3>
            </div>
            </Link>

            <Link to="/theme/the-legend-of-zelda">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>The Legend of Zelda</h3>
            </div>
            </Link>

            <Link to="/theme/the-lord-of-the-rings">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>The Lord of The Rings</h3>
            </div>
            </Link>

            <Link to="/theme/marvel">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Marvel</h3>
            </div>
            </Link>

            <Link to="/theme/minecraft">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Minecraft</h3>
            </div>
            </Link>

            <Link to="/theme/monkie-kid">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Monkie Kid</h3>
            </div>
            </Link>

            <Link to="/theme/ninjago">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Ninjago</h3>
            </div>
            </Link>

            <Link to="/theme/powered-up">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Powered Up</h3>
            </div>
            </Link>

            <Link to="/theme/sonic-the-hedgehog">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Sonic The Hedgehog</h3>
            </div>
            </Link>

            <Link to="/theme/speed-champions">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Speed Champions</h3>
            </div>
            </Link>

            <Link to="/theme/spider-man">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Spider Man</h3>
            </div>
            </Link>

            <Link to="/theme/star-wars">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Star Wars</h3>
            </div>
            </Link>

            <Link to="/theme/technic">
            <div className='inline-block bg-gray-600 text-white p-4 rounded-lg m-2 hover:bg-black'>
                <h3 className='text-xl font-semibold'>Technic</h3>
            </div>
            </Link>
                

        </div>


    </div>
    </>
  );
};

export default HomePage;
