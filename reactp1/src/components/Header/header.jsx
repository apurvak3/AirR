import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="video-container">
          <video src="Air (1).mp4" autoPlay loop muted></video>
        </div>
        <div className="flex items-center lg:order-2">
          <Link
            to="#"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
