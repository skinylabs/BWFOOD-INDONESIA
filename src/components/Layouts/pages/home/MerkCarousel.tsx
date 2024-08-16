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
import Link from "next/link";
import { ButtonSeeMore } from "@/components/ui/button";

interface MerkCarouselProps {
  className?: string;
}

export function MerkCarousel({ className }: MerkCarouselProps) {
  const plugin = React.useRef(
    Autoscroll({ speed: 1, stopOnInteraction: false, stopOnFocusIn: false })
  );

  return (
    <div className="grid grid-cols-4 mt-8 items-center">
      <div className="mb-10 col-span-1 flex flex-col jus">
        <h1 className="text-3xl lg:text-3xl font-bold text-slate-700">
          Merk Kami
        </h1>
        <Link href="/">
          <ButtonSeeMore title="Lihat Semua" />
        </Link>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mb-8 col-span-3"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/4 lg:basis-1/6">
              <div className="h-full w-full  flex justify-center">
                <Image
                  src="/carousel/hero/hero-1.webp"
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
