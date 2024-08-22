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

const Merk = [
  {
    namaMerk: "banteng",
    gambar: "/images/logo/merk/banteng.png",
  },
  {
    namaMerk: "chiko",
    gambar: "/images/logo/merk/chiko.png",
  },
  {
    namaMerk: "goldenPanda",
    gambar: "/images/logo/merk/goldenPanda.png",
  },
  {
    namaMerk: "kondangan",
    gambar: "/images/logo/merk/kondangan.png",
  },
  {
    namaMerk: "misterPanda",
    gambar: "/images/logo/merk/misterPanda.png",
  },
  {
    namaMerk: "oishimie",
    gambar: "/images/logo/merk/oishimie.png",
  },
  {
    namaMerk: "oyatsu",
    gambar: "/images/logo/merk/oyatsu.png",
  },
  {
    namaMerk: "panda",
    gambar: "/images/logo/merk/panda.png",
  },
  {
    namaMerk: "popkron",
    gambar: "/images/logo/merk/popkron.png",
  },
  {
    namaMerk: "sancoco",
    gambar: "/images/logo/merk/sancoco.png",
  },
  {
    namaMerk: "teloku",
    gambar: "/images/logo/merk/teloku.png",
  },
  {
    namaMerk: "yatta",
    gambar: "/images/logo/merk/yatta.png",
  },
];

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
          {Merk.map((merks, index) => (
            <CarouselItem key={index} className="basis-1/4 lg:basis-1/6">
              <div className="h-full w-full  flex justify-center">
                <Image
                  src={merks.gambar}
                  alt={`${merks.namaMerk}-logo-banner`}
                  width={500}
                  height={500}
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
