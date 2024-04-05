'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AuroraBackground } from './components/ui/aurora-background';
import { Button } from './components/ui/moving-border';

export default function Page() {
  return (
    <main className="flex flex-col ">
      <div className="flex flex-col items-center justify-center text-center align-middle text-white">
        <div className="h-full w-screen">
          <AuroraBackground className="bg-indigo-950">
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 3,
                ease: 'easeInOut',
              }}
              className="relative flex flex-col items-center justify-center gap-4 px-4"
            >
              <Image
                src="/cidc.png"
                width={200}
                height={180}
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <div className="my-10 text-center text-2xl font-bold text-neutral-300 md:text-5xl">
                Welcome to the NextJS starter course
              </div>
              <Link href={'/pageOne'}>
                <Button className="border-black bg-black text-white">
                  Begin
                </Button>
              </Link>
            </motion.div>
          </AuroraBackground>
        </div>
      </div>
    </main>
  );
}
