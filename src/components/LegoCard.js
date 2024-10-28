import React from 'react';
//LegoCard component that displays the below information about a Lego Set in the format defined below
const LegoCard = ({ set }) => {
  return (
    <div className='bg-gray-700 text-white p-4 rounded-lg m-2 flex flex-col items-center w-1/5'>
        <div className=' w-full h-64 flex items-center justify-center'>
        <img src={set.set_img_url} alt={set.name} className='max-w-full max-h-full object-contain' />

        </div>
      
      <h3 className='text-xl font-semibold text-center mt-4'>{set.name}</h3>
      <p className='text-center'>Year: {set.year}</p>
      <p className='text-center'>Number of Parts: {set.num_parts}</p>
      <p className='text-center'>Set Number: {set.set_num}</p>
    </div>
  );
};

export default LegoCard;
