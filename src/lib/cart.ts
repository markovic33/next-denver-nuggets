import { cookies } from "next/headers";
import prisma from "./prisma";
import { Cart, Prisma } from "@prisma/client";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { productCartItem: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.ProductCartItemGetPayload<{
  include: { product: true };
}>;

export type ShoopingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

export async function getCart(): Promise<ShoopingCart | null> {
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { productCartItem: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    size: cart.productCartItem.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.productCartItem.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}

export async function createCart(): Promise<ShoopingCart> {
  const newCart = await prisma?.cart.create({
    data: {},
  });

  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    productCartItem: [],
    size: 0,
    subtotal: 0,
  };
}
