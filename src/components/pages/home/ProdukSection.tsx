"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { ButtonSeeMore, buttonVariants } from "@/components/ui/button";

const ProductSection = () => {
  return (
    <div className="lg:mt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-700">
          Produk Kami
        </h1>
        <Link href="/">
          <ButtonSeeMore title="Lihat Semua" />
        </Link>
      </div>
      <div className="pt-8 ">
        <Carousel
          // plugins={[plugin.current]}
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <div className="relative w-full h-full cursor-pointer  rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out">
                  <div className="w-full h-full">
                    <Image
                      src="/images/tranding-food-7.png"
                      alt="Tranding"
                      fill
                      className="w-full h-full rounded-3xl object-cover object-center"
                    />
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0">
                    {/* <h1 className="absolute top-8 right-8 text-white">$8</h1> */}
                    <div className="absolute bottom-8 left-8 text-white">
                      <h2 className="food-name">Straw Cake</h2>
                      <h3 className="pt-2 flex gap-4">
                        <div className="rating flex">
                          <Star className="fill-yellow-500 text-yellow-500" />
                          <Star className="fill-yellow-500 text-yellow-500" />
                          <Star className="fill-yellow-500 text-yellow-500" />
                          <Star className="fill-yellow-500 text-yellow-500" />
                          <Star className="fill-yellow-500 text-yellow-500" />
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}

            {/* Carousel item terakhir untuk "lihat semua produk" */}
            <CarouselItem
              key="lihat-semua-produk"
              className="md:basis-1/2 lg:basis-1/4 flex items-center justify-center"
            >
              <div className="relative w-full h-80">
                <div className="w-full h-full flex justify-center items-center">
                  <Link
                    href="/product"
                    className={`${buttonVariants({ variant: "default" })}`}
                  >
                    Lihat Semua Produk
                  </Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductSection;
