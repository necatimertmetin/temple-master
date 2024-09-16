import React from "react";
import placeholderImage from "../../../../../../assets/media/elifinfotosu.jpg";



const BlackSolidNormalBorderModernPhotoFrame = ({ Parameters }) => {
    console.log("gelen Parameters =", Parameters)
    return (
        <img
            className="black-solid-border-modern-photo-frame black-solid-border-modern-photo-frame-normal-border"
            src={Parameters?.url || placeholderImage} // url parametresini doğru yerleştir
            alt="photo-1"
        />
    );
};

export default BlackSolidNormalBorderModernPhotoFrame;
