import React from 'react'
import styled from 'styled-components'
import {BsInstagram} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"

const AboutContact = () => {
    return (
        <AboutContactStyled>
            <div className="left">
                <h1 className='contact__title'>Biz doimo aloqadamiz!</h1>
                <div className="phone__number">
                    <p className="our__number">
                    Bizning raqam:
                    </p>
                    <p className='numbers'>
                     71) 128 19 97 <br /> 99) 833 75 62 <br /> 09.00 dan 19.00 gacha
                    </p>
                </div>
                <a href="mailto: erbaskhanerbaskhan@gmail.com">Mail: erbaskhanerbaskhan@gmail.com</a>
                <p className="our__social">
                Bizni ijtimoiy tarmoqlardan kuzating
                </p>
                <div className="icons">
                    <a href="/"> <BsInstagram/> Instagram </a>
                    <a href="/"> <BsTelegram/> Telegram</a>
                    <a href="/"> <BsFacebook/> Facebook</a>
                    <a href="/"> <BsYoutube/> YouTube</a>
                </div>
            </div>
            <div className="right">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.7639334761556!2d69.45028471744287!3d41.401749300158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef0ec73a445e7%3A0x51694016433585ae!2z0L_Qs9GCINCj0LvRg9Cz0LHQtdC6ICjQptC10L3RgtGAKQ!5e1!3m2!1sru!2s!4v1638361250989!5m2!1sru!2s" allowFullScreen="" loading="lazy">  </iframe>
            </div>
        </AboutContactStyled>
    )
}

const AboutContactStyled = styled.div`
margin-top: 40px;
display: flex;
gap: 20px;
.contact__title{
    font-size: 24px;
    font-weight: 500;
}
.left{
    box-shadow: 2px 3px 10px #1C1C1C70;
    color: #fff;
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    padding: 20px;
    background: #0086C5;
    border-radius: 15px;
    .phone__number{
    display: flex;
    gap: 20px;
    }
    .icons{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 20px;
        a{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
}
.right{
    box-shadow: 2px 3px 10px #1C1C1C70;
    flex: 2;
    background-color: #f4f4f4;
    border-radius: 15px;
    .map{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
}
`

export default AboutContact
