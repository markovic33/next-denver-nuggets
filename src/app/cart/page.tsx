import { getCart } from "@/lib/cart";
import { getTicketCart } from "@/lib/ticket";
import CartEntryProducts from "./CartEntryProucts";
import CartEntryTickets from "./CartEntryTickets";
import setProductQuantity from "./actionsProduct";
import setTicketsQuantity from "./actionsTickets";

export const metadata = {
  title: "Your Cart - Denver Nuggets",
};

export default async function CartPage() {
  const cart = await getCart();
  const cartTicket = await getTicketCart();

  const subtotal = (cart?.subtotal || 0) + (cartTicket?.subtotal || 0);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex justify-center mt-5 text-yellow-500 font-bold text-3xl">
        Shopping Cart
      </h1>
      <div className="px-4 my-4">
        {cart?.productCartItem.map((cartItem) => (
          <CartEntryProducts
            cartItemProduct={cartItem}
            setProductQuantity={setProductQuantity}
            key={cartItem.id}
          />
        ))}
        {cartTicket?.teamCartItem.map((cartItem) => (
          <CartEntryTickets
            cartItemTicket={cartItem}
            setTicketsQuantity={setTicketsQuantity}
            key={cartItem.id}
          />
        ))}
        {!cart?.productCartItem.length && !cartTicket?.teamCartItem.length && (
          <p className="font-semibold text-xl text-gray-500">
            Your cart is empty
          </p>
        )}
      </div>
      <div className="px-4">
        <p className="mb-3 font-bold ">Total: {subtotal || 0}$</p>
        <button className="btn rounded  bg-yellow-400 px-4 py-2 mb-4 font-bold hover:bg-green-400">
          Check Out
        </button>
      </div>
    </div>
  );
}
