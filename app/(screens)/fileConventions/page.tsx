'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-3xl flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <p className="mb-5 text-2xl text-white">File Conventions</p>
          <Image
            src="/fileConventions.png"
            width={1000}
            height={1000}
            alt="Next JS"
          />
        </BackgroundGradient>
      </div>
      <NavButtons />
    </div>
  );
}
