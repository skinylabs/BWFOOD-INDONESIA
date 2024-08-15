"use client";

import * as React from "react";

import Autoscroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface MerkCarouselProps {
  className?: string;
}

export function MerkCarousel({ className }: MerkCarouselProps) {
  const plugin = React.useRef(
    Autoscroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })
  );

  return (
    <div className={className}>
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-slate-700">
          Merk Kami
        </h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 lg:basis-1/6">
              <div className="h-full w-full  flex justify-center">
                <Image
                  src="/Carousel/Hero/hero-1.webp"
                  alt="banner-image"
                  width={100}
                  height={100}
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
