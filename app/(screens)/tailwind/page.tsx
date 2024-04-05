'use client';
import NavButtons from '@/app/components/navigationButtons';
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10">
        <BackgroundGradient className="flex max-w-lg flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image src="/tailwind.png" width={150} height={150} alt="Next JS" />
          <p className="m-5 text-white">
            Tailwind CSS is a utility-first CSS framework that streamlines web
            development by providing a set of pre-designed utility classes.
            These classes enable rapid styling without writing custom CSS,
            promoting consistency and scalability. Tailwind’s approach shifts
            focus from traditional CSS components to functional classes,
            empowering developers to efficiently build responsive and visually
            appealing interfaces with minimal effort.
          </p>
        </BackgroundGradient>
      </div>
      <NavButtons nextPath="shadcn" />
    </div>
  );
}
