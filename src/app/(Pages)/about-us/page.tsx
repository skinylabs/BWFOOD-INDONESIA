import MaxWidthWrapper from "@/components/Frontend/Layouts/MaxWidthWrapper";
import PageBanner from "@/components/Frontend/Layouts/PageBanner";
import VisionMission from "@/components/Frontend/Pages/AboutUs/visionmission";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div>
      <PageBanner
        imageSrc="/images/header/blue-pattern.svg"
        heading="Tentang Kami"
        height="h-96"
      />

      <MaxWidthWrapper className="flex flex-col gap-20 mt-[26rem] py-12">
        <div className="flex flex-col gap-6 text-center pt-12">
          <h1 className="text-4xl font-bold">BW FOOD INDONESIA</h1>
          <p>
            BWFOOD INDONESIA adalah perusahaan yang memproduksi berbagai macam
            produk makanan ringan yang berlokasi di Jawa Tengah, berdiri pada
            tanggal 25 September 1992. Berawal dari makanan ringan dengan bahan
            dan proses terstandar berkualitas tinggi, BWFOOD INDONESIA telah
            berkembang semakin modern tanpa meninggalkan nilai-nilai positif dan
            luhur yang dicetuskan oleh pendiri perusahaan. Beragam produk BWFOOD
            INDONESIA telah lama menjadi bagian dari kehidupan konsumen
            Indonesia. Beberapa di antaranya adalah: Kungfu Panda, Mister Panda,
            Teloku Criping Singkong, Chiko, Chocoreto, Yatta, Oishimie, Oyatsu,
            Chip-Chip dan Super Ecoo.
          </p>
        </div>

        <VisionMission />

        <div className="">
          <h1 className="text-4xl font-bold text-center">TEMPAT PRODUKSI</h1>
          <div className="grid grid-cols-2 gap-4 mt-24">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/carousel/Hero/hero-1.webp"
                alt="banner-image"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold">Lokasi Pertama</h1>
                <p className="text-lg">
                  Jl. Candisari Jl. Sendangan No.2, Sendangan, Karanganom, Kec.
                  Klaten Utara, Kabupaten Klaten, Jawa Tengah 57416
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href="#"
                    className={`${buttonVariants({
                      variant: "default",
                      size: "lg",
                    })}  w-1/2`}
                  >
                    Lihat Di Maps
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/images/carousel/Hero/hero-1.webp"
                alt="banner-image"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <div className="flex flex-col gap-4 text-center">
                <h1 className="text-3xl font-bold">Lokasi Pertama</h1>
                <p className="text-lg">
                  Jl. Candisari Jl. Sendangan No.2, Sendangan, Karanganom, Kec.
                  Klaten Utara, Kabupaten Klaten, Jawa Tengah 57416
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href="#"
                    className={`${buttonVariants({
                      variant: "default",
                      size: "lg",
                    })}  w-1/2`}
                  >
                    Lihat Di Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUsPage;
