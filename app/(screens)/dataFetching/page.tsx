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
            <p className="my-5 text-2xl text-white">Fetching Data</p>
            <div className="flex flex-col space-y-5 text-white">
              <li>
                By default, Next.js applications use React Server Components.
                Fetching data with Server Components is a relatively new
                approach and there are a few benefits of using them:
              </li>
              <li>
                Server Components support promises, providing a simpler solution
                for asynchronous tasks like data fetching. You can use
                async/await syntax without reaching out for useEffect, useState
                or data fetching libraries.
              </li>
              <li>
                Server Components execute on the server, so you can keep
                expensive data fetches and logic on the server and only send the
                result to the client.
              </li>
              <li>
                As mentioned before, since Server Components execute on the
                server, you can query the database directly without an
                additional API layer.
              </li>
            </div>
          </div>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="tableData" />
    </div>
  );
}
