import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from '../navbar/dashboardNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/dashboard.css';
import DashboardAdspace from '../adspace/dashboardAdspace';
import axios from 'axios';
import PlaceholderImage from '../../assets/media/placeholder.jpg';
const Dashboard = () => {
    const navigate = useNavigate(); // useNavigate hook'unu burada tanımlıyoruz
    const [templates, setTemplates] = useState();
    // Yeni şablon oluşturma düğmesine tıklama işlemi
    const handleCreateTemplate = () => {
        navigate('/createTemplate');
    };


    useEffect(() => {
        const jwtToken = getCookie('userData'); // Cookie'den token'ı al
        if (!jwtToken || !isTokenValid(jwtToken)) {
            navigate('/login');
        }
        fetchTemplates(jwtToken);
    }, []);

    const fetchTemplates = async (jwtToken) => {
        try {
            const response = await axios.get('http://109.228.228.154:8080/api/templates', {
                params: {
                    userId: 1
                },
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            });
            console.log('Data:', response.data);
            const templatesCopy = [...response.data.UserTemplates];

            // Yeni bir şablon ekleyin
            templatesCopy.unshift({ id: 0 });

            setTemplates(templatesCopy);
        } catch (error) {
            console.error('Error fetching templates:', error);
            throw error;
        }
    };

    const templatesTest = [
        {},
        { id: 1, name: 'Template 1', description: 'Bu birinci şablonun açıklamasıdır.' },
        { id: 2, name: 'Template 2', description: 'Bu ikinci şablonun açıklamasıdır.' },
        { id: 1, name: 'Template 3', description: 'Bu birinci şablonun açıklamasıdır.' },
        { id: 2, name: 'Template 4', description: 'Bu ikinci şablonun açıklamasıdır.' },
        { id: 1, name: 'Template 5', description: 'Bu birinci şablonun açıklamasıdır.' },
        { id: 2, name: 'Template 6', description: 'Bu ikinci şablonun açıklamasıdır.' },
        // Diğer şablonlar
    ];

    const getCookie = (name) => {
        const cookieString = document.cookie;
        const cookies = cookieString.split('; ');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split('=');
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return null;
    };

    const isTokenValid = (token) => {
        if (!token) {
            return false;
        }

        const tokenPayload = token.split('.')[1];
        if (!tokenPayload) {
            return false;
        }

        try {
            const decodedPayload = JSON.parse(atob(tokenPayload));
            return decodedPayload.exp > Date.now() / 1000;
        } catch (error) {
            console.error("Token çözümlenirken bir hata oluştu:", error);
            return false;
        }
    };


    return (
        <div className='dashboard-container'>
            <DashboardNavbar />
            <DashboardAdspace /> {/* Reklam alanı bileşenini ekleyin */}

            <div className='dashboard-wrapper'>

                <div className="grid-container">
                    {templates && templates.map((template, index) => (
                        <div key={index} className="grid-item" >
                            {index === 0 ?
                                <div className="create-template-button" onClick={handleCreateTemplate}>
                                    <div className="create-template-link">
                                        <FontAwesomeIcon icon={faPlus} className="create-template-icon" />
                                        Yeni Şablon Oluştur
                                    </div>
                                </div>
                                :
                                <div>
                                    <img className='grid-item-img' style={{ filter: `hue-rotate(${index * 100}deg)` }} src={PlaceholderImage} alt='template gorseli bulunamadi' />
                                    <div>{template.TemplateName}</div>
                                    {/* Diğer template bilgileri */}
                                </div>
                            }
                        </div>
                    ))}


                </div>
            </div>

        </div>
    );
};



export default Dashboard;
