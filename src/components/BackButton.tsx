import React from "react";
import "./BackButton.css";

interface BackButtonProps {
  onBack: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onBack }) => {
  return (
    <button className="back-button" onClick={onBack}>
      Back
    </button>
  );
};

export default BackButton;
