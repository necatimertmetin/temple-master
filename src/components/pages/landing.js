import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/landing.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
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
import IpadFrame from "../../assets/media/ipad.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VANTA from 'vanta';
import * as THREE from 'three'; // THREE.js kütüphanesini yükleyin
import CLOUDS from 'vanta/dist/vanta.birds.min.js'; // Doğru dosya yolunu kullanın
import PayPerClickIcon from "../../assets/media/pay-per-click.png";
import SocialNetworkIcon from "../../assets/media/social-network.png";
import WebDesignIcon from "../../assets/media/web-design.png";
import arrowIcon from "../../assets/media/arrow.png";
import AnimatedCursor from "react-animated-cursor";
const Landing = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null)
  const [customCursor, setCustomCursor] = useState(true);
  const JoinTheNextRef = useRef(null);
  const CardContainerRef = useRef(null);
  const executeScroll = () => JoinTheNextRef.current.scrollIntoView()
  const executeCardContainerScroll = () => CardContainerRef.current.scrollIntoView()
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: "#test",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfbfff4,
        birdSize: 4.00,
        wingSpan: 39.00,
        speedLimit: 6.00,
        separation: 100.00,
        alignment: 100.00,
        cohesion: 4.00,
        quantity: 2.00,
        backgroundAlpha: 0.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


  useEffect(() => {
    AOS.init();
  }, []);

  const handleLoginClick = () => {
    setCustomCursor(false);
    document.body.style.cursor = 'auto'; 
    navigate('/login')
    
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
    <>
      {showNavbar && <Navbar />}
      {customCursor &&
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: '#7d8dff'
          }}
          outerStyle={{
            border: '3px solid #ea60d5'
          }}
        />
      }

      <div className='landing-container' >
        <div className='landing-container-top-container' id="test">
          <div className='landing-text-container'>
            <div className='landing-title'>
              Hoşgeldin!
            </div>
            <div className='landing-description'>
              bir kuş kadar özgür, bir kanat çırpışı kadar özel
            </div>
          </div>
          <div className='landing-button' onClick={() => { handleLoginClick() }} >Web Sayfanı Oluştur</div>
          <div className='brand-container'>
            <div className="brand">
              <img className="brand-icon" src={FacebookIcon} alt={'airbnb'} />
            </div>
            <div className="brand">
              <img className="brand-icon" src={YoutubeIcon} alt={'spotify'} />
            </div>
            <div className="brand">
              <img className="brand-icon" src={InstagramIcon} alt={'pixfort'} />
            </div>

          </div>
          <div className='landing-bottom-button' onClick={executeScroll}>
            <img src={arrowIcon} alt='V' />
          </div>

        </div>

        <div className="landing-sub-container" ref={JoinTheNextRef}>
          <div className='landing-sub-title'>
            <div className="landing-sub-title-revolution">Sevginizin Dijital İzlerini Oluşturun</div>
          </div>

          <div className='feature-button-container'>
            <div className="feature-item-row">
              <div className='feature-item feature-item-1'>
                <div className='feature-item-content'>
                  Düşün
                </div>

              </div>
              <div className='feature-item feature-item-hidden' />
            </div>
            <div className="feature-item-row">

              <div className='feature-item feature-item-2'>
                <div className='feature-item-content'>
                  Tasarla
                </div>
              </div>
              <div className='feature-item feature-item-3'>
                <div className='feature-item-content'>
                  Paylaş
                </div>
              </div>
            </div>


          </div>
          <div className='landing-sub-text'>
            Bir Hediye Hiç Bu Kadar Tıklanabilir Olmamıştı!
          </div>
        </div>

        <div className='card-container' ref={CardContainerRef}>
          <div className="card-container-column">
            <div className='landing-card-image-wrapper'>
              <img src={WebDesignIcon} alt='design' />
            </div>

            <div className='card-title'>Tasarla</div>
            <div className='card-text'>Web sayfanı sana özel hazırladığımız komponentler ile zenginleştir,dilediğin şablon ile hazırla.</div>
            <div className='card-detail'>Daha fazlası için...</div>
          </div>
          <div className="card-container-column">
            <div className='landing-card-image-wrapper'>
              <img src={SocialNetworkIcon} alt='design' />
            </div>

            <div className='card-title'>Paylaş</div>
            <div className='card-text'> Tasarlamış olduğun web sayfasını sana özel hazırladığımız bir link ile sevdiklerinle paylaş.</div>
            <div className='card-detail'>Daha fazlası için...</div>
          </div>
          <div className="card-container-column">
            <div className='landing-card-image-wrapper'>
              <img src={PayPerClickIcon} alt='design' />
            </div>

            <div className='card-title'>Tadını Çıkar!</div>
            <div className='card-text'>Web sayfanı oluşturmanın yeni ve heyecan verici bir yolu burada! Uygun fiyatlarla, sıra dışı bir deneyim sunuyoruz. Gel, dijital dünyada fırtınalar estirelim!</div>
            <div className='card-detail'>Daha fazlası için...</div>
          </div>

        </div>
        <Marquee
          pauseOnHover={true}
          direction='right'
          className="landing-marquee"
          autoFill={true}
        >
          <div className="marquee-content marquee-gradient-1">
            Sevgi Dolu Anlar İçin Özel Bir Dokunuş!
          </div>
          <div className="marquee-content">
            ✨
          </div>
          <div className="marquee-content marquee-gradient-1">
            Bir Parça Mutluluk, Bir Damla Sevgi
          </div>
          <div className="marquee-content">
            🎉
          </div>

          <div className="marquee-content marquee-gradient-1">
            Hayal Gücünüzü Alevlendiren Hediyeler
          </div>
          <div className="marquee-content">
            🎁
          </div>
          <div className="marquee-content marquee-gradient-1">
            Sıradışı İlişkiler İçin Özel ve Etkileyici
          </div>
          <div className="marquee-content">
            🎨
          </div>

          <div className="marquee-content marquee-gradient-1">
            Kalplerinizi Fethedecek Özel Anlar
          </div>
          <div className="marquee-content">
            🎁
          </div>
          <div className="marquee-content marquee-gradient-1">
            Unutulmaz Anlarınıza Yenilikçi Bir Dokunuş
          </div>
          <div className="marquee-content">
            🎈
          </div>

          <div className="marquee-content marquee-gradient-1">
            Sevginizi Kutlamak İçin Eşsiz Fırsatlar
          </div>
          <div className="marquee-content">
            ✨
          </div>
          <div className="marquee-content marquee-gradient-1">
            Özel Günlerinizi Unutulmaz Kılın
          </div>
          <div className="marquee-content">
            🎉
          </div>

          <div className="marquee-content marquee-gradient-1">
            Duygularınızı En Renkli Şekilde İfade Edin
          </div>
          <div className="marquee-content">
            💖
          </div>
          <div className="marquee-content marquee-gradient-1">
            Sevginizi Dillendirmenin En Şık Yolu
          </div>
          <div className="marquee-content">
            💕
          </div>

          <div className="marquee-content marquee-gradient-1">
            Özel Anlarınızı Hatırlanması Kolay Hale Getirin
          </div>
          <div className="marquee-content">
            🎁
          </div>
          <div className="marquee-content marquee-gradient-1">
            Mutluluğu Paylaşmanın En Tatlı Yolu
          </div>
          <div className="marquee-content">
            🎉
          </div>

          <div className="marquee-content marquee-gradient-1">
            Sıradanı Unutun, Sevgilinize Özel Bir Dokunuş
          </div>
          <div className="marquee-content">
            ✨
          </div>
          <div className="marquee-content marquee-gradient-1">
            Hayatınızın Kahramanları İçin En Özel Hediye Seçenekleri
          </div>
          <div className="marquee-content">
            🎁
          </div>

          <div className="marquee-content marquee-gradient-1">
            Anılarınızı Süsleyecek Sıra Dışı Hediye Fikirleri
          </div>
          <div className="marquee-content">
            🎁
          </div>



        </Marquee>

        <Marquee
          pauseOnHover={true}
          className="landing-marquee"
          autoFill={true}
        >

          {icons.map((icon, index) => (
            <div className='landing-marquee-social-wrapper'>
              <div className="marquee-content marquee-gradient-2">
                Bizi Takip Edin
              </div>
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="landing-social-icon"
              />

            </div>

          ))}


        </Marquee>


        <div className='right-left-container'>
          <div className='left-side-container'>
            <div className='left-side-title'> İşte Web Sayfana Ekleyebileceklerin!</div>
            <div className='left-side-subtitle'>Fotoğraf & Video</div>
            <div className='left-side-text'>Web sayfanıza ekleyebileceğiniz fotoğraf ve videolarla, duygularınızı görsel bir şölene dönüştürün.</div>
            <div className='left-side-subtitle'>Ses Kaydı & Yazı İçeriği</div>
            <div className='left-side-text'>Ses kayıtları ve özel yazılarla, web sayfanızı daha da özgün ve etkileyici bir hale getirin.</div>
            <div className='landing-button'>HADİ BAŞLAYALIM! </div>

            <div className="left-vertical-text-container">
              <div className='left-vertical-text'>Paylaş.</div>
              <div className='left-vertical-text'>Tasarla.</div>
              <div className='left-vertical-text'> Düşün.</div>
            </div>

          </div>

          <div className='right-side-contaianer lightbox-container'>
            <div className='lightbox-row'>
              <div className='lightbox lightbox-1'
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className='lightbox-text lightbox-text-1'>Fotoğraf </div>
              </div>
              <div className='lightbox lightbox-2'
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className='lightbox-text lightbox-text-1'> Video</div>
              </div>
            </div>
            <div className='lightbox-row'>
              <div className='lightbox  lightbox-3'
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className='lightbox-text lightbox-text-1'>  Ses Kaydı </div>
              </div>
              <div className='lightbox  lightbox-4'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className='lightbox-text lightbox-text-1'> Metin / Yazı  </div>
              </div>
            </div>
          </div>

        </div>

        <div className='landing-sub-title'>
          Hayalinizdeki "O" Hediyeyi Tasarlayın!
        </div>
        <div className='landing-description'>
          Bir hediye vermek, sadece bir kutu açmaktan daha fazlasıdır... Web sitemiz, duygularınızı en samimi şekilde ifade etmenize ve yalnızca size özel web sayfaları tasarlamanıza imkan sunarak,sizlerin de emek harcayarak oluşturacağı bu eşsiz hediye ile sevdiklerinize özel bir deneyim sunuyor. Her bir sayfa, sizinle yaşadıkları anıların özel bir yansımasıdır. Onların kalplerine dokunmak için yeni bir yolculuğa çıkmaya ne dersiniz?
        </div>

        <div className="ipad-mockup"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={IpadFrame} alt={""} />
          <div className="ipad-mockup-content-container">
            <div className="ipad-mockup-content-wrapper">

            </div>
          </div>
        </div>



        <div className='landing-footer-container'>
          <Marquee
            pauseOnHover={true}
            className="landing-footer-container-link-text-wrapper"
            autoFill={true}
          >
            <div className='landing-footer-container-link-text-wrapper'>
              <div className='landing-footer-container-link-text'> Instagram</div>
              <div className='landing-footer-container-link-text'> Facebook</div>
              <div className='landing-footer-container-link-text'> Twitter</div>
              <div className='landing-footer-container-link-text'> LinkedIn</div>
              <div className='landing-footer-container-link-text'> Snapchat</div>
              <div className='landing-footer-container-link-text'> TikTok</div>
            </div>

          </Marquee>

          <Marquee
            pauseOnHover={true}
            className="landing-footer-container-link-text-wrapper"
            autoFill={true}
            direction='right'
          >
            <div className='landing-footer-container-link-text-wrapper'>
              <div className='landing-footer-container-link-text'> Reddit</div>
              <div className='landing-footer-container-link-text'> YouTube</div>
              <div className='landing-footer-container-link-text'> WhatsApp</div>
              <div className='landing-footer-container-link-text'> Telegram</div>
              <div className='landing-footer-container-link-text'> Twitch</div>
              <div className='landing-footer-container-link-text'> Discord</div>
            </div>
          </Marquee>
          <Marquee
            pauseOnHover={true}
            className="landing-footer-container-link-text-wrapper"
            autoFill={true}
          >
            <div className='landing-footer-container-link-text-wrapper'>
              <div className='landing-footer-container-link-text'> GitHub</div>
              <div className='landing-footer-container-link-text'> GitLab</div>
              <div className='landing-footer-container-link-text'> Bitbucket</div>
              <div className='landing-footer-container-link-text'> CodePen</div>
              <div className='landing-footer-container-link-text'> Contact Us</div>
            </div>
          </Marquee>
          <Marquee
            pauseOnHover={true}
            className="landing-footer-container-link-text-wrapper"
            direction='right'
          >
            <div className='landing-footer-container-link-text-wrapper'>
              <div className='landing-copyright'> © 2024 Temple. All rights reserved.</div>
            </div>
          </Marquee>







        </div>
      </div >
    </>


  )
}

export default Landing;