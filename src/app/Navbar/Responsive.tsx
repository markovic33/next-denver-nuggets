"use client";
import Link from "next/link";
import { useState } from "react";

export default function Responsive() {
  const [isClick, setIsClick] = useState(false);

  const handleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div className="md:hidden relative">
      <div className="flex items-center">
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={handleNavbar}
        >
          {!isClick ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {isClick && (
        <div className="md:hidden absolute top-full left-0 z-10 bg-blue-600 shadow p-2 rounded-lg">
          <div className="space-y-1">
            <Link
              href="/"
              className="text-white block hover:text-black hover:bg-white rounded p-2"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-white block hover:text-black hover:bg-white rounded p-2"
            >
              Shop
            </Link>
            <Link
              href="/tickets"
              className="text-white block hover:text-black hover:bg-white rounded p-2"
            >
              Tickets
            </Link>
            <Link
              href="/team"
              className="text-white block hover:text-black hover:bg-white rounded p-2"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-white block hover:text-black hover:bg-white rounded p-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
