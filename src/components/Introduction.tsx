import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Landing from "../assets/introduction.png";

const Introduction: React.FC = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  function handleVisibilityChange(isVisible: boolean) {
    setElementIsVisible(isVisible);
  }

  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} minTopValue={300}>
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3] text-white">
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
          <span>Create stunning</span>{" "}
          <span>
            <b>Pastel Art</b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Create personalized Pastel anime art with our AI-powered model.
            <br />
            Start generating stunning artwork in just a few clicks!
          </span>
          <div></div>
        </div>
        <div className="images relative w-full">
          {/* <motion.img 
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={Landing}
            alt=""
            width={600}
            height={800}
            className="absolute top-[-8rem] left-[19rem] max-h-[25.5rem] object-fit-cover"
          /> */}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Introduction;
