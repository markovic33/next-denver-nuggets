import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-center">
      <Link
        href={"/products/" + product.id}
        className="w-[300px]  border bg-white shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <div className="flex p-2 items-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={150}
            className="h-36 object-contain mb-4 rounded-md"
          />
          <div className="">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-green-600 font-bold">{product.price}$</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
