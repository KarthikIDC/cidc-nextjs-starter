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
            <p className="my-5 text-2xl text-white">The App Router</p>
            <div className="flex flex-col space-y-5 text-white">
              <li>Next.js uses a file-system based router</li>
              <li>
                <b>Folders</b> are used to define routes. A route is a single
                path of nested folders, following the file-system hierarchy from
                the root folder down to a final leaf folder that includes a
                page.js file
              </li>
              <li>
                <b>Files</b> are used to create UI that is shown for a route
                segment
              </li>
              <li>
                Each folder in a route represents a route segment. Each route
                segment is mapped to a corresponding segment in a URL path.
              </li>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="appFolderStructure" />
    </div>
  );
}
