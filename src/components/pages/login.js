import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/login.css';
import video from '../../assets/media/gift.mp4';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const giris = async () => {

        if (email === "" && password === "") {
            alert("Lütfen email ve şifre giriniz.")
            return;

        }
        else if (email === "") {
            alert("Lutfen Email Giriniz");
            return;
        }
        else if (password === "") {
            alert("Lütfen şifre giriniz");
            return;
        }
        //merte gidecek verilerimiz sirasiyla:
        // 1 email
        // 2 sifre
        //mertin benden istedigi format:
        /*
            {
                email: kullanicininYazdigiMail,
                password: kullanicininYazidigiSifre
            }
        */

        const endpointeGidecekVeriler = {
            username: email,
            password: password
        };

        //mertin login endpointini yaz:
        //mertin login endpointi : http://109.228.228.154:8080/login

        const endpointLinki = 'http://109.228.228.154:8080/login';

        try {
            const donenVeri = await axios.post(endpointLinki, endpointeGidecekVeriler);

            const token = donenVeri.data.jwt;

            // Directly set the token as the cookie value
            document.cookie = `userData=${token}; path=/`;
            navigate('/dashboard');
        }
        catch (error) {
            console.log(error)
            if (error.response.status === 401) {
                alert("kullanici adi veya sifre hatali");

            }
            else {
                alert("bir hata olustu lutfen tekrar deneyin", error.response.data);

            }
        }
    }

    /* const denemeMethodu = async () => {
         try {
             const denemeDonenVerisi = await axios.get('http://109.228.228.154:8080/check');
             console.log(denemeDonenVerisi.data); // response yerine data'ya erişiyoruz
         } catch (error) {
             console.error('Hata:', error.response.data); // Hata durumunda hatayı yakalayıp konsola yazdırıyoruz
         }
     }
     */

    return (

        <div className="login-container">
            <video autoPlay loop muted className="video">
                <source src={video} type="video/mp4" />
            </video>
            {/*https://www.freepik.com/free-video/overhead-shot-man-gift-wrapping-romantic-valentines-present-box-using-green-screen-mobile-phone_731181#fromView=resource_detail&position=0&from_element=related_resources*/}
            <div className="login-wrapper">
                <div className="login-title">Welcome!</div>
                <div className="input">
                    <input className="login-email-input" type="text" placeholder="username" onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="login-email-input" type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div className="login-button-grad" onClick={() => { giris() }}>Login</div>


            </div>

        </div>
    )
}
export default Login;