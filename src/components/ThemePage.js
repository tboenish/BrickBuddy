//Import React and the useEffect and useState hooks
import React, { useEffect, useState } from 'react';
//Import for accessing the url params
import { useParams } from 'react-router-dom';
//Import the LegoCard component which will used to display the sets one by one filtered by theme
import LegoCard from './LegoCard';
//Helper function to ensure all theme names are cleaned before being sent to the backend
import { formatNames } from '../utility/formatNames';

const ThemePage = () => {
  const { themeName } = useParams();//Get the themename param from the url
  const [legoSets, setLegoSets] = useState([]);//useState for the list of Lego Sets
//useEffect function that changes depending on the theme that is passed in the URL allowing this to work for any valid theme name
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Given the theme, try and fetch those sets
        const response = await fetch(`/api/legosets/${themeName}/`);
        const data = await response.json();//Parse the json
        setLegoSets(data.results || data);//Update the state with either the results field or the response
      } catch (error) {
        console.error("Error retrieving Lego sets:", error);
      }
    };

    fetchData();//Call the async function
  }, [themeName]);//Whenever themename changes, this function will run again

  return (//Return a card for each set that is returned from the API call
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4'>
      <h1 className='text-5xl font-bold mb-8 text-white'>{formatNames(themeName)} Sets</h1>
      <div className='flex flex-wrap justify-center w-full'>
        {legoSets.length > 0 ? (
          legoSets.map(set => (//Iterate over the array and genearte a lego card for that set
            <LegoCard key={set.set_num} set={set} />
          ))
        ) : (
          <p className='text-lg text-gray-200'>Loading.....</p>
        )}
      </div>
    </div>
  );
};

export default ThemePage;
