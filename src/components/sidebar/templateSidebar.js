import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../assets/css/templateSidebar.css";
import imageIcon from "../../assets/media/landscape-photo-frames-500x500.webp";

const TemplateSidebar = () => {
    const itemTypeList = [
        { title: "Fotograf", img: imageIcon },
        { title: "Video" },
        { title: "Metin" },
        { title: "Ses" },
        { title: "Link" },
        { title: "Twitter" },
        { title: "Instagram" },
        { title: "YouTube" },
        { title: "Facebook" }
    ];

    return (
        <div className="template-creation-sidebar">
            {itemTypeList.map((item, index) => (
                <div key={index} className="template-creation-sidebar-item-type-row">
                    {item.img && <img src={item.img} alt="img" />}
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default TemplateSidebar;
