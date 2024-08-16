import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="mt-16 2xl:mt-20">
      <div className="w-full h-96 absolute overflow-hidden ">
        <Image
          src="/carousel/Hero/hero-1.webp"
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
  );
};

export default AboutUsPage;
