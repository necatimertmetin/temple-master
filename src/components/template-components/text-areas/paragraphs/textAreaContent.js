import React from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin

const TextAreaContent = ({ content }) => {
    return (
        <div className="text-1">{content}</div>
    );
};

// Prop types tanımlama
TextAreaContent.propTypes = {
    content: PropTypes.string.isRequired, // 'content' prop'unun bir string ve zorunlu olduğunu belirtiyoruz
};

// Varsayılan değer atama
TextAreaContent.defaultProps = {
    content: 'Default content goes here.', // Varsayılan içerik
};

export default TextAreaContent;
