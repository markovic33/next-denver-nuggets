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
    <Link
      href={"/tickets/" + team.id}
      className="flex flex-row items-center justify-between  border w-[340px] hover:shadow-xl overflow-hidden transition-transform transform hover:scale-95 hover:border-black h-[100px] rounded-lg p-1  m-auto"
    >
      <p className="text-yellow-300 font-semibold">{team.date}</p>
      <div className="flex-col lg:flex-row justify-center items-center m-auto ">
        <div className="flex-3 flex flex-col justify-center items-center text-center">
          <h1 className="text-lg font-bold whitespace-nowrap">{team.name}</h1>
          <div className=" m-auto  h-[50px] w-[50px]">
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
    </Link>
  );
}
