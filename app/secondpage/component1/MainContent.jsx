import React from 'react';
import { MapPin, Calendar } from 'lucide-react';


export default function MainContent() {
  return (
    <div className='flex flex-col items-start ml-4 md:ml-20 p-4'>
      <h1 className='text-red-700 text-2xl md:text-4xl font-bold mb-4'>Adventure & Wildlife Expo</h1>
      <div className='flex flex-col md:flex-row w-full mb-4'>
        <div className='flex flex-col items-start mb-4 md:mb-0 md:w-1/2'>
          <span className='font-semibold'><Calendar/> When?</span>
          <span className='ml-2'>15th July, 2024</span>
        </div>
        <div className='flex flex-col items-start md:w-1/2'>
          <span className='font-semibold'><MapPin /> Where?</span>
          <span className='ml-2'>Zysk Technologies, Bangalore</span>
        </div>
      </div>
    </div>
  );
}
