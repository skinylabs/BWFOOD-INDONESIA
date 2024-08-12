import MaxWidthWrapper from "@/components/Layouts/MaxWidthWrapper";
import BannerVideo from "@/components/Layouts/pages/home/BannerVideo";
import { HeroCarousel } from "@/components/Layouts/pages/home/HeroCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full ">
      <div>
        <HeroCarousel />
      </div>
      <MaxWidthWrapper>
        <div className="w-full h-80 relative overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1624640647972-6d584cb51230?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banner-image"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* <div className="w-full flex gap-4 mt-4">
        <Input
          type="text"
          className="border-slate-900 border-2"
          placeholder="Search amazing work here"
        />
        <Button type="submit">
          <FaMagnifyingGlass />
        </Button> */}
      </MaxWidthWrapper>
    </div>
  );
}
