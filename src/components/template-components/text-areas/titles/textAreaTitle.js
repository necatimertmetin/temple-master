import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultValues from "../../default-values/defaultValues.json";
import TextEditContainer from "../textEditContainer";

const TextAreaTitle = ({ title, editable, onDataChange }) => {
  // Initialize the state to manage the input value
  const [inputValue, setInputValue] = useState(defaultValues.title);
  const [localEditable, setLocalEditable] = useState(editable);
  const [textEditor, setTextEditor] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Roboto"); // Default font
  const [fontSize, setFontSize] = useState(14);
  // Handle input change
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); // Update local state
    onDataChange(newValue); // Send new value to parent via the callback
  };

  // Handle font selection from TextEditContainer
  const handleSelectFont = (font) => {
    setSelectedFont(font); // Update the selected font state
  };
  const onFontSizeChange = (size) => {
    setFontSize(size); // font size changes
  }

  return (
    <>
      {localEditable ? (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            className="title"
            value={inputValue} // Bind input to local state
            placeholder={defaultValues.title} // Use default title as placeholder
            onChange={handleInputChange} // Trigger when input changes
            onFocus={() => setTextEditor(!textEditor)}
            style={{ fontFamily: selectedFont, fontSize: fontSize+"px" }} // Apply selected font to input
          />
          <TextEditContainer onSelectFont={handleSelectFont} onFontSizeChange={onFontSizeChange}/>
        </div>
      ) : (
        <div className="title" style={{ fontFamily: selectedFont }}>
          {title}
        </div>
      )}
    </>
  );
};

// Prop types definition
TextAreaTitle.propTypes = {
  title: PropTypes.string.isRequired, // 'title' prop should be a required string
  onDataChange: PropTypes.func,
};

// Default prop value
TextAreaTitle.defaultProps = {
  title: defaultValues.title, // Default title value
};

export default TextAreaTitle;
