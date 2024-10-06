import React, { useState, useEffect } from "react";

const FontSizeDropdown = ({ sizes, selectedSize, onSizeChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedSize); // Store the input value

  useEffect(() => {
    setInputValue(selectedSize)
  },[selectedSize])
  // Handle size selection from dropdown
  const handleSizeSelect = (size) => {
    setInputValue(size); // Update input value when selecting from dropdown
    onSizeChange(size); // Notify parent component
    setDropdownOpen(false); // Close dropdown after selection
  };

  // Handle manual input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value); // Update input value
    onSizeChange(value); // Notify parent component
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="font-size-dropdown">
      <input
        type="text"
        className="font-size-input edit-button small"
        value={inputValue}
        onChange={handleInputChange}
        onClick={toggleDropdown} // Optional: Click to toggle dropdown
      />

      {dropdownOpen && (
        <ul className="dropdown-list">
          {sizes.map((size, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontSizeDropdown;
