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
          <Image src="/next.jpg" width={200} height={180} alt="Next JS" />
          <p className="m-5 text-white">
            Next.js is a React framework for building full-stack web
            applications. You use React Components to build user interfaces, and
            Next.js for additional features and optimizations. Under the hood,
            Next.js also abstracts and automatically configures tooling needed
            for React, like bundling, compiling, and more. This allows you to
            focus on building your application instead of spending time with
            configuration. Whether you&apos;re an individual developer or part
            of a larger team, Next.js can help you build interactive, dynamic,
            and fast React applications.
          </p>
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
      <Link href={'/typescript'}>
        <Button className="border-black bg-slate-700 text-white">Next</Button>
      </Link>
    </div>
  );
}
