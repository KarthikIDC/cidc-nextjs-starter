'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

const content = new Map<string, string>();
content.set(
  'Routing',
  'A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.',
);
content.set(
  'Rendering',
  'Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.',
);
content.set(
  'Data Fetching',
  'Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.',
);
content.set(
  'Styling',
  'Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS',
);
content.set(
  'Integrations',
  'what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them',
);
content.set(
  'Optimizations',
  "Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.",
);
content.set(
  'TypeScript',
  'Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.',
);

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10 max-w-4xl">
        <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <div className="rounded-2xl bg-neutral-50 px-10">
            <Image src="/next.png" width={150} height={150} alt="Next JS" />
          </div>
          <div className="mt-5 w-full text-start">
            <p className="my-5 text-2xl text-white">Key Concepts</p>
            <div className="flex flex-col space-y-5 text-white">
              {[...content.entries()].map((entry) => (
                <li key={entry[0]}>
                  <b>{entry[0]}</b> - {entry[1]}
                </li>
              ))}
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="reactRouting" />
    </div>
  );
}
