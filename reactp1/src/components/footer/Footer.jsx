import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto pt-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gray-800">
      <div>
        <p className="py-4">
         Welcome to AIRRESERVAR a reliable flight booking website, Book your flight for your destination.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-evenly mt-6">
        <div>
          <h6 className="font-medium text-gray-300 text-center">Legal</h6>
          <ul>
            <li className="py-2 text-sm"><NavLink to={`/termsandcondition`} className="text-gray-300 hover:text-white">Privacy & Policy</NavLink></li>
            <li className="py-2 text-sm"><NavLink to={`/termsandcondition`} className="text-gray-300 hover:text-white">Terms & Conditions</NavLink></li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-300 text-center">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-300 text-center">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm"><NavLink to={`/blogs`} className="text-gray-300 hover:text-white">Blogs</NavLink></li>
            <li className="py-2 text-sm">Jobs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
