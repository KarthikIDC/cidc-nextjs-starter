'use client';
import { BackgroundBeams } from '@/app/components/ui/background-beams';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import { Button } from '@/app/components/ui/moving-border';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-lg flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image src="/react.png" width={200} height={180} alt="Next JS" />
          <p className="m-5 text-white">
            React is a JavaScript library created by Facebook. React is a User
            Interface (UI) library. React is a tool for building UI components
          </p>
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
      <Link href={'/nextjs'}>
        <Button className="border-black bg-slate-700 text-white">Next</Button>
      </Link>
    </div>
  );
}
