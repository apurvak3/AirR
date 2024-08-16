import React from "react";
import Navbar from "../navbar/Navbar";

import { Search, Plane, CreditCard, Package, Cookie } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Help Centre</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Explore help articles</h2>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search help articles"
            className="w-full p-3 pr-10 border rounded-lg"
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HelpSection
          title="Flight"
          icon={<Plane />}
          links={[
            { text: "Book a flight using an airline credit", href: "#" },
            { text: "Airline-initiated schedule change", href: "#" },
            { text: "Cancel your flight", href: "#" },
          ]}
        />
        <HelpSection
          title="Refunds & Charges"
          icon={<CreditCard />}
          links={[
            { text: "Refund timelines, policies & processes", href: "#" },
            { text: "Get a receipt for your booking", href: "#" },
            { text: "Payment security and options", href: "#" },
          ]}
        />
        <HelpSection
          title="Terms and condition"
          icon={<Package />}
          links={[
            { text: "Change your vacation package", href: "#" },
            { text: "Airline telephone numbers", href: "#" },
            { text: "Cancel your vacation package", href: "#" },
          ]}
          />
          <HelpSection
          title="Privacy And policy"
          icon={<Cookie />}
          links={[
            { text: "Update your account Information", href: "#" },
            { text: "Information About your Privacy", href: "#" },
            { text: "What privacy and data subject are available", href: "#" },
          ]}
        />
      </div>
    </div>
  );
};

const HelpSection = ({ title, icon, links }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-500 hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className="block mt-4 text-blue-500 hover:underline">
        More &gt;
      </a>
    </div>
  );
};

export default HelpCenter;
