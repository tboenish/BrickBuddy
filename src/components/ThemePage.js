import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage = () => {
  const { themeName } = useParams();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4'>
      <h1 className='text-5xl font-bold mb-8 text-white'>{themeName} Sets</h1>
      <p className='text-lg text-gray-200 mb-8 text-center max-w-2xl'>
        Here are the {themeName} sets.
      </p>
      {/* Add logic to fetch and display the sets based on the themeName */}
    </div>
  );
};

export default ThemePage;
