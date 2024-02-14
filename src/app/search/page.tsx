import GameCard from "@/components/GameCard";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/prisma";

interface SearchPageProps {
  searchParams: { query: string };
}

export default async function SearchPage({
  searchParams: { query },
}: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "asc" },
  });

  const tickets = await prisma.team.findMany({
    where: {
      OR: [{ name: { contains: query, mode: "insensitive" } }],
    },
    orderBy: { id: "asc" },
  });

  if (products.length === 0 && tickets.length === 0) {
    return (
      <div className="text-center text-xl p-20 text-gray-500">
        No products found
      </div>
    );
  }

  return (
    <div className="m-auto mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      {tickets.map((ticket) => (
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-lg mb-2 uppercase">
            Buy ticket for game
          </h1>
          <GameCard team={ticket} key={ticket.id} />
        </div>
      ))}
    </div>
  );
}
