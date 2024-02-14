import { cookies } from "next/headers";
import prisma from "./prisma";
import { Cart, Prisma } from "@prisma/client";

export type CartWithTickets = Prisma.CartGetPayload<{
  include: { teamCartItem: { include: { team: true } } };
}>;

export type TiketCartItemWithProduct = Prisma.TeamCartItemGetPayload<{
  include: { team: true };
}>;

export type ShoppingCartTicket = CartWithTickets & {
  size: number;
  subtotal: number;
};

export async function getTicketCart(): Promise<ShoppingCartTicket | null> {
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { teamCartItem: { include: { team: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    size: cart.teamCartItem.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.teamCartItem.reduce(
      (acc, item) => acc + item.quantity * item.team.price,
      0
    ),
  };
}

export async function createTicketCart(): Promise<ShoppingCartTicket> {
  const newCart = await prisma?.cart.create({
    data: {},
  });

  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    teamCartItem: [],
    size: 0,
    subtotal: 0,
  };
}
