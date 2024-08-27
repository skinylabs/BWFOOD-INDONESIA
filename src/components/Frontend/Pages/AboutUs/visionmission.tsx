import Image from "next/image";

const VisionMission = () => {
  return (
    <div className="w-full">
      <div className="relative h-96 bg-blue-500 rounded-2xl m-8 overflow-hidden ">
        <div className="absolute w-full h-full flex justify-end p-8">
          <Image
            src="/images/panda-rocket.svg"
            alt="banner-image"
            width={500}
            height={500}
            className="rounded-2xl animate-bounce-smooth"
          />
        </div>
        <div className="w-3/4 h-96 bg-yellow-500 rounded-br-[20rem] flex flex-col gap-4 bg-[url('/images/pattern-batik-1.svg')] bg-cover bg-center">
          <div className="p-8">
            <div className="w-3/4">
              <h1 className="relative text-3xl font-bold text-white">VISI</h1>
              <p className="text-white text-lg">
                Menjadi pemimpin dalam industri makanan ringan dengan
                pertumbuhan berkelanjutan melalui inovasi yang terus-menerus,
                serta menciptakan pengalaman rasa yang memukau bagi setiap
                pelanggan.
              </p>
            </div>
            <div className="w-3/4">
              <h1 className="relative text-3xl font-bold text-white">MISI</h1>
              <p className="text-white text-lg">
                Kami berinovasi dalam menciptakan camilan yang mengikuti tren,
                memastikan kualitas tinggi, dan menciptakan nilai tambah bagi
                masyarakat melalui pertumbuhan bersama yang berkelanjutan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
