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

// Component list by type with titles and descriptions
const componentListByType = {
    "text": [
        {
            key: "TextAreaTitle",
            title: "Title Text Area",
            description: "A component for displaying titles.",
        },
        {
            key: "TextAreaContent",
            title: "Content Text Area",
            description: "A component for displaying paragraph content.",
        },
        {
            key: "TextArea",
            title: "General Text Area",
            description: "A general text area for various text inputs.",
        },
        {
            key: "GlassmorphicTextArea",
            title: "Glassmorphic Text Area",
            description: "A stylish text area with a glassmorphic design.",
        },
        {
            key: "DoubleSideCard",
            title: "Double-Sided Card",
            description: "A card component that can display content on both sides.",
        }
    ],
    "photo": [
        {
            key: "PaperPhotoFrame",
            title: "Paper Photo Frame",
            description: "A photo frame styled to look like paper.",
        },
        {
            key: "BlackSolidNormalBorderModernPhotoFrame",
            title: "Modern Black Photo Frame",
            description: "A sleek modern photo frame with a black border.",
        }
    ],
    "video": [
        {
            key: "FilmStripVideoFrame",
            title: "Film Strip Video Frame",
            description: "A video frame styled like a film strip.",
        }
    ]
};

//paperPhotoFrame
export function getComponentByName(componentName){
    if(componentListByName.hasOwnProperty(componentName)){
        return componentListByName[componentName];
    }
    return null;
}
export function getComponentsByType(type) {
    if (componentListByType.hasOwnProperty(type)) {
        return componentListByType[type].map(({ key, title, description }) => ({
            component: componentListByName[key],
            title,
            description,
        }));
    }
    return [];
}

//textarea
//Textareacontent
//Paperphotoframe