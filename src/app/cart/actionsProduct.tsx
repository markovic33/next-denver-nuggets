"use server";

import { createCart, getCart } from "@/lib/cart";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function setProductQuantity(
  productId: string,
  quantity: number
) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.productCartItem.find(
    (item) => item.productId === productId
  );

  if (quantity === 0) {
    if (articleInCart) {
      await prisma?.productCartItem.delete({
        where: { id: articleInCart.id },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.productCartItem.update({
        where: { id: articleInCart.id },
        data: { quantity },
      });
    } else {
      await prisma.productCartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }
  }
  revalidatePath("/cart");
}
