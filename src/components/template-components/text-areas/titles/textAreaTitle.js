import React, { useState } from 'react';
import PropTypes from 'prop-types';
import defaultValues from '../../default-values/defaultValues.json';

const TextAreaTitle = ({ title, editable, onDataChange }) => {
    // Initialize the state to manage the input value
    const [inputValue, setInputValue] = useState(defaultValues.title);

    // Handle input change
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue); // Update local state
        onDataChange(newValue); // Send new value to parent via the callback
    };

    return (
        <>
            {editable ? (
                <input
                    type="text"
                    className="title"
                    value={inputValue} // Bind input to local state
                    placeholder={defaultValues.title} // Use default title as placeholder
                    onChange={handleInputChange} // Trigger when input changes
                />
            ) : (
                <div className="title">{title}</div>
            )}
        </>
    );
};

// Prop types definition
TextAreaTitle.propTypes = {
    title: PropTypes.string.isRequired, // 'title' prop should be a required string
    onDataChange: PropTypes.func
};

// Default prop value
TextAreaTitle.defaultProps = {
    title: defaultValues.title, // Default title value
};

export default TextAreaTitle;
