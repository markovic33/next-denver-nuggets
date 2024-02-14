import { cache } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import denverImg from "../../../../public/denver.png";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { incrementTicketQuantity } from "./actions";

interface TicketPageProps {
  params: {
    id: string;
  };
}

const getTicket = cache(async (id: string) => {
  const ticket = await prisma.team.findUnique({ where: { id } });
  if (!ticket) notFound();
  return ticket;
});

const denver = {
  name: "Denver",
  image: denverImg,
};

export async function generateMetadata({
  params: { id },
}: TicketPageProps): Promise<Metadata> {
  const ticket = await getTicket(id);
  return {
    title: ticket.name + "Denver Nuggets - ",
    description: ticket.date,
    openGraph: {
      images: [{ url: ticket.teamImg }],
    },
  };
}

export default async function TicketPage({ params: { id } }: TicketPageProps) {
  const team = await getTicket(id);

  return (
    <div className="w-full h-full flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center ">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row h-auto gap-5 mb-10 p-5 md:p-10 ">
        <div className="flex flex-col items-center m-auto p-2">
          <h1 className="text-4xl font-bold">{denver.name}</h1>
          <div className="h-[300px] md:w-[300px] xl:w-[300px] m-auto p-2">
            <Image
              src={denver.image}
              alt={denver.name}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-4xl md:text-9xl font-bold text-yellow-400">VS</h1>
          <p className="font-semibold text-xl md:text-2xl">{team.date}</p>
          <p className="font-semibold text-xl md:text-2xl">{team.time}</p>
          <AddToCartButton
            teamId={team.id}
            incrementTicketQuantity={incrementTicketQuantity}
          />
        </div>
        <div className="flex flex-col items-center m-auto p-2">
          <h1 className="text-4xl font-bold">{team.name}</h1>
          <div className="h-[300px] min-md:w-[300px] min-xl:w-[300px] m-auto p-2">
            <Image
              src={team.teamImg}
              alt={team.name}
              width={300}
              height={300}
              className="w-full h-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
