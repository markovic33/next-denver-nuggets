"use client";
import Image from "next/image";
import milestone from "../../../public/mil.webp";
import { useRouter } from "next/navigation";

export default function History() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/milestone");
  };
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Image
        src={milestone}
        alt="History"
        layout="fill"
        objectFit="cover"
        priority={true}
        quality={100}
        className="object-cover"
      />
      <div className="absolute top-1/3 right-10 transform translate-y-1/2">
        <h1 className="font-bold text-2xl uppercase text-yellow-500">
          Milestone
        </h1>
        <button
          className="btn bg-yellow-400 p-4 border rounded-lg"
          onClick={handleClick}
        >
          Check out
        </button>
      </div>
    </div>
  );
}
