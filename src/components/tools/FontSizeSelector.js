import React, { useState } from "react";
import FontSizeDropdown from "./FontSizeDropdown"; // Adjust the import path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FontSizeSelector = ({ onFontSizeChange }) => {
  const [fontSize, setFontSize] = useState(12); // Default font size
  const sizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32]; // Available sizes

  // Update the font size and notify the parent component
  const handleSizeChange = (newSize) => {
    setFontSize(newSize);
    onFontSizeChange(newSize); // Notify the parent
  };

  return (
    <div className="font-size-selector">
      <button
        className="edit-button small"
        onClick={() => handleSizeChange(fontSize - 1)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <FontSizeDropdown
        sizes={sizes}
        selectedSize={fontSize}
        onSizeChange={handleSizeChange}
      />
      <button
        className="edit-button small"
        onClick={() => handleSizeChange(fontSize + 1)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default FontSizeSelector;
