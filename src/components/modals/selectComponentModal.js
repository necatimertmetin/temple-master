import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/selectComponentModal.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
} from "@fortawesome/free-brands-svg-icons";
import { getComponentsByType } from "../template-components/component-utils/componentFinder";

const SelectComponentModal = ({ isOpen, closeModal, handleComponentSelect }) => {
  const modalRef = useRef(null); // Reference for the modal content
  const [componentList, setComponentList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // State to manage selected tab

  const itemTypeList = [
    { title: "Fotograf", key: "photo", icon: faImage },
    { title: "Video", key: "video", icon: faVideo },
    { title: "Metin", key: "text", icon: faFileAlt },
    { title: "Ses", key: "audio", icon: faMusic },
    { title: "Link", key: "link", icon: faLink },
    { title: "Twitter", key: "twitter", icon: faTwitter },
    { title: "Instagram", key: "instagram", icon: faInstagram },
    { title: "YouTube", key: "youtube", icon: faYoutube },
  ];

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(); // Close modal if clicking outside of modal content
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  // Populate component list when the modal opens
  useEffect(() => {
    if (isOpen) {
      setComponentList(getComponentsByType(itemTypeList[selectedIndex].key)); // Set components based on the default selected index
    }
  }, [isOpen, selectedIndex]); // Dependency array includes selectedIndex

  // Don't render the modal unless isOpen is true
  if (!isOpen) {
    return null;
  }

  const handleSidebarItemSelect = (item) => {
    console.log(item);
    setComponentList(getComponentsByType(item.key)); // Update component list based on selected tab
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <Tabs selectedIndex={selectedIndex} onSelect={index => { 
            setSelectedIndex(index); // Update selected index on tab select
            handleSidebarItemSelect(itemTypeList[index]); // Update component list
          }}>
          <TabList>
            {itemTypeList.map((item, index) => (
              <Tab key={index}>
                {item.title}
              </Tab>
            ))}
          </TabList>
          {itemTypeList.map((_, index) => (
            <TabPanel key={index}>
              {componentList.map((item, componentIndex) => (
         
         <button className="button" onClick={() => handleComponentSelect(item.component)} >
                <item.component key={componentIndex} />
                </button>
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SelectComponentModal;
