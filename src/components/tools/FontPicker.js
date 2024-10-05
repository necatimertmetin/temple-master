import React, { useState } from "react";
import "@fontsource/roboto"; // Google Fonts'tan Roboto
import "@fontsource/open-sans"; // Google Fonts'tan Open Sans
import "@fontsource/lobster"; // Google Fonts'tan Lobster

const FontPicker = ({ fonts, onSelectFont }) => {
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Control dropdown visibility

  // Handle font selection
  const handleFontSelect = (font) => {
    setSelectedFont(font);
    onSelectFont(font); // Pass selected font to parent component
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="custom-font-picker" style={{ margin: "20px", fontFamily: selectedFont }}>
      <div className="selected-font" onClick={toggleDropdown}>
        {selectedFont} ▼
      </div>
      {dropdownOpen && (
        <ul className="font-dropdown">
          {fonts.map((font, index) => (
            <li
              key={index}
              className="font-option"
              onClick={() => handleFontSelect(font)}
              style={{ fontFamily: font }}
            >
              {font}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontPicker;
