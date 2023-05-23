import React, { useState } from "react";
import "./floatButtonStyles.css"; // Import the CSS file for styles

const FloatButton = ({ onClicks }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Passing action to dashboard for scroll up event
    onClicks();
    // Perform additional actions or animations here

    setTimeout(() => {
      setIsClicked(false);
    }, 5000); // Reset the state after 5 seconds
  };

  return (
    <div
      className={`floating-button ${isClicked ? "spin" : ""}`}
      onClick={handleClick}
    >
      <i className="fas fa-arrow-up"></i> {/* Replace with your icon */}
    </div>
  );
};

export default FloatButton;
