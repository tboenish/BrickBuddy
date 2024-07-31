import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LegoCard from './LegoCard';

const ThemePage = () => {
  const { themeName } = useParams();
  const [legoSets, setLegoSets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/legosets/${themeName}/`);
        const data = await response.json();
        setLegoSets(data.results || data);
      } catch (error) {
        console.error("Error retrieving Lego sets:", error);
      }
    };

    fetchData();
  }, [themeName]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4'>
      <h1 className='text-5xl font-bold mb-8 text-white'>{themeName} Sets</h1>
      <div className='flex flex-wrap justify-center w-full'>
        {legoSets.length > 0 ? (
          legoSets.map(set => (
            <LegoCard key={set.set_num} set={set} />
          ))
        ) : (
          <p className='text-lg text-gray-200'>No sets found for {themeName}</p>
        )}
      </div>
    </div>
  );
};

export default ThemePage;
