import { Patterns } from "@/components/Icons/pattern";

import CtaSection from "@/components/Frontend/Pages/home/CtaSection";
import { FAQ } from "@/components/Frontend/Pages/home/FAQ";
import { HeroCarousel } from "@/components/Frontend/Pages/home/HeroCarousel";
import { MerkCarousel } from "@/components/Frontend/Pages/home/MerkCarousel";
import ProductSection from "@/components/Frontend/Pages/home/ProdukSection";
import ServiceSection from "@/components/Frontend/Pages/home/ServiceSection";
import UpdateSosmed from "@/components/Frontend/Pages/home/UpdateSosmed";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/Frontend/Layouts/MaxWidthWrapper";

export default function Home() {
  return (
    <section>
      <HeroCarousel />

      <MaxWidthWrapper className="flex flex-col gap-8">
        <MerkCarousel />
        <div className="w-full h-80 relative rounded-3xl bg-blue-500">
          <Patterns.batikSatu
            className="absolute inset-0 w-full h-full rounded-3xl"
            fill1="#3b82f6"
            fill2="#397FF0"
          />
          <div className="grid grid-cols-3 h-full">
            <div></div>
            <div className="p-8 relative z-10 col-span-2 flex flex-col gap-4 justify-center">
              <p className="text-white">
                Makanan ringan bukan hanya sekadar camilan, ia adalah cermin
                jiwa yang mencerminkan dedikasi dan cinta kami. Setiap gigitan
                adalah hasil dari komitmen kami untuk kualitas dan kelezatan,
                menyajikan pengalaman yang memuaskan dengan sentuhan yang penuh
                kasih.
              </p>
              <Link
                href={"/about-us"}
                className={`${buttonVariants({
                  size: "lg",
                  variant: "default",
                })} w-1/3`}
              >
                See More About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Produk Page  */}
        <ProductSection />
        <ServiceSection />
        <CtaSection />
        <UpdateSosmed />
        <FAQ />
      </MaxWidthWrapper>
      <section className="w-full bg-blue-500 mt-16">
        <div className="grid grid-cols-2 relative">
          {/* First Image Container */}
          <Link
            href="/makloon"
            className="relative w-full h-80 overflow-hidden"
          >
            <Image
              src="/images/jabatTangan.jpg"
              alt="banner-image"
              layout="fill"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Overlay hitam */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-20 text-center">
              <h1 className="text-3xl font-bold">Makloon Information</h1>
              <p className="mt-2 text-lg">
                Join our team and be a part of something great. Explore exciting
                career paths with us!
              </p>
            </div>
          </Link>

          {/* Second Image Container */}
          <Link href="career" className="relative w-full h-80 overflow-hidden">
            <Image
              src="/images/karir.jpg"
              alt="banner-image"
              layout="fill"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Overlay hitam */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-20 text-center">
              <h1 className="text-3xl font-bold">Career Opportunities</h1>
              <p className="mt-2 text-lg">
                Join our team and be a part of something great. Explore exciting
                career paths with us!
              </p>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
}
