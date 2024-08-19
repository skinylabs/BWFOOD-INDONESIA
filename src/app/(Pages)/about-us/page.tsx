import MaxWidthWrapper from "@/components/Layouts/MaxWidthWrapper";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div>
      <div className="fixed w-full z-10  mt-16 2xl:mt-20 ">
        <div className="w-full h-96 absolute overflow-hidden">
          <Image
            src="/images/carousel/Hero/hero-1.webp"
            fill
            alt="banner-image"
            className="object-cover object-center"
          />
          <div className="relative w-full h-full flex justify-center items-center">
            <h1 className="text-3xl lg:text-5xl text-center font-bold text-slate-700">
              About Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white h-full rounded-t-[3rem] relative z-20 mt-[26rem]">
        <MaxWidthWrapper>
          <div className="pt-8 grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/images/carousel/Hero/hero-1.webp"
                alt="banner-image"
                width={500}
                height={500}
                className="rounded-2xl"
              />
              <Image
                src="/images/carousel/Hero/hero-1.webp"
                alt="banner-image"
                width={500}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">BW FOOD INDONESIA</h1>
              <p>
                BWFOOD INDONESIA adalah perusahaan yang memproduksi berbagai
                macam produk makanan ringan yang berlokasi di Jawa Tengah,
                berdiri pada tanggal 25 September 1992. Berawal dari makanan
                ringan dengan bahan dan proses terstandar berkualitas tinggi,
                BWFOOD INDONESIA telah berkembang semakin modern tanpa
                meninggalkan nilai-nilai positif dan luhur yang dicetuskan oleh
                pendiri perusahaan. Beragam produk BWFOOD INDONESIA telah lama
                menjadi bagian dari kehidupan konsumen Indonesia. Beberapa di
                antaranya adalah: Kungfu Panda, Mister Panda, Teloku Criping
                Singkong, Chiko, Chocoreto, Yatta, Oishimie, Oyatsu, Chip-Chip
                dan Super Ecoo.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default AboutUsPage;
