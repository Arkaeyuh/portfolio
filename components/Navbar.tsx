"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent p-4 shadow-md flex items-center justify-around fixed top-0 left-0 right-0 z-50">
      {/* Logo or brand name */}
      <div className="flex items-center space-x-2">
        <Image src="/logo_transparent.png" alt="Logo" width={85} height={85} />
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-white hover:text-purple-700 text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-0">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-purple-700 text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-0">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="text-white hover:text-purple-700 text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-0">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-purple-700 text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-0">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}