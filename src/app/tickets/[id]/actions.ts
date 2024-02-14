"use server";

import { createTicketCart, getTicketCart } from "@/lib/ticket";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function incrementTicketQuantity(teamId: string) {
  const cart = (await getTicketCart()) ?? (await createTicketCart());

  const articleInCart = cart.teamCartItem.find(
    (item) => item.teamId === teamId
  );

  if (articleInCart) {
    await prisma?.teamCartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma?.teamCartItem.create({
      data: {
        cartId: cart.id,
        teamId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/tickets/[id]");
}
