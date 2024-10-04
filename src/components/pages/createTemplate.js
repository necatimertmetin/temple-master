import React, { useState } from "react";
import TemplateSidebar from "../sidebar/templateSidebar";
import {
  faImage,
  faVideo,
  faFileAlt,
  faMusic,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faInstagram,
    faYoutube,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons"; // Corrected import
  
import { getComponentsByType } from "../template-components/component-utils/componentFinder";

const Createtemplate = () => {
  // Define itemTypeList in the parent component
  const [componentList, setComponentList] = useState([]);
  const itemTypeList = [
    { title: "Fotograf", key: "photo", icon: faImage },
    { title: "Video", key: "video", icon: faVideo },
    { title: "Metin", key: "text", icon: faFileAlt },
    { title: "Ses", icon: faMusic },
    { title: "Link", icon: faLink },
    { title: "Twitter", icon: faTwitter },
    { title: "Instagram", icon: faInstagram },
    { title: "YouTube", icon: faYoutube },
    { title: "Facebook", icon: faFacebook },
  ];

  const handleSidebarItemSelect = (item) => {
    console.log(item);
    setComponentList(getComponentsByType(item.key));
  };

  return (
    <div className="template-creation-sidebar-container">
      <TemplateSidebar
        itemTypeList={itemTypeList}
        handleSidebarItemSelect={handleSidebarItemSelect}
      />
      {componentList.length > 0 && (
        <TemplateSidebar
          itemTypeList={componentList}
          handleSidebarItemSelect={handleSidebarItemSelect}
        />
      )}
    </div>
  );
};

export default Createtemplate;
