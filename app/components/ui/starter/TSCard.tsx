import Image from 'next/image';

export default function TSCard() {
  return (
    <div className="flex flex-col items-center justify-center text-justify">
      <Image src="/ts.avif" width={250} height={250} alt="Next JS" />
      <p className="mt-5 text-xs md:text-xl">
        TypeScript is a strongly typed programming language that builds on
        JavaScript, giving you better tooling at any scale.TypeScript adds
        additional syntax to JavaScript to support a tighter integration with
        your editor. Catch errors early in your editor.TypeScript code converts
        to JavaScript, which runs anywhere JavaScript runs: In a browser, on
        Node.js or Deno and in your apps.TypeScript understands JavaScript and
        uses type inference to give you great tooling without additional code.
      </p>
    </div>
  );
}
