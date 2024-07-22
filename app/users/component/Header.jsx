import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 shadow flex flex-col items-center">
      <div className="bg-white w-full flex justify-center items-start p-4"> {/* Apply bg-white to this div */}
        <Image src="/Zysk-logo.png" alt="Zysk Logo" width={50} height={50} />
      </div>
    </header>
  );
}
