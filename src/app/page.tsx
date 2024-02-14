"use server";
import GameSlider from "@/components/GameSlider";
import { NuggetsShop } from "@/components/NuggetsShop";
import Products from "@/components/Products";
import { Team } from "@prisma/client";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Game from "./game/page";
import BeloveNavbar from "@/components/BeloveNavbar";

export default async function Home() {
  return (
    <div className=" w-full m-auto bg-blue-600  p-3 flex flex-col gap-3">
      <NuggetsShop />
      <Products />
    </div>
  );
}
