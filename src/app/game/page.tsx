import GameSlider from "@/components/GameSlider";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

export default function Game() {
  return (
    <div className="">
      <GameSlider />
    </div>
  );
}
