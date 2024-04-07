'use client';

import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-xl flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <div className="rounded-2xl bg-neutral-50 p-32">
            <Image src="/next.png" width={150} height={150} alt="Next JS" />
            <p className="text-4xl text-black">Please wait..</p>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
