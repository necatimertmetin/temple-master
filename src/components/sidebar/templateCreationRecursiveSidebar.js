

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/templateSidebar.css";
import { getComponentByName } from "../template-components/component-utils/componentFinder"; // Adjust the import path accordingly

const TemplateCreationRecursiveSidebar = ({ itemTypeList, handleSidebarItemSelect }) => {
  return (
    <div className="template-creation-sidebar">
      {itemTypeList.map((item, index) => {
        console.log(item)
        return (
          <div
            key={index}
            className="template-creation-sidebar-item-type-row"
            onClick={() => {
              handleSidebarItemSelect(item);
            }}
          >
            {item.icon && (
              <FontAwesomeIcon icon={item.icon} style={{ fontSize: "28px" }} />
            )}
            {/* Display the title */}
            {(!item.component && item.title) && <p>{item.title}</p>}
            
            {/* Render the component directly within the sidebar */}
            {item.component && <item.component/>}
            
          </div>
        );
      })}
    </div>
  );
};

export default TemplateCreationRecursiveSidebar;