import React from 'react';
import TextAreaTitle from '../titles/textAreaTitle';
import TextAreaContent from '../paragraphs/textAreaContent';

const DoubleSideCard = ({ Parameters }) => {

    return (
        <div class="double-side-card flex-1">
            <div class="double-side-card-inner">
                <div class="double-side-card-front">
                    {Parameters?.title && <TextAreaTitle title={Parameters?.title} />}

                </div>
                <div class="double-side-card-back">
                    {Parameters?.content && <TextAreaContent content={Parameters?.content} />}
                </div>
            </div>
        </div>

    )
}
export default DoubleSideCard;