import React, { useState } from "react";
import { getComponentByName } from "../../component-utils/componentFinder";
import SelectComponentModal from "../../../modals/selectComponentModal";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const FlexRowPart = ({ Components, onDataChange, deletePart, part }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localComponents, setLocalComponents] = useState([]);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleComponentSelect = (selectedComponent) => {
    console.log(selectedComponent);
    setLocalComponents([
      ...localComponents,
      { id: uuidv4(), component: selectedComponent },
    ]);
    closeModal();
  };
  return (
    <div className="template-row">
      {Components?.map((component, index) => {
        const ComponentName = component.ComponentName;
        const TheComponent = getComponentByName(ComponentName);

        return (
          <TheComponent
            key={index}
            Parameters={component.Parameters || {}} // Ensure a default empty object for Parameters
          />
        );
      })}
      {localComponents.length > 0 &&
        localComponents.map((item, index) => (
          <item.component
            key={index}
            editable={true}
            onDataChange={onDataChange}
          />
        ))}
      {/* Placeholder when no components are added */}
      {!Components && (
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
                ? "part-edit-button-container"
                : "part-edit-button-container-visible"
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
      )}

      {/* Automatically open the modal */}
      {isModalOpen && (
        <SelectComponentModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          handleComponentSelect={handleComponentSelect}
        />
      )}
    </div>
  );
};

export default FlexRowPart;
