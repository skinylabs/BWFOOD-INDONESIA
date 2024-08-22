import { Patterns } from "@/components/Icons/pattern";
import MaxWidthWrapper from "@/components/Layouts/wrapper/MaxWidthWrapper";
import { HeroCarousel } from "@/components/pages/home/HeroCarousel";
import { MerkCarousel } from "@/components/pages/home/MerkCarousel";
import ProductSection from "@/components/pages/home/ProdukSection";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full ">
      <div>
        <HeroCarousel />
      </div>

      <MaxWidthWrapper className="flex flex-col gap-4">
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
                BWFOOD INDONESIA, berdiri sejak 1992 di Jawa Tengah, memproduksi
                beragam makanan ringan berkualitas yang telah menjadi bagian
                dari kehidupan masyarakat Indonesia. Beberapa merek populer kami
                termasuk Kungfu Panda, Mister Panda, dan Chiko.
              </p>
              <Link
                href={"/about-us"}
                className={`${buttonVariants({
                  size: "lg",
                  variant: "default",
                })} w-1/3`}
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        {/* Produk Page  */}
        <ProductSection />
      </MaxWidthWrapper>
      <div className="mb-20"></div>
    </div>
  );
}
