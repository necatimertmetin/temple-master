import React from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';
import defaultValues from '../../default-values/defaultValues.json';
const GlassmorphicTextArea = ({ Parameters }) => {
    return (
        <div className="text-area flex-1 flex-centered x">
            {Parameters?.title && <TextAreaTitle title={Parameters.title} />}
            {Parameters?.content && <TextAreaContent content={Parameters.content} />}
        </div>
    );
};

// Prop types tanımlama
GlassmorphicTextArea.propTypes = {
    Parameters: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    }),
};

// Varsayılan değer atama
GlassmorphicTextArea.defaultProps = {
    Parameters: {
        title: defaultValues.title,           // Varsayılan başlık
        content: defaultValues.content, // Varsayılan içerik
    },
};

export default GlassmorphicTextArea;
