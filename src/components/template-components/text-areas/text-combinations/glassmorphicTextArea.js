import React from 'react';
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';

const GlassmorphicTextArea = ({Parameters}) => {

    return(
        <div className="text-area flex-1 flex-centered x">
        {Parameters?.title && <TextAreaTitle title={Parameters?.title} />}
        {Parameters?.content && <TextAreaContent content={Parameters?.content} />}

    </div>
    )
}
export default GlassmorphicTextArea;

