import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/templateSidebar.css";
import { getComponentsByType } from "../template-components/component-utils/componentFinder"; // Adjust the import path accordingly
import TemplateCreationRecursiveSidebar from "./templateCreationRecursiveSidebar";
import {
  faImage,
  faVideo,
  faFileAlt,
  faMusic,
  faLink,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"; // Corrected import

const TemplateSidebar = () => {
  // Define itemTypeList in the parent component
  const [componentList, setComponentList] = useState([]);
  const itemTypeList = [
    { title: "Fotograf", key: "photo", icon: faImage },
    { title: "Video", key: "video", icon: faVideo },
    { title: "Metin", key: "text", icon: faFileAlt },
    { title: "Ses", key: "audio", icon: faMusic },
    { title: "Link", key: "link", icon: faLink },
    { title: "Twitter", key: "twitter", icon: faTwitter },
    { title: "Instagram", key: "instagram", icon: faInstagram },
    { title: "YouTube", key: "youtube", icon: faYoutube },
    { title: "Facebook", key: "facebook", icon: faFacebook }
  ];

  const handleSidebarItemSelect = (item) => {
    console.log(item);
    setComponentList(getComponentsByType(item.key));
  };

  return (
    <div className="template-creation-sidebar-container">
      <TemplateCreationRecursiveSidebar
        itemTypeList={itemTypeList}
        handleSidebarItemSelect={handleSidebarItemSelect}
      />
      {componentList.length > 0 && (
        <TemplateCreationRecursiveSidebar
          itemTypeList={componentList}
          handleSidebarItemSelect={handleSidebarItemSelect}
        />
      )}
    </div>
  );
};

export default TemplateSidebar;
