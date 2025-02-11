import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-extrabold tracking-wide">
        🌍 Travel Booking
      </h1>
      <div>
        <Link
          to="/"
          className="px-6 py-2 transition-all duration-300 hover:bg-white hover:text-blue-600 rounded-lg"
        >
          Home
        </Link>
        <Link
          to="/bookings"
          className="px-6 py-2 transition-all duration-300 hover:bg-white hover:text-blue-600 rounded-lg"
        >
          Bookings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
