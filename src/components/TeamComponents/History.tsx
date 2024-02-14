"use client";
import Image from "next/image";
import history from "../../../public/history1.png";
import { useRouter } from "next/navigation";

export default function History() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/history");
  };
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Image
        src={history}
        alt="History"
        layout="fill"
        objectFit="cover"
        priority={true}
        quality={100}
        className="object-cover"
      />
      <div className="absolute top-1/2 left-10 transform translate-y-1/2">
        <h1 className="font-bold text-2xl uppercase">History</h1>
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
