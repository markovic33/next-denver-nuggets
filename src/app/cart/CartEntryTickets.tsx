"use client";
import { TiketCartItemWithProduct } from "@/lib/ticket";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryPropsTicket {
  cartItemTicket: TiketCartItemWithProduct;
  setTicketsQuantity: (teamId: string, quantity: number) => Promise<void>;
}

export default function CartEntryTickets({
  cartItemTicket,
  setTicketsQuantity,
}: CartEntryPropsTicket) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={cartItemTicket.team.teamImg}
          alt={cartItemTicket.team.name}
          width={200}
          height={200}
          className="rounded-lg shadow-xl"
        />
        <div className="">
          <Link
            href={"/tickets/" + cartItemTicket.team.id}
            className="font-bold"
          >
            Denver VS {cartItemTicket.team.name}
          </Link>
          <div className="">Price: {cartItemTicket.team.price}$</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              defaultValue={cartItemTicket.quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setTicketsQuantity(cartItemTicket.team.id, newQuantity);
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={0}>0 ()Remove</option>
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Total: {cartItemTicket.team.price * cartItemTicket.quantity}$
            {isPending && <span className="sr-only" />}
          </div>
        </div>
      </div>
      <div className="" />
    </div>
  );
}
