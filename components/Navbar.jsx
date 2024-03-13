"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/images/logo-white.png";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="max-w-7xl sm:px-6 lg:px-8 px-2 mx-auto">
        <div className="relative flex items-center justify-between h-20">
          <div className="md:hidden absolute inset-y-0 left-0 flex items-center">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white relative inline-flex items-center justify-center p-2 text-gray-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div className="md:items-stretch md:justify-start flex items-center justify-center flex-1">
            {/* <!-- Logo --> */}
            <Link className="flex items-center flex-shrink-0" href="/">
              <Image
                className="w-auto h-10"
                src={logo}
                alt="PropertyPulse"
                priority={true}
              />

              <span className="md:block hidden ml-2 text-2xl font-bold text-white">
                PropertyPulse
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className="md:ml-6 md:block hidden">
              <div className="space-x-2 flex">
                <Link
                  href="/"
                  className="hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-white bg-black"
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className="hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-white"
                >
                  Properties
                </Link>
                <Link
                  href="/add"
                  className="hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-white"
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          <div className="md:block md:ml-6 hidden">
            <div className="flex items-center">
              <button className="hover:bg-gray-900 hover:text-white rounded-md flex items-center px-3 py-2 text-white bg-gray-700">
                <FaGoogle className="mr-2 text-white" />
                <span>Login or Register</span>
              </button>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged In) --> */}
          <div className="md:static md:inset-auto md:ml-6 md:pr-0 absolute inset-y-0 right-0 flex items-center pr-2">
            <a href="/messages" className="group relative">
              <button
                type="button"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative p-1 text-gray-400 bg-gray-800 rounded-full"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <span className="transform translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                2
                {/* <!-- Replace with the actual number of notifications --> */}
              </span>
            </a>
            {/* <!-- Profile dropdown button --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative flex text-sm bg-gray-800 rounded-full"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 rounded-full"
                    src={profileDefault}
                    alt=""
                  />
                </button>
              </div>

              {/* <!-- Profile dropdown --> */}
              {isProfileMenuOpen && (
                <div
                  id="user-menu"
                  className="origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-48 py-1 mt-2 bg-white shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="saved"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Saved Properties
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="/"
              className="rounded-md block px-3 py-2 text-base font-medium text-white bg-gray-900"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="hover:bg-gray-700 hover:text-white rounded-md block px-3 py-2 text-base font-medium text-gray-300"
            >
              Properties
            </Link>
            <Link
              href="/add"
              className="hover:bg-gray-700 hover:text-white rounded-md block px-3 py-2 text-base font-medium text-gray-300"
            >
              Add Property
            </Link>
            <button className="hover:bg-gray-900 hover:text-white rounded-md flex items-center px-3 py-2 my-4 text-white bg-gray-700">
              <FaGoogle className="mr-2 text-white" />
              <span>Login or Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
