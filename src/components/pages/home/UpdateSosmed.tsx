import { ButtonSeeMore } from "@/components/ui/button";
import Link from "next/link";

const UpdateSosmed = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-700">
          Update Media Sosial
        </h1>
        <Link href="/">
          <ButtonSeeMore title="Lihat Semua" />
        </Link>
      </div>
    </div>
  );
};

export default UpdateSosmed;
