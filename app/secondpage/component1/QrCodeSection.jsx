import React from 'react';
import Image from 'next/image';

export default function QrCodeSection() {
  return (
    <div className='relative w-full h-[600px] flex items-center justify-end'>
      {/* Laptop Image Container */}
      <div className='relative flex items-center justify-center w-[80%] h-full'>
        <div className='relative w-[600px] h-[400px]'>
          <Image
            className='object-contain'
            src="/laptop.png"
            alt='Laptop'
            layout='fill'
            objectFit='contain'
          />
        </div>
        {/* QR Code and Text */}
        <div className='absolute flex flex-col items-center justify-center top-1/4 left-1/4'>
          <div className='relative w-[150px] h-[150px]'>
            <Image
              src="/image-15.png"
              alt='QR Code'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='text-center text-red-700 mt-4'>
            <h1 className='text-lg font-bold'>Scan this QR to Register</h1>
          </div>
          <div className='text-center mt-4'>
            <p>If QR code doesn't work, please visit the link below</p>
            <a className='text-blue-600' href='https://peconline.co.in/user-register?=1'>
              https://peconline.co.in/user-register?=1
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}