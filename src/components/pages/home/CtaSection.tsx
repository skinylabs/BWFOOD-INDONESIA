import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CtaSection = () => {
  return (
    <div>
      <div className="relative w-full h-80">
        <Image
          src="/images/cta.jpg"
          alt="banner-image"
          fill
          className="object-cover object-center w-full h-full rounded-3xl"
        />
        <div className="absolute text-white w-1/2 h-full flex flex-col justify-center gap-2 p-8">
          <h1 className="font-bold text-4xl">Ingin Tau Lebih Tentang kami?</h1>
          <p className="text-lg">
            Peluang menunggu di ujung jari Anda! Jangan lewatkan kesempatan ini,
            klik tombol hubungi kami sekarang
          </p>
          <Link
            href="/"
            className={`${buttonVariants({
              variant: "default",
            })} text-black font-semibold bg-white hover:bg-slate-200 hover:scale-105 duration-300 transition-all ease-in-out w-1/3`}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
