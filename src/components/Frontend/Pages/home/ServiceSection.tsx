import { FC } from "react";
import {
  FaStar,
  FaLock,
  FaShippingFast,
  FaInfinity,
  FaMoneyBillWave,
  FaLightbulb,
} from "react-icons/fa";

interface ServiceProps {
  title: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  textColor: string;
}

const serviceProps: ServiceProps[] = [
  {
    title: "Produk Terbaik",
    description:
      "Kami mendedikasikan diri kami untuk memproduksi kelezatan terbaik, dengan menggunakan bahan pilihan dan standar kualitas yang tak tergoyahkan.",
    icon: FaStar,
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    title: "Keamanan Tinggi",
    description:
      "Kami menghadirkan produk yang lezat dan aman, menjadikan keamanan sebagai prioritas utama hingga produk sampai di tangan Anda.",
    icon: FaLock,
    bgColor: "bg-orange-400",
    textColor: "text-white",
  },
  {
    title: "Pengiriman Cepat",
    description:
      "Kami memiliki armada unggulan dan tim driver berpengalaman yang selalu memberikan layanan pengiriman tepat waktu yang tak tertandingi.",
    icon: FaShippingFast,
    bgColor: "bg-green-400",
    textColor: "text-white",
  },
  {
    title: "Fleksibilitas Tinggi",
    description:
      "Kami siap menjelajahi batas inovasi untuk memenuhi keinginan konsumen, dengan fleksibilitas tanpa batas dalam menciptakan camilan sesuai selera mereka.",
    icon: FaInfinity,
    bgColor: "bg-red-400",
    textColor: "text-white",
  },
  {
    title: "Harga Bersaing",
    description:
      "Kami menyajikan kombinasi sempurna antara harga dan kualitas, menawarkan harga kompetitif sambil tetap menjaga standar tertinggi.",
    icon: FaMoneyBillWave,
    bgColor: "bg-slate-400",
    textColor: "text-white",
  },
  {
    title: "Solusi Terbaik",
    description:
      "Kami siap memberikan solusi penuh perhatian untuk setiap keluhan Anda. Jangan ragu menghubungi kami, dan akan kami bantu setulus hati.",
    icon: FaLightbulb,
    bgColor: "bg-fuchsia-400",
    textColor: "text-white",
  },
];

const ServiceSection: FC = () => {
  return (
    <div className="lg:mt-8 lg:flex lg:flex-col lg:gap-8">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-700">
          Layanan Kami
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {serviceProps.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <div
              key={index}
              className={`flex flex-col p-4 gap-4 ${service.bgColor} rounded-xl`}
            >
              <div className="relative  rounded-lg flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-white" />
              </div>
              <div className={`text-center ${service.textColor}`}>
                <h1 className="text-xl font-bold uppercase">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;
