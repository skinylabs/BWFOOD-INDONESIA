import MaxWidthWrapper from "@/components/Frontend/Layouts/MaxWidthWrapper";
import PageBanner from "@/components/Frontend/Layouts/PageBanner";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <section className="w-full">
      <div>
        <PageBanner
          imageSrc="/images/header/blue-pattern.svg"
          heading="Produk"
          height="h-96"
        />
        <h1>Product Page</h1>
      </div>
      <MaxWidthWrapper className="flex flex-col gap-20 mt-[26rem] py-12">
        <div className="w-full h-full grid grid-cols-5 gap-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <Link
              href={"/"}
              className="relative w-60 h-60 hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer"
              key={index}
            >
              <Image
                src="/images/career.jpg"
                alt="banner-image"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
