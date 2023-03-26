import React from "react";
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
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";

  return (
    <div className="header bg-[#081730] text-white flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      <img
        src={logo}
        alt=""
        className="logo w-[42px] h-[42px]"
        style={{ cursor: "pointer" }}
        onClick={onClicks.onLandingPageClick}
      />
      <CenterMenu onGalleryClick={onClicks.onGalleryClick} onGeneratorClick={onClicks.onGeneratorClick} />
      <div className="buttons flex">
        <button
          className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}
          onClick={onClicks.onGalleryClick}
        >
          Log in
        </button>
        <button
          className={`${buttonStyle} bg-[#232A4E]`}
          onClick={onClicks.onLandingPageClick}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
