import Image from 'next/image';

export default function TailwindCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/tailwind.png" width={150} height={150} alt="Next JS" />
      <p className="mt-10 text-xs md:text-xl">
        Tailwind CSS is a utility-first CSS framework that streamlines web
        development by providing a set of pre-designed utility classes. These
        classes enable rapid styling without writing custom CSS, promoting
        consistency and scalability. Tailwind’s approach shifts focus from
        traditional CSS components to functional classes, empowering developers
        to efficiently build responsive and visually appealing interfaces with
        minimal effort.
      </p>
    </div>
  );
}
