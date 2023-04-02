import React from 'react';


interface CenterMenuProps {
    onGalleryClick: () => void;
    onGeneratorClick: () => void;
    onLandingPageClick: () => void;
  }

const CenterMenu: React.FC<CenterMenuProps> = ({ onGalleryClick, onGeneratorClick, onLandingPageClick }) => {
  const liStyle = 'mr-[3rem] hover:cursor-pointer text-sm';

  const handleGalleryClick = () => {
    onGalleryClick();
  }

  const handleGeneratorClick = () => {
    onGeneratorClick();
  }

  const handleLandingPageClick = () => {
    onLandingPageClick();
  }

  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle} onClick={handleLandingPageClick}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle} onClick={handleGeneratorClick}>Generator</li>
        <li className={liStyle} onClick={handleGalleryClick}>Gallery</li>
      </ul>
    </div>
  );
};

export default CenterMenu;
