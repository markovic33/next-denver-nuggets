import prisma from "@/lib/prisma";
import GameCard from "./GameCard";

export default async function GameSlider() {
  const teams = await prisma.team.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="overflow-auto">
      <h1 className="text-2xl font-extrabold italic text-yellow-400">
        Upcoming Games Against...
      </h1>

      <div className="flex flex-col justify-center items-center gap-3">
        {teams.slice(0, 5).map((team) => (
          <GameCard team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
