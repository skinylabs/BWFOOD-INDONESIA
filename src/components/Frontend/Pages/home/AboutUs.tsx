import Image from "next/image";

const AboutUsHomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-3xl lg:text-5xl text-center font-bold text-slate-700">
        About Us
      </h1>
      <Image src="/Carousel/Hero/hero-1.webp" alt="banner-image" />
    </div>
  );
};

export default AboutUsHomePage;
