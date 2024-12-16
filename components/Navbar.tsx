import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 to-red-500 h-[80px] flex items-center justify-center">
      <div className="w-[90%] bg-red-200 bg-opacity-30 rounded-xl shadow-lg flex items-center justify-between px-6 py-2">
        {/* Left Side */}
        <div className="text-white text-xl font-cursive">
          EduTechCampus
        </div>

        {/* Right Side */}
        <div className="flex space-x-8 text-white font-medium">
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
