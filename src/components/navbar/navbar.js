import React, { useState, useEffect } from 'react';
import '../../assets/css/navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import YoutubeIcon from "../../assets/media/youtube.png";
import FacebookIcon from "../../assets/media/facebook.png";
import InstagramIcon from "../../assets/media/instagram.png";
import GithubIcon from "../../assets/media/github.png";
import LineIcon from "../../assets/media/line.png";
import LinkedInIcon from "../../assets/media/linkedin.png";
import PatreonIcon from "../../assets/media/patreon.png";
import SnapchatIcon from "../../assets/media/snapchat.png";
import SpotifyIcon from "../../assets/media/spotify.png";
import TelegramIcon from "../../assets/media/telegram.png";
import TwitchIcon from "../../assets/media/twitch.png";
import TwitterIcon from "../../assets/media/twitter.png";
import VkIcon from "../../assets/media/vk.png";
import WhatsappIcon from "../../assets/media/whatsapp.png";


import Marquee from "react-fast-marquee";


const Navbar = () => {
    const navigate = useNavigate();
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    const handleLoginClick = () => {
        document.body.style.cursor = 'auto'; 
        navigate('/login')
        
      };

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleIconHover = (iconIndex) => {
        setHoveredIcon(iconIndex);
    };

    const handleIconLeave = () => {
        setHoveredIcon(null);
    };
    const icons = [
        { src: InstagramIcon, alt: 'Instagram' },
        { src: FacebookIcon, alt: 'Facebook' },
        { src: GithubIcon, alt: 'Github' },
        { src: LinkedInIcon, alt: 'LinkedIn' },
        { src: LineIcon, alt: 'Line' },
        { src: PatreonIcon, alt: 'Patreon' },
        { src: SnapchatIcon, alt: 'Snapchat' },
        { src: SpotifyIcon, alt: 'Spotify' },
        { src: TelegramIcon, alt: 'Telegram' },
        { src: TwitchIcon, alt: 'Twitch' },
        { src: TwitterIcon, alt: 'Twitter' },
        { src: VkIcon, alt: 'VK' },
        { src: WhatsappIcon, alt: 'Whatsapp' }
    ];
    

    return (

        <div className='landing-navbar'>
            <div className="landing-navbar-left">
                <div className='landing-navbar-logo-container'>
                    <img src={"https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg"} alt='icon' />
                </div>
                <div className="navbar-vertical-line" />
                <div className="navbar-social-button-container">
                    <Marquee
                        pauseOnHover={true}
                        direction='right'
                        className="navbar-social-marquee"
                        autoFill={true}
                        speed={20}
                    >
                        {icons.map((icon, index) => (
                            <img
                                key={index}
                                src={icon.src}
                                alt={icon.alt}
                                className="navbar-social-icon"
                                onMouseEnter={() => handleIconHover(index)}
                                onMouseLeave={handleIconLeave}
                                style={{
                                    filter: hoveredIcon !== null && hoveredIcon !== index ? 'blur(2px)' : '',
                                    transition: 'filter 0.2s ease'
                                }}
                            />
                        ))}
                    </Marquee>


                </div>
            </div>
            <div className="landing-navbar-right">
                <div className={`landing-navbar-item-container ${hamburgerVisible ? 'landing-navbar-item-container-visible' : 'landing-navbar-item-container-hidden'}`}>
                    <div className="landing-navbar-item landing-navbar-item-active">
                        Home
                    </div>
                    <div className="landing-navbar-item">
                        Features
                    </div>
                    <div className="landing-navbar-item">
                        Demo
                    </div>
                    <div className="landing-navbar-item">
                        Gallery
                    </div>
                    <div className="landing-navbar-item">
                        About
                    </div>
                    <div className="landing-navbar-item">
                        404 Page
                    </div>
                    <div className="landing-navbar-item">
                        Contact
                    </div>
                </div>
                <input type="checkbox" id="checkbox" onClick={() => { setHamburgerVisible(!hamburgerVisible) }} />
                <label for="checkbox" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
                <div className="login-button-grad landing-login-button" onClick={() => { handleLoginClick() }} >Giriş Yap</div>
            </div>

        </div>
    )


}
export default Navbar;

