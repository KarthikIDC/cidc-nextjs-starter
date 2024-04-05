'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from './components/ui/background-gradient';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-transparent align-middle">
      <Link
        href="/"
        onClick={() => {
          router.back();
        }}
      >
        <BackgroundGradient className="flex flex-col items-center justify-center rounded-[22px] bg-slate-800 p-4 dark:bg-zinc-900 sm:p-10">
          <Image
            src="/404.avif"
            width={1}
            height={1}
            alt="Next JS"
            className="w-fit"
          />
        </BackgroundGradient>
      </Link>
    </div>
  );
}
