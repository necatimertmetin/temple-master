import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
export function PartEditContainer({
  setButtonsVisible,
  buttonsVisible,
  deletePart,
  openModal,
  part,
}) {
  return (
    <div className="part-edit-container">
      <button
        className="part-edit-button flex-row-edit-button"
        onClick={() => {
          setButtonsVisible(!buttonsVisible);
        }}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      <div
        className={
          buttonsVisible
            ? "part-edit-button-container-visible"
            : "part-edit-button-container"
        }
      >
        <button
          className="part-edit-button flex-row-delete-button"
          onClick={() => deletePart(part.id)}
        >
          <FontAwesomeIcon icon={faTrash} /> {/* Silme ikonu */}
        </button>
        <button
          className="part-edit-button flex-row-add-button"
          onClick={() => openModal()}
        >
          <FontAwesomeIcon icon={faPlus} /> {/* Ekleme ikonu */}
        </button>
      </div>
    </div>
  );
}
