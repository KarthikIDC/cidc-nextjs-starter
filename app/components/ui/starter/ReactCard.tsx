import Image from 'next/image';

export default function ReactCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/react.png" width={100} height={100} alt="Next JS" />
      <p className="mt-5 text-xs md:text-xl">
        React is a JavaScript library created by Facebook. React is a User
        Interface (UI) library. React is a tool for building UI components
      </p>
    </div>
  );
}
