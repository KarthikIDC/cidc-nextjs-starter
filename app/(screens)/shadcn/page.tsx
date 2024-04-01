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
          <Image src="/shadcn.png" width={250} height={250} alt="Next JS" />
          <p className="m-5 text-white">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source. This is NOT a
            component library. It&apos;s a collection of re-usable components
            that you can copy and paste into your apps. What do you mean by not
            a component library? I mean you do not install it as a dependency.
            It is not available or distributed via npm. Pick the components you
            need. Copy and paste the code into your project and customize to
            your needs. The code is yours.
          </p>
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
      <Link href={'/'}>
        <Button className="border-black bg-slate-700 text-white">End</Button>
      </Link>
    </div>
  );
}
