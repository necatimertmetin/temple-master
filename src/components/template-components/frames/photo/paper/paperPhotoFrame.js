import React from 'react';
import PlaceholderImg from '../../../../../assets/media/elifinfotosu.jpg';
const PaperPhotoFrame = ({ Parameters }) => {

    return (
        <div className="paper-photo-frame flex-1 flex-centered">
            <img src={Parameters?.url || PlaceholderImg} alt="photo-1" />
        </div>
    )
}

export default PaperPhotoFrame;