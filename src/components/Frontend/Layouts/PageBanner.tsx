import Image from "next/image";

interface PageBannerProps {
  imageSrc: string;
  heading: string;
  height?: string; // Optional prop to set dynamic height
}

const PageBanner: React.FC<PageBannerProps> = ({
  imageSrc,
  heading,
  height = "h-96", // Default height class
}) => {
  return (
    <div
      className={`w-full ${height} absolute overflow-hidden mt-16 2xl:mt-16`}
    >
      <Image
        src={imageSrc}
        fill
        alt="banner-image"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full h-full flex justify-center items-center ">
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-white">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
