import Image from 'next/image';

export default function CentralImage() {
  return (
    <div className="relative w-full h-56"> {/* Adjust styling to remove extra margin */}
      <Image
        src="/new-image.png"
        alt="Additional Image"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
