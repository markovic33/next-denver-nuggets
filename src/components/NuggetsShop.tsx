import Image from "next/image";
import React from "react";

export const NuggetsShop = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      <div className=" flex-1 flex justify-center animate-pulse underline space-x-4 items-center text-center font-bold text-7xl text-yellow-400 italic">
        NUGGETS <br /> SHOP
      </div>
      <div className="flex-3">
        <Image
          src="/shop2.png"
          alt="shop"
          width={800}
          height={450}
          className=" object-cover rounded shadow-xl hover:shadow-xl"
        />
      </div>
    </div>
  );
};
