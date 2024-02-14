import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/prisma";

interface ProductsProps {
  searchParams: { page: string };
}

export default async function Products({
  searchParams: { page = "1" },
}: ProductsProps) {
  const currentPage = parseInt(page);

  const pageSize = 6;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil(totalItemCount / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });

  return (
    <div className="flex gap-2 justify-center">
      <div className="flex-4 p-2 justify-center">
        <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {totalPages > 1 && (
          <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
