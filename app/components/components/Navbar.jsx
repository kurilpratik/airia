import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" bg-white text-gray-900 flex flex-col items-center px-6 py-10">
      <header className="w-full flex justify-between items-center max-w-6xl">
        <h1 className="text-2xl font-bold">
          {" "}
          <div className="flex flex-row items-center gap-1.5">
            <svg
              width="25"
              height="25"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9555 6.03472L35.5135 0.849121L30.3904 18.5001L35.5135 36.1012L17.9555 30.9655L0.347656 36.1012L5.52057 18.5001L0.347656 0.849121L17.9555 6.03472Z"
                fill="black"
              />
            </svg>
            AiRIA
          </div>
        </h1>
        <div className="flex items-center  flex-row gap-7 ">
          {" "}
          <nav className="hidden md:flex  font-bold space-x-6">
            <a href="#" className="hover:text-emerald-600">
              About us
            </a>
            <a href="#" className="hover:text-emerald-600">
              Products
            </a>
            <a href="#" className="hover:text-emerald-600">
              Use Cases
            </a>
            <a href="#" className="hover:text-emerald-600">
              Pricing
            </a>
            <a href="#" className="hover:text-emerald-600">
              Blog
            </a>
          </nav>
          <Link href="/dashboard" className= " px-6  bg-black text-white rounded-lg py-3 hover:bg-emerald-600">
            Request a Demo
          </Link>
        </div>
      </header>
    </div>
  );
}
