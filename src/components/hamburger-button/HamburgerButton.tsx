import React, { useState } from 'react';
import './hamburger-button.scss';

const HamburgerButton = ({ setShowSidebar }: { setShowSidebar: any }) => {
  const [isCross, setIsCross] = useState(false);

  const insertedClass = isCross ? 'open' : '';

  return (
    <div className="hamburger-button-container">
      <button
        type="button"
        onClick={() => {
          setShowSidebar((prev: boolean) => !prev);

          setIsCross(!isCross);
        }}
      >
        <div className={`hamburger-div-1 ${insertedClass}`}> </div>
        <div className={`hamburger-div-2 ${insertedClass}`}> </div>
        <div className={`hamburger-div-3 ${insertedClass}`}> </div>
      </button>
    </div>
  );
};

export default HamburgerButton;
