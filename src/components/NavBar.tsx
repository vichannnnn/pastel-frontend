import React, { useState, useEffect } from "react";
import CenterMenu from "./CenterMenu";
import logo from "../assets/MuzicLogo.png";

interface NavBarProps {
  onClicks: {
    onGalleryClick: () => void;
    onLandingPageClick: () => void;
    onGeneratorClick: () => void;
  };
}

const NavBar: React.FC<NavBarProps> = ({ onClicks }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header className="bg-[#081730] text-white py-4 px-4 md:px-20">
      <div className="flex items-center justify-between">
        <img
          src={logo}
          alt=""
          className="w-10 h-10 cursor-pointer"
          onClick={onClicks.onLandingPageClick}
        />
        <div className="-mr-2 md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-10">
          <CenterMenu {...onClicks} />
          <div className="flex items-center space-x-8">
            <button
              className="text-white border-2 border-[#232A4E] py-1 px-6 rounded-md"
              onClick={onClicks.onGalleryClick}
            >
              Log in
            </button>
            <button
              className="text-white bg-[#232A4E] border-2 border-[#232A4E] py-1 px-6 rounded-md"
              onClick={onClicks.onLandingPageClick}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuVisible ? "block" : "hidden"
        } md:hidden mt-4`}
      >
        <CenterMenu {...onClicks} isVertical={true} />
        <div className="mt-4 flex flex-col space-y-2">
          <button
            className="text-white border-2 border-[#232A4E] py-1 px-6 rounded-md w-full"
            onClick={onClicks.onGalleryClick}
          >
            Log in
          </button>
          <button
            className="text-white bg-[#232A4E] border-2 border-[#232A4E] py-1 px-6 rounded-md w-full"
            onClick={onClicks.onLandingPageClick}
          >
            Sign up
          </button>
        </div>
      </div>
      </header>
  );
};

export default NavBar;