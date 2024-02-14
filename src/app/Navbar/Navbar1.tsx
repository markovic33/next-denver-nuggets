import Image from "next/image";
import denver from "../../../public/denver.png";
import Link from "next/link";
import { getCart } from "@/lib/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import Responsive from "./Responsive";
import { redirect } from "next/navigation";
import { getTicketCart } from "@/lib/ticket";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/options";

async function searchProduct(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  const cart = await getCart();
  const cartTeam = await getTicketCart();

  return (
    <div className="bg-blue-600  border-b-2 border-b-blue-800 border-b-shadow-xl">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="hidden text-white  sm:flex sm:justify-center sm:items-center md:gap-2"
              >
                <Image
                  src={denver}
                  width={50}
                  height={50}
                  alt="logo"
                  className="rounded-xl"
                />
                <h1 className="hidden lg:block text-2xl font-bold">
                  Denver Nuggets
                </h1>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/" className="text-white hover:text-black ">
                Home
              </Link>
              <Link href="/products" className="text-white hover:text-black ">
                Shop
              </Link>
              <Link href="/tickets" className="text-white hover:text-black ">
                Tickets
              </Link>
              <Link href="/team" className="text-white hover:text-black ">
                Team
              </Link>
              <Link href="/contact" className="text-white hover:text-black ">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Responsive />
          </div>
          <div className="flex justify-center items-center">
            <form action={searchProduct}>
              <input
                name="searchQuery"
                placeholder="Search"
                className="border w-full min-w-[60px] rounded-lg p-2"
              />
            </form>
            <ShoppingCartButton cart={cart} cartTeam={cartTeam} />
            <UserMenuButton session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
