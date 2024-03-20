'use client';
import Image from 'next/image';
import { Button } from '../button';

export default function GitCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/git.jpg" width={200} height={180} alt="Next JS" />
      <Button
        onClick={() => {
          window.open('https://github.com/KarthikIDC/cidc-nextjs-starter');
        }}
      >
        Checkout the code!
      </Button>
    </div>
  );
}
