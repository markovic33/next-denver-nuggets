"use server";
import prisma from "@/lib/prisma";
import GameCard from "@/components/GameCard";
import denverImg from "../../../public/denver.png";
import Image from "next/image";
import GameCardNoStyle from "@/components/GameCardNoStyle";
import Link from "next/link";
import PaginationBar from "@/components/PaginationBar";

const denver = {
  name: "Denver Nugets",
  image: denverImg,
};
interface TicketsProps {
  searchParams: { page: string };
}

export default async function GameSlider({
  searchParams: { page = "1" },
}: TicketsProps) {
  const currentPage = parseInt(page);

  const pageSize = 2;

  const totalItemCount = await prisma.team.count();

  const totalPages = Math.ceil(totalItemCount / pageSize);

  const teams = await prisma.team.findMany({
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });

  return (
    <div className="mx-auto p-5 max-w-5xl h-full ">
      <h1 className="text-2xl font-extrabold italic text-yellow-400 mb-5">
        Upcoming Games Against...
      </h1>

      <div className="flex flex-col gap-3 ">
        {teams.map((team) => (
          <Link
            href={"/tickets/" + team.id}
            key={team.id}
            className=" w-full min-h-[200px] cursor-pointer flex flex-row  border md:p-5 justify-center items-center rounded-xl shadow-xl hover:shadow-xl overflow-hidden transition-transform transform hover:scale-95"
          >
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="font-bold text-md md:text-lg lg:text-2xl">
                {denver.name}
              </h1>
              <Image
                src={denver.image}
                alt={denver.name}
                width={50}
                height={50}
                className="w-50 h-50 rounded-lg object-cover"
              />
            </div>
            <div className=" font-bold text-md flex-col p-3 md:p-5 justify-center items-center text-center text-nowrap text-bold font-xl">
              <h1 className="font-bold text-md md:text-lg lg:text-4xl text-yellow-400">
                VS
              </h1>
              <p className="">{team.date}</p>
              <p>{team.time}</p>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center font-bold text-md md:text-lg lg:text-2xl ">
              <GameCardNoStyle team={team} />
            </div>
          </Link>
        ))}
      </div>
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
