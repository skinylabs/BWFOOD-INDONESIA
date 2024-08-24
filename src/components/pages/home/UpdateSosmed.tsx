"use client";

import { useState } from "react";
import { ButtonSeeMore, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import InstagramFeed from "./InstagramFeed";
import { RefreshCcw } from "lucide-react";

const UpdateSosmed = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="flex flex-col gap-8 lg:mt-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-700">
            Update Media Sosial
          </h1>
          <button
            onClick={handleRefresh}
            className={`${buttonVariants({
              variant: "ghost",
            })} p-2 rounded-full`}
          >
            <RefreshCcw />
          </button>
        </div>
        <Link href="/">
          <ButtonSeeMore title="Lihat Semua" />
        </Link>
      </div>
      <InstagramFeed key={refreshKey} onRefresh={handleRefresh} />
    </div>
  );
};

export default UpdateSosmed;
