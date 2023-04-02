import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

interface FeatureProps {
  icon: string;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const isMobile = window.innerWidth <= 768;

  const content = (
    <div className="feature flex items-center justify-center flex-col relative text-center mx-4 md:mx-12 w-full md:w-auto">
      <motion.div
        variants={variant}
        transition={{
          duration: 1,
          type: "ease-out",
        }}
        animate={`${elementIsVisible}`}
        className="icon bg-[#081730] rounded-2xl p-4"
      >
        <img src={icon} alt="" className="w-[2rem] md:w-[3rem]" />
      </motion.div>

      <span className="mt-3 md:mt-5 text-sm md:text-base">{title}</span>

      <span className="text-[#707070] mt-2 md:mt-4 text-xs md:text-sm">
        Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
        libero, sit amet laoreet lorem.
      </span>

      <span className="text-[#E600FF] underline mt-1 md:mt-[3rem] hover:cursor-pointer">
        Learn more
      </span>
    </div>
  );

  return isMobile ? (
    content
  ) : (
    <VisibilitySensor
      onChange={(isVisible: boolean) => setElementIsVisible(isVisible)}
    >
      {content}
    </VisibilitySensor>
  );
};

export default Feature;
