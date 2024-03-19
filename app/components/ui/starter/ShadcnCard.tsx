import Image from 'next/image';

export default function ShadcnCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/shadcn.png" width={250} height={250} alt="Next JS" />
      <p className="mt-10 text-xs md:text-xl">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable. Open Source. This is NOT a component
        library. It&apos;s a collection of re-usable components that you can
        copy and paste into your apps. What do you mean by not a component
        library? I mean you do not install it as a dependency. It is not
        available or distributed via npm. Pick the components you need. Copy and
        paste the code into your project and customize to your needs. The code
        is yours.
      </p>
    </div>
  );
}
