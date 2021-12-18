import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import '../../styles/teacherSlide.scss'
import {FiPhoneCall } from "react-icons/fi"

const AboutContact = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='mt-12 flex gap-8'>
            <div className="left rounded-2xl shadow-2xl text-white flex flex-col gap-3 bg p-4 ">
                <h1 className='text-xl'>Biz doimo aloqadamiz!</h1>
                <div className="flex gap-3">
                    <p className="our__number">
                    Bizning raqam:
                    </p>
                    <p className='numbers'>
                     71) 128 19 97 <br /> 99) 833 75 62 <br /> 09.00 dan 19.00 gacha
                    </p>
                </div>
                <a href="mailto: erbaskhanerbaskhan@gmail.com">Mail: erbaskhanerbaskhan@gmail.com</a>
                <p className="text-xl">
                Bizni ijtimoiy tarmoqlardan kuzating
                </p>
                <div className="grid gap-3 grid-cols-2">
                    <a className='flex items-center gap-2' href="/"> <BsInstagram/> Instagram </a>
                    <a className='flex items-center gap-2' href="/"> <BsTelegram/> Telegram</a>
                    <a className='flex items-center gap-2' href="/"> <BsFacebook/> Facebook</a>
                    <a className='flex items-center gap-2' href="/"> <BsYoutube/> YouTube</a>
                </div>
            </div>
            <div className="right shadow-2xl bg-white rounded-2xl">
            <iframe className="rounded-2xl w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.7639334761556!2d69.45028471744287!3d41.401749300158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef0ec73a445e7%3A0x51694016433585ae!2z0L_Qs9GCINCj0LvRg9Cz0LHQtdC6ICjQptC10L3RgtGAKQ!5e1!3m2!1sru!2s!4v1638361250989!5m2!1sru!2s" allowFullScreen="" loading="lazy">  </iframe>
            </div>
            </div>

            <div className='flex items-center justify-center gap-12'>
                <h1 className='text-xl'>Savollarigizga javob oling!  </h1>
                <a className='text-3xl font-semibold mx-12 color-primary' href="tel: (71) 128 19 97"> (71) 128 19 97</a>
                <a className='bg-white px-12 color-primary py-2 text-xl rounded-2xl' href="tel: (71) 128 19 97"> <FiPhoneCall/> </a>
            </div>
            
            </div>
    )
}



export default AboutContact
