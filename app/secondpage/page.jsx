import React from 'react';
import Header from '../../app/users/component/Header';
import MainContent from '../secondpage/component1/MainContent';
import QrCodeSection from '../secondpage/component1/QrCodeSection';

export default function Page() {
  return (
    <div className='min-h-screen bg-[#FAF3EF] flex flex-col'>
      <Header />
      <div className='flex flex-col md:flex-row flex-grow'>
        <div className='flex-grow flex items-center p-4'>
          <MainContent />
        </div>
        <div className='flex-none w-full md:w-[50%]'>
          <QrCodeSection />
        </div>
      </div>
    </div>
  );
}
