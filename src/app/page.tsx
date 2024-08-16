import MaxWidthWrapper from "@/components/Layouts/MaxWidthWrapper";
import { HeroCarousel } from "@/components/Layouts/pages/home/HeroCarousel";
import { MerkCarousel } from "@/components/Layouts/pages/home/MerkCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <div>
        <HeroCarousel />
      </div>

      <MaxWidthWrapper>
        <MerkCarousel />
      </MaxWidthWrapper>
      <div className="mb-20"></div>
    </div>
  );
}
