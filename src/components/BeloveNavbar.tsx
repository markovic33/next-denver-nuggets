import prisma from "@/lib/prisma";
import GameCard from "./GameCard";
import Image from "next/image";
import denverImg from "../../public/denver.png";
import GameCardNoStyle from "./GameCardNoStyle";

const denver = {
  name: "Denver Nugets",
  image: denverImg,
};

export default async function BeloveNavbar() {
  const teams = await prisma.team.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="flex-col mx-auto p-5 flex overflow-x-auto w-full overflow-hidden">
      <div className="flex justify-between gap-3 min-w-[400px] h-[100px] ">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex flex-row justify-between items-center rounded-lg w-full border p-3 md:p-5 "
          >
            <div className="m-auto  h-[50px] w-[50px]">
              <Image
                src={denver.image}
                alt={denver.name}
                width={50}
                height={50}
                className="w-full h-full object-cover" // Margin added for medium screens and larger
              />
            </div>
            <div className="flex-col p-3 md:p-5 justify-center items-center text-center text-nowrap text-bold font-xl">
              <h1>VS</h1>
            </div>
            <div className="flex-col p-3 md:p-5 justify-center items-center text-center text-nowrap text-bold font-xl">
              <GameCardNoStyle team={team} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
