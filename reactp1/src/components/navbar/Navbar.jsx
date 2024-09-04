import React, { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    to: `/`,
    current: false,
    dataAos: "flip-left",
    dataAosEasing: "ease-out-cubic",
    dataAosDuration: "2000",
  },
  {
    name: "Blog",
    to: `/blogs`,
    current: false,
    dataAos: "flip-left",
    dataAosEasing: "ease-out-cubic",
    dataAosDuration: "2000",
  },
  {
    name: "Support",
    to: `/support`,
    current: false,
    dataAos: "flip-left",
    dataAosEasing: "ease-out-cubic",
    dataAosDuration: "2000",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "US", // Default country
    name: "United States",
  });

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://flagcdn.com/en/codes.json");
        const data = await response.json();
        const countryArray = Object.keys(data).map((code) => ({
          code: code.toUpperCase(),
          name: data[code],
        }));
        setCountries(countryArray);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountryData();
  }, []);

  // Function to handle the country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a
                class="navbar-brand fs-2 font-bold"
                href="#"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                AIR<span class="text-primary logo">RESERVAR</span>
              </a>
            </div>
            <div className="ms-auto hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    data-aos={item.dataAos}
                    data-aos-easing={item.dataAosEasing}
                    data-aos-duration={item.dataAosDuration}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-lg font-medium"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <img
                    alt={selectedCountry.name}
                    src={`https://flagsapi.com/${selectedCountry.code}/shiny/64.png`}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none h-64 overflow-auto">
                {countries.map((country) => (
                  <MenuItem key={country.code}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex items-center w-full px-4 py-2 text-sm text-gray-700"
                        )}
                        onClick={() => handleCountrySelect(country)}
                      >
                        <img
                          alt={`${country.name} Flag`}
                          src={`https://flagsapi.com/${country.code}/shiny/64.png`}
                          className="h-5 w-5 mr-2 rounded-full"
                        />
                        {country.name}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-900 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
