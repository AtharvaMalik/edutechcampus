import React from "react";
// import Link from "next/link";
import { TransitionLink } from "../lib/transitionLink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center mt-5 sm:mt-10 xl:mt-5 z-15">
      <div className="mx-auto  xl:w-[85%] bg-white bg-opacity-25 rounded-xl shadow-lg flex flex-col xl:flex-row items-center justify-between px-6 py-2">
        {/* Left Side */}
        <div className="font-lovers text-white text-4xl xl:text-4xl mb-4 xl:mb-0">
          EdutechCampus
        </div>

        {/* Right Side */}
        <div className="flex flex-row xl:flex-row space-x-3 xl:space-y-0 xl:space-x-24 text-white font-medium font-Helvetica " >
          
          <div className="hover:text-red-200 transition">
            <TransitionLink href="..">
              Home
            </TransitionLink>
          </div>
          <div>
            <TransitionLink href="/gallery">
              Gallery
            </TransitionLink>
          </div>
            <div className="hover:text-red-200 transition">
            <TransitionLink href="/services">
              Services
            </TransitionLink>
            </div>
            <div className="hover:text-red-200 transition">
            <TransitionLink href="/about" >
              About Us
            </TransitionLink>
            </div>
            <div className="hover:text-red-200 transition">
            <TransitionLink href="/contact">
              Contact
            </TransitionLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//change