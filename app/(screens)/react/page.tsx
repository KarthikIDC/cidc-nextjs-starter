'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-xl flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image src="/react.png" width={80} height={80} alt="React JS" />
          <div className="w-full text-start">
            <p className="my-5 text-2xl text-white">What is React JS?</p>
            <div className="flex flex-col space-y-5 text-white">
              <li>
                React is a JavaScript library for building interactive user
                interfaces. By user interfaces (UI), we mean the elements that
                users see and interact with on-screen.
              </li>
              <li>
                By library, we mean React provides helpful functions (APIs) to
                build UI, but leaves it up to the developer where to use those
                functions in their application.
              </li>
              <li>
                Part of React&apos;s success is that it is relatively
                unopinionated about the other aspects of building applications.
                This has resulted in a flourishing ecosystem of third-party
                tools and solutions, including Next.js.
              </li>
              <li>
                It also means, however, that building a complete React
                application from the ground up requires some effort. Developers
                need to spend time configuring tools and reinventing solutions
                for common application requirements.
              </li>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="nextjs" />
    </div>
  );
}
