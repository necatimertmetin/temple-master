import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFont,
  faPalette,
  faBold,
  faItalic,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import "../../../assets/css/textEditContainer.css";
import FontPicker from "../../tools/FontPicker";

const fonts = ["Roboto", "Open Sans", "Lobster", "Montserrat"];

const TextEditContainer = ({ onSelectFont }) => {
  // Handle font selection and send the selected font to the parent
  const [fontSelector, setFontSelector] = useState(false);
  const handleFontSelect = (font) => {
    onSelectFont(font); // Call the parent's callback
  };

  return (
    <div className="text-edit-container">
      {fontSelector && (
        <FontPicker fonts={fonts} onSelectFont={handleFontSelect} />
      )}
      <button
        className="edit-button small"
        onClick={() => setFontSelector(!fontSelector)}
      >
        <FontAwesomeIcon icon={faFont} />
      </button>
      <button className="edit-button small">
        <FontAwesomeIcon icon={faPalette} />
      </button>
      <button className="edit-button small">
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button className="edit-button small">
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button className="edit-button small">
        <FontAwesomeIcon icon={faUnderline} />
      </button>
    </div>
  );
};

export default TextEditContainer;
