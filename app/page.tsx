import Image from 'next/image';
import { CarouselDemo } from './components/ui/starter/CarouselDemo';

export default function Page() {
  return (
    <main className="flex flex-col ">
      <Image
        src="/cidc.png"
        width={200}
        height={180}
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="flex flex-col items-center justify-center p-5 text-center align-middle text-white">
        CIDC NextJS Starter
        <div className="m-5 w-full px-10 md:w-1/3">
          <CarouselDemo />
        </div>
      </div>
    </main>
  );
}
