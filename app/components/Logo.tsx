import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="text-center bg-text-gradient bg-clip-text text-gray-700 font-bold">
      <Image 
        src="/Naples.jpg" // Corrected to use src= instead of src-
        width={100} 
        height={100} 
        alt='Logo' 
      />
    </div>
  );
}
