import React from 'react';
import {BsInstagram, BsFacebook, BsYoutube} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";

const AContact = () => {
    return (
        <div className="grid grid-cols-12 gap-10 my-20">
            <div className="lg:col-span-5 sm:col-span-12 px-10 py-6 h-96 rounded-xl bg-blue-500 text-white">
                <h1 className="text-4xl font-semibold text-center mb-3 lg:text-3xl">Biz doimo aloqadamiz!</h1>
                <div className="flex justify-between">
                    <div className="text-xl">
                        Bizning raqam:
                    </div>
                    <div className="text-xl flex flex-col">
                        <a className="mb-3" href="tell:+998711281997">+998 (97) 128 19 97</a>
                        <a className="mb-3" href="tell:+998711281997">+998 (97) 128 19 97</a>
                        <div>
                            09.00 dan 19.00 gacha
                        </div>
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="text-xl flex justify-between items-center">
                    <div>
                        Email:
                    </div>
                    <div>
                        yuksakIdrik@gmail.com
                    </div>
                </div>
                <hr className="my-4"/>
                <div className="flex justify-between items-center mb-4">
                    <a href="#" className="text-xl flex items-center">
                        <BsInstagram  className="mr-5 text-4xl lg:text-3xl"/>
                        Instagram
                    </a>
                    <a href="#" className="text-xl flex items-center">
                        Telegram
                            <FaTelegramPlane  className="ml-5 text-4xl lg:text-3xl"/>
                    </a>
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl flex items-center">
                        <BsFacebook  className="mr-5 text-4xl lg:text-3xl"/>
                        Facebook
                    </a>
                    <a href="#" className="text-xl flex items-center">
                        Youtube
                        <BsYoutube  className="ml-5 text-4xl lg:text-3xl"/>
                    </a>
                </div>
            </div>
            <div className="lg:col-span-7 sm:col-span-12 h-96 putVideoPicMap">
                <iframe
                    className="border-0 rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.7639334761556!2d69.45028471744287!3d41.401749300158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef0ec73a445e7%3A0x51694016433585ae!2z0L_Qs9GCINCj0LvRg9Cz0LHQtdC6ICjQptC10L3RgtGAKQ!5e1!3m2!1sru!2s!4v1638361250989!5m2!1sru!2s"
                    width="400" height="286" allowFullScreen="" loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

export default AContact;