import React from 'react';

interface CenterMenuProps {
  onGalleryClick: () => void;
  onGeneratorClick: () => void;
  onLandingPageClick: () => void;
  isVertical?: boolean;
}

const CenterMenu: React.FC<CenterMenuProps> = ({ onGalleryClick, onGeneratorClick, onLandingPageClick, isVertical }) => {
  const liStyle = isVertical ? 'mb-2 hover:cursor-pointer text-sm' : 'mr-[3rem] hover:cursor-pointer text-sm';
  const ulStyle = isVertical ? 'flex flex-col space-y-2' : 'flex w-[100%] justify-between';

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
      <ul className={ulStyle}>
        <li className={liStyle} onClick={handleLandingPageClick}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle} onClick={handleGeneratorClick}>Generator</li>
        <li className={liStyle} onClick={handleGalleryClick}>Gallery</li>
      </ul>
    </div>
  );
};

export default CenterMenu;
