import React from 'react';
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';

const TextArea = ({Parameters}) => {

    return (
        <div className="text-area flex-1 flex-centered">
            {Parameters?.title && <TextAreaTitle title={Parameters?.title} />}
            {Parameters?.content && <TextAreaContent content={Parameters?.content} />}

        </div>
    )

}
export default TextArea;