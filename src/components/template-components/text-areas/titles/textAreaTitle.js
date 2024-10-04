import React from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin
import defaultValues from '../../default-values/defaultValues.json';

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
    title: defaultValues.title, // Varsayılan başlık
};

export default TextAreaTitle;
