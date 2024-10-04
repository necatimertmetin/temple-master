import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "../../assets/css/template.css";
import FlexRowPart from "../template-components/flex-parts/row-part/flexRowPart";
import axios from 'axios';
import heart from "../../assets/media/heart.mp4";

const Template = () => {
    const { templateId } = useParams(); // Get templateId from URL
    const [templateData, setTemplateData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = getCookie('jwt'); // Retrieve token from cookie
                const response = await axios.get(`http://localhost:8080/api/template?templateId=${templateId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Use token in the Authorization header
                    }
                });
                console.log(response.data.TemplateData);
                setTemplateData(response.data.TemplateData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
            }
        };

        fetchData();
    }, [templateId]); // Add templateId as a dependency

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!templateData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={heart} type="video/mp4" />
            </video>
            <div className="big-title">Sevgililer Günü</div>
            <div className="template-column">
                {templateData.Parts.map((part, index) => (
                    <FlexRowPart key={index} Components={part.Components} />
                ))}
            </div>
        </>
    );
};

export default Template;

function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}
