import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center mt-5 sm:mt-10 xl:mt-5">
      <div className="mx-auto  xl:w-[85%] bg-white bg-opacity-25 rounded-xl shadow-lg flex flex-col xl:flex-row items-center justify-between px-6 py-2">
        {/* Left Side */}
        <div className="font-lovers text-white text-4xl xl:text-4xl mb-4 xl:mb-0">
          EdutechCampus
        </div>

        {/* Right Side */}
        <div className="flex flex-row xl:flex-row space-x-3 xl:space-y-0 xl:space-x-24 text-white font-medium font-Helvetica">
          <Link href=".." legacyBehavior>
            <a className="hover:text-red-200 transition">Home</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="hover:text-red-200 transition">Services</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-red-200 transition">About Us</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-red-200 transition">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//change