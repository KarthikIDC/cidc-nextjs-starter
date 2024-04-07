import NavButtons from '@/app/components/navigationButtons';
import { getData } from '@/app/lib/data';
import Image from 'next/image';

export default async function Page() {
  async function getDataFromTable() {
    const revenue: any = await getData();
    return revenue[0].id || 0;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <div className="m-10 text-7xl text-white">
        {getDataFromTable()} is the loneliest number that you&apos;ll ever do!
      </div>
      <Image
        src="/3dognight.jpg"
        width={250}
        height={250}
        alt="Next JS"
        className="mb-5"
      />
      <NavButtons />
    </div>
  );
}
