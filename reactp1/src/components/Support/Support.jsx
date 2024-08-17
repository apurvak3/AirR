import React from "react";
import Navbar from "../navbar/Navbar.jsx";

import { Search, Plane, CreditCard, Package, Cookie } from "lucide-react";

const HelpCenter = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to Help Centre
        </h1>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        user@gmail.com/
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      placeholder="Write your Query"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <h2 className="text-2xl font-semibold my-4">Explore help articles</h2>

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
              {
                text: "What privacy and data subject are available",
                href: "#",
              },
            ]}
          />
        </div>
      </div>
    </>
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
