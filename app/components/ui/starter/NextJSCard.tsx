import Image from 'next/image';

export default function NextJSCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/next.jpg" width={200} height={180} alt="Next JS" />
      <p className="text-xs md:text-xl">
        Next.js is a React framework for building full-stack web applications.
        You use React Components to build user interfaces, and Next.js for
        additional features and optimizations. Under the hood, Next.js also
        abstracts and automatically configures tooling needed for React, like
        bundling, compiling, and more. This allows you to focus on building your
        application instead of spending time with configuration. Whether
        you&apos;re an individual developer or part of a larger team, Next.js
        can help you build interactive, dynamic, and fast React applications.
      </p>
    </div>
  );
}
