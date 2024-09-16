import React from 'react';
import TextAreaTitle from '../text-areas/titles/textAreaTitle';
import TextAreaContent from '../text-areas/paragraphs/textAreaContent';
import PaperPhotoFrame from '../frames/photo/paper/paperPhotoFrame';
import TextArea from '../text-areas/text-combinations/textArea';
import BlackSolidNormalBorderModernPhotoFrame from '../frames/photo/modern/black/blackSolidNormalBorderModernPhotoFrame';
import GlassmorphicTextArea from '../text-areas/text-combinations/glassmorphicTextArea';
import FilmStripVideoFrame from '../frames/video/video-frames/filmStrip';
import DoubleSideCard from '../text-areas/text-combinations/doubleSideCard';

const componentListByName = {
    "TextAreaTitle": TextAreaTitle,
    "TextAreaContent": TextAreaContent,
    "PaperPhotoFrame": PaperPhotoFrame,
    "TextArea" : TextArea,
    "BlackSolidNormalBorderModernPhotoFrame": BlackSolidNormalBorderModernPhotoFrame,
    "GlassmorphicTextArea" : GlassmorphicTextArea,
    "FilmStripVideoFrame" : FilmStripVideoFrame,
    "DoubleSideCard" : DoubleSideCard,
}

//paperPhotoFrame
export function getComponentByName(componentName){
    if(componentListByName.hasOwnProperty(componentName)){
        return componentListByName[componentName];
    }
    return null;
}

//textarea
//Textareacontent
//Paperphotoframe