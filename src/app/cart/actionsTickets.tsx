"use server";

import prisma from "@/lib/prisma";
import { createTicketCart, getTicketCart } from "@/lib/ticket";
import { revalidatePath } from "next/cache";

export default async function setTicketsQuantity(
  teamId: string,
  quantity: number
) {
  const cart = (await getTicketCart()) ?? (await createTicketCart());

  const articleInCart = cart.teamCartItem.find(
    (item) => item.teamId === teamId
  );

  if (quantity === 0) {
    if (articleInCart) {
      await prisma?.teamCartItem.delete({
        where: { id: articleInCart.id },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.teamCartItem.update({
        where: { id: articleInCart.id },
        data: { quantity },
      });
    } else {
      await prisma.teamCartItem.create({
        data: {
          cartId: cart.id,
          teamId,
          quantity,
        },
      });
    }
  }
  revalidatePath("/cart");
}
