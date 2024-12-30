import React from "react";

const Navbar = () => {
    
  return (

    <div className="flex items-center justify-center sm:mt-5 xl:mt-5">
      <div className="w-auto xl:w-[85%] bg-white bg-opacity-25 rounded-xl shadow-lg flex items-center justify-between px-6 py-2">
        {/* Left Side */}
        <div className="font-lovers text-white text-xl xl:text-4xl ">
          EdutechCampus
        </div>

        {/* Right Side */}
        <div className="flex space-x-24 text-white font-medium font-Helvetica">
          <a href="#" className="hover:text-red-200 transition">Home</a>
          <a href="#" className="hover:text-red-200 transition">Services</a>
          <a href="#" className="hover:text-red-200 transition">About Us</a>
          <a href="#" className="hover:text-red-200 transition">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
