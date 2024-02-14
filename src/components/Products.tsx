import prisma from "@/lib/prisma";
import ProductCard from "./ProductCard";
import GameSlider from "./GameSlider";

export default async function Products() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-center">
      <div className="flex-4 p-2">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {products.slice(0, 9).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="flex-1 md:p-1 lg:p-2 justify-center items-center">
        <div className="flex-col justify-center items-center">
          <GameSlider />
        </div>
      </div>
    </div>
  );
}
