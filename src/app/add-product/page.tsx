import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  titile: "Denver Nugets - Add product to shop",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  //redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1>Add product</h1>
      <form action={addProduct} className="flex flex-col gap-4">
        <input placeholder="name" required name="name" />
        <textarea placeholder="description" required name="description" />
        <input placeholder="imageUrl" required name="imageUrl" type="url" />
        <input placeholder="price" required name="price" type="number" />
        <FormSubmitButton>Add product</FormSubmitButton>
      </form>
    </div>
  );
}
