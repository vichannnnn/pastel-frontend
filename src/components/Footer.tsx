import React from "react";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";
import "./Footer.css"

const Footer: React.FC = () => {
  const SocialStyle = "rounded-full border-2 border-whit p-2 ";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <div className="flex w-[100%] justify-center mt-14 space-x-14">
        <div className={SocialStyle}>
          <Facebook color="primary" className="mx-auto" />
        </div>{" "}
        <div className={SocialStyle}>
          <Twitter color="primary" className="mx-auto" />
        </div>{" "}
        <div className={SocialStyle}>
          <YouTube color="primary" className="mx-auto" />
        </div>{" "}
        <div className={SocialStyle}>
          <LinkedIn color="primary" className="mx-auto" />
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
        Vestibulum ullamcorper volutpat varius.
      </span>
    </div>
  );
}

export default Footer;
