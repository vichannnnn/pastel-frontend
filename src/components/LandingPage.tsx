import React from "react";
import Feature from "./Feature";
import Placeholder from "../assets/placeholder.png";
import Introduction from "./Introduction";


function LandingPage() {
    return (
      <>
        <Introduction />
        <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
          <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
              <b>Music Experience</b>
            </span>
          </div>
          <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon={Placeholder} title="For Live Music" />
            <Feature icon={Placeholder} title="For Daily Music" />
            <Feature icon={Placeholder} title="For Artists" />
          </div>
        </div>
      </>
    );
  }
  

export default LandingPage;
