import React, { useState } from "react";
import { getComponentByName } from "../../component-utils/componentFinder";
import SelectComponentModal from "../../../modals/selectComponentModal";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

const FlexRowPart = ({ Components }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localComponents, setLocalComponents] = useState([]);
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
      {!Components &&
        localComponents.length > 0 &&
        localComponents.map((item, index) => <item.component key={index} />)}
      {/* Placeholder when no components are added */}
      {!Components && (
        <div className="placeholder-part" onClick={() => openModal()}>
          <div className="placeholder-component">Add Component</div>
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
