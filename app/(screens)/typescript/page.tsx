'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-lg flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image src="/ts.avif" width={200} height={180} alt="Next JS" />
          <p className="m-5 text-white">
            TypeScript is a strongly typed programming language that builds on
            JavaScript, giving you better tooling at any scale.TypeScript adds
            additional syntax to JavaScript to support a tighter integration
            with your editor. Catch errors early in your editor.TypeScript code
            converts to JavaScript, which runs anywhere JavaScript runs: In a
            browser, on Node.js or Deno and in your apps.TypeScript understands
            JavaScript and uses type inference to give you great tooling without
            additional code.
          </p>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="tailwind" />
    </div>
  );
}
