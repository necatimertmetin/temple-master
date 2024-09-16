import React, { useState } from 'react';
import '../../assets/css/dashboardNavbar.css';
import { useNavigate } from 'react-router-dom';
import UserLogo from '../../assets/media/user.png';

const DashboardNavbar = () => {
    const navigate = useNavigate();
    const username = "elif";
    const [wrapperShow, setWrapperShow] = useState(false);

    const userContentList = [
        {
            isLogout: false,
            icon: UserLogo,
            title: "Sıkça Sorulan Sorular",
            url: "/faq"
        },
        {
            isLogout: false,
            icon: UserLogo,
            title: "Ayarlar",
            url: "/dashboard"
        },
        {
            isLogout: true,
            icon: UserLogo,
            title: "Çıkış yap",
            url: "/dashboard"
        },
    ]

    const logout = () => {
        deleteCookie('userData');
        navigate('/login');
    }

    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    const NavbarUserButton = () => {
        return (
            <div className='dashboard-navbar-user-button' onClick={() => { setWrapperShow(!wrapperShow) }}>
                <img className='user-button-logo' src={UserLogo} alt='UserLogo' />
                <div className='dashboard-navbar-user-button-title'>{username}</div>
            </div>
        )
    }

    const handleContentClick = (url, isLogout) => {
        if (isLogout) {
            logout();
        } else {
            navigate(url);
        }
    }

    return (
        <div className='dashboard-navbar-container'>
            <div className='temple-logo'>
                Temple
            </div>
            <div className='dashboard-navbar-user-button-container'>
                <NavbarUserButton />
                <div className='dashboard-navbar-user-content-container'>
                    {wrapperShow && userContentList && userContentList.map((content, index) => (

                        <div key={index} className='dashboard-navbar-user-content-wrapper' onClick={() => handleContentClick(content.url, content.isLogout)}>
                            <img className='dashboard-navbar-user-content-icon' src={content.icon} alt='icon' />
                            <div className='dashboard-navbar-user-content'>{content.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;

