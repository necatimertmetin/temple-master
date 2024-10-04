import React from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';

const DoubleSideCard = ({ Parameters }) => {
    const { title, content } = Parameters; // Destructuring ile değerleri al

    return (
        <div className="double-side-card flex-1">
            <div className="double-side-card-inner">
                <div className="double-side-card-front">
                    {title && <TextAreaTitle title={title} />}
                </div>
                <div className="double-side-card-back">
                    {content && <TextAreaContent content={content} />}
                </div>
            </div>
        </div>
    );
};

// Prop types tanımlama
DoubleSideCard.propTypes = {
    Parameters: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    }),
};

// Varsayılan değer atama
DoubleSideCard.defaultProps = {
    Parameters: {
        title: 'Default Title',         // Varsayılan başlık
        content: 'Default content goes here.', // Varsayılan içerik
    },
};

export default DoubleSideCard;
