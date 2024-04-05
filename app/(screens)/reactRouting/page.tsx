'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image src="/react.png" width={80} height={80} alt="React JS" />
          <div className="w-full text-start">
            <p className="my-5 text-2xl text-white">
              Traditional React Routing
            </p>
            <Image
              src="/reactRouter.png"
              width={800}
              height={800}
              alt="Next JS"
            />
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="appRouter" />
    </div>
  );
}
