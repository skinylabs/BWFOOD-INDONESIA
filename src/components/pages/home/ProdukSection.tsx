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

const ProductSection = () => {
  return (
    <div className="lg:mt-8">
      <div>
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-slate-700">
          Produk Kami
        </h1>
      </div>
      <div className="pt-8">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="pt-6">
                  <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-gray-500/40">
                      <Image
                        src="/images/carousel/Hero/hero-1.webp"
                        alt="banner-image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Tailwind Card
                      </h5>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        type="button"
                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        onClick={() =>
                          alert("Navigasi ke halaman semua produk!")
                        }
                      >
                        Read More
                      </button>
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
              <div className="pt-6">
                <div className="relative flex w-full flex-col items-center justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md p-6">
                  <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Lihat Semua Produk
                  </h5>
                  <button
                    type="button"
                    className="mt-4 select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => alert("Navigasi ke halaman semua produk!")}
                  >
                    Lihat Semua
                  </button>
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
