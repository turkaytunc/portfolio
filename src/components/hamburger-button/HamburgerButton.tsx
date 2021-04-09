import React from 'react';
import './hamburger-button.scss';

const HamburgerButton = ({ setShowSidebar }: { setShowSidebar: any }) => {
  return (
    <div className="hamburger-button-container">
      <button type="button" onClick={() => setShowSidebar((prev: boolean) => !prev)}>
        <div> </div>
        <div> </div>
        <div> </div>
      </button>
    </div>
  );
};

export default HamburgerButton;