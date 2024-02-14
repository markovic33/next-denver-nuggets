import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function addTeam(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const teamImg = formData.get("teamImg")?.toString();
  const price = Number(formData.get("price"));
  const time = formData.get("time")?.toString();
  const date = formData.get("date")?.toString();

  if (!name || !teamImg || !price || !time || !date) {
    throw Error("Missing required fields");
  }

  await prisma.team.create({
    data: { name, teamImg, price, time, date },
  });

  redirect("/");
}

export default function AddTeam() {
  return (
    <div>
      <h1>Add Team</h1>
      <form action={addTeam} className="flex flex-col gap-4">
        <input required name="name" />
        <input required name="teamImg" type="url" />
        <input required name="time" />
        <input required name="date" />
        <input required type="number" name="price" />
        <FormSubmitButton>Add Team</FormSubmitButton>
      </form>
    </div>
  );
}
