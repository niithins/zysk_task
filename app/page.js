import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF3EF] flex flex-col">
      <header className="bg-white w-full flex justify-center items-center py-4">
        <Image src="/Zysk-logo.png" alt="Zysk Logo" width={50} height={50} />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl text-red-500 font-bold  mb-4">Adventure & Wildlife Expo</h1>
        <p className="text-md pt-8 text-red-500 mb-4">Scan this QR to Create your own ID Card</p>
        <Image src="/image-15.png" alt="QR Code" width={200} height={200} />
        <p className="text-sm mt-4">If QR doesn't work, Please visit the link below</p>
        <Link href="/users">
          <span className="text-blue-500 text-sm font-semibold underline mt-2 cursor-pointer">https://peconline.co.in/user-register?=1</span>
        </Link>
      
        
      </main>
    </div> 
  );   
}
