'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-xl flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <div className="rounded-2xl bg-neutral-50 px-10">
            <Image src="/next.png" width={150} height={150} alt="Next JS" />
          </div>
          <div className="w-full text-start">
            <p className="my-5 text-2xl text-white">What is Next.js?</p>
            <div className="flex flex-col space-y-5 text-white">
              <li>
                Next.js is a React framework that gives you building blocks to
                create web applications.
              </li>
              <li>
                By framework, we mean Next.js handles the tooling and
                configuration needed for React, and provides additional
                structure, features, and optimizations for your application.
              </li>
              <li>
                You can use React to build your UI, then incrementally adopt
                Next.js features to solve common application requirements such
                as routing, data fetching, and caching - all while improving the
                developer and end-user experience.
              </li>
              <li>
                Whether you&apos;re an individual developer or part of a larger
                team, you can use React and Next.js to build fully interactive,
                highly dynamic, and performant web applications.
              </li>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="nexjsConcepts" />
    </div>
  );
}
