"use client";
import { Session } from "next-auth";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <label tabIndex={0} onClick={toggleDropdown} className="cursor-pointer">
        {user ? (
          <Image
            src={user?.image || avatar}
            alt="Profile picture"
            width={30}
            height={30}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        )}
      </label>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="absolute top-10 right-0 bg-white p-2 border rounded shadow  flex-nowrap z-50"
        >
          <li>
            {user ? (
              <button
                className="w-full text-md"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            ) : (
              <button className="w-full text-md" onClick={() => signIn()}>
                Sign In
              </button>
            )}
          </li>
        </ul>
      )}
    </div>
  );
}
