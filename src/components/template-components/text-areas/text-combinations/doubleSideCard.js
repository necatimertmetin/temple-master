import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // PropTypes kütüphanesini import edin
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';
import defaultValues from '../../default-values/defaultValues.json';

const DoubleSideCard = ({ Parameters }) => {
    // Varsayılan değerleri state içinde sakla
    const [defaults, setDefaults] = useState({});

    useEffect(() => {
        // JSON dosyasından varsayılan değerleri yükle
        setDefaults(defaultValues);
    }, []);

    const { title = defaults.title, content = defaults.content } = Parameters || {}; // Eğer Parameters undefined ise varsayılan değerleri kullan

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
    Parameters: {}, // Başlangıçta boş bir nesne
};

export default DoubleSideCard;
