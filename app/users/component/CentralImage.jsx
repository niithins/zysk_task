import Image from 'next/image';

export default function CentralImage() {
  return (
    <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-112">
      <Image
        src="/new-image.png"
        alt="Additional Image"
        fill
        style={{ objectFit: 'cover' }}
      />
    
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <h1 className='absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
        Adventure & Wildlife Expo
      </h1>
    </div>
  );
}
