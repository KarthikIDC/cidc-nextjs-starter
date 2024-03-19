import * as React from 'react';

import { Card, CardContent } from '@/app/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import Image from 'next/image';
import NextJSCard from './NextJSCard';
import ReactCard from './ReactCard';
import TSCard from './TSCard';
import TailwindCard from './TailwindCard';
import ShadcnCard from './ShadcnCard';

const texts = [
  'This is a starter project for CIDC built using React, Next JS, TypeScript, Tailwind & Shadcn',
];

function getComponent(index: number) {
  switch (index) {
    case 0:
      return texts[0];
    case 1:
      return <ReactCard />;
    case 2:
      return <NextJSCard />;
    case 3:
      return <TSCard />;
    case 4:
      return <TailwindCard />;
    case 5:
      return <ShadcnCard />;
    default:
      return texts[0];
  }
}

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold md:text-3xl">
                    {getComponent(index)}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-transparent bg-indigo-950 text-indigo-200" />
      <CarouselNext className="border-transparent bg-indigo-950 text-indigo-200" />
    </Carousel>
  );
}
