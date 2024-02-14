"use client";
import prisma from "@/lib/prisma";
import { Team } from "@prisma/client";
import Image from "next/image";
import denverImg from "../../public/denver.png";
import Link from "next/link";

interface GameCardProps {
  team: Team;
}

const denver = {
  name: "Denver Nugets",
  image: denverImg,
};

export default function GameCard({ team }: GameCardProps) {
  return (
    <div className=" font-bold text-md md:text-lg lg:text-xl">
      <div className="font-bold text-md md:text-lg lg:text-2xl">
        <h1>{team.name}</h1>
        <div className=" m-auto  h-[50px] w-[50px] ">
          <Image
            src={team.teamImg}
            width={50}
            height={50}
            alt={team.name}
            className="w-full h-full rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
}
