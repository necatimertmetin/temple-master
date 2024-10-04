import React from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin

const TextAreaTitle = ({ title }) => {
    return (
        <div className="title">{title}</div>
    );
};

// Prop types tanımlama
TextAreaTitle.propTypes = {
    title: PropTypes.string.isRequired, // 'title' prop'unun bir string ve zorunlu olduğunu belirtiyoruz
};

// Varsayılan değer atama
TextAreaTitle.defaultProps = {
    title: 'Default Title', // Varsayılan başlık
};

export default TextAreaTitle;
