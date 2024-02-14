"use server";

import { createCart, getCart } from "@/lib/cart";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.productCartItem.find(
    (item) => item.productId === productId
  );

  if (articleInCart) {
    await prisma?.productCartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.productCartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/products/[id]");
}
