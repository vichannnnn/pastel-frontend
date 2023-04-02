import React from "react";
import Feature from "./Feature";
import Placeholder from "../assets/placeholder.png";
import Introduction from "./Introduction";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <Introduction />
      <div className="experience flex flex-col items-center justify-start bg-[#020917] min-h-screen pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <div className="headline mt-4 flex flex-col items-center text-lg text-center">
          <span>An Amazing App Can Change Your Daily Life</span>
          <span>
            <b>Music Experience</b>
          </span>
        </div>
        <div className="feature flex items-center justify-around mt-10 w-full container mx-auto px-4">
          <Feature icon={Placeholder} title="For Live Music" />
          <Feature icon={Placeholder} title="For Daily Music" />
          <Feature icon={Placeholder} title="For Artists" />
        
        </div>
      </div>
    </>
  );
}

export default LandingPage;
