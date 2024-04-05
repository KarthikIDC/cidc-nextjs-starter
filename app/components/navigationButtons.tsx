'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './ui/moving-border';

export default function NavButtons({ nextPath }: { nextPath?: string }) {
  const history = useRouter();

  return (
    <div className="flex w-full max-w-sm items-center justify-between ">
      <Link
        href={''}
        onClick={() => {
          history.back();
        }}
      >
        <Button className="border-black bg-slate-700 text-white">
          Previous
        </Button>
      </Link>
      <Link href={nextPath ? nextPath : '/'}>
        <Button className="border-black bg-slate-700 text-white">
          {nextPath ? 'Next' : 'End'}
        </Button>
      </Link>
    </div>
  );
}
