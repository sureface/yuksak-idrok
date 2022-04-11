import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer bg-blue-500 py-10">
            <div className="container mx-auto text-left ">
                <div className="flex sm:flex-row flex-col justify-between mb-5 lg:flex-nowrap flex-wrap   " >
                    <div className=' sm:m-0 sm:text-left m-auto text-center'>
                        <h1 className="text-xl text-white font-medium mb-4 uppercase">Foydali linklar</h1>
                        <ul>
                            <li className="h-10">
                                <Link to="/courses" className="text-white text-md uppercase">KURSLAR</Link>
                            </li>
                            <li className="h-10">
                                <Link to="/about" className="text-white text-md uppercase">BIZ HAQIMIZDA</Link>
                            </li>
                            <li className="h-10">
                                <Link to="/news" className="text-white text-md uppercase">YANGILIKLAR</Link>
                            </li>
                            <li className="h-10">
                                <Link to="/contact" className="text-white text-md uppercase">BIZ BILAN ALOQA</Link>
                            </li>
                            <li className="h-10 ">
                                <Link to="/teachers" className="text-white text-md uppercase">Oqituvchilarimiz</Link>
                            </li>
                        </ul>
                    </div>
                    <div  className='sm:m-0  m-auto sm:text-left text-center '>
                        <h1 className="text-xl text-white font-medium mb-4 uppercase sm:mt-0 mt-5" >bizning manzil</h1>
                        <div className="flex sm:flex-row flex-col mb-5 items-center sm:gap-0 gap-2 ">
                            <div className="w-36 sm:mr-10 ">
                                <h1 className="text-white text-md uppercase">Aloqa uchun tel:</h1>
                            </div>
                            <div className="w-48 flex flex-col">
                                <a href="tel:+998950071430" className="text-white text-md">(95) 0071430</a>
                                <a href="tel:+998770070707" className="text-white text-md">(77) 0070707</a>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col mb-5 items-center sm:gap-0 gap-2">
                            <div className="w-36 sm:mr-10">
                                <h1 className="text-white text-md uppercase">Manzil:</h1>
                            </div>
                            <div className="w-48">
                                <p className="text-white text-md">
                                    Toshkent sh.
                                    M. Ulug’bek tum.
                                    Ulug’bek shaxarchasi
                                </p>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col mb-5 items-center sm:gap-0 gap-2">
                            <div className="w-36 sm:mr-10">
                                    <h1 className="text-white text-md uppercase">Mo’ljal:</h1>
                            </div>
                            <div className="w-48">
                                <p className="text-white text-md">
                                    Bahor To'yxonasi
                                </p>
                            </div>
                        </div>
                    </div>
                    <iframe
                        title='map'
                        className="border-0 lg:w-1/3 vl:w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.7639334761556!2d69.45028471744287!3d41.401749300158855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef0ec73a445e7%3A0x51694016433585ae!2z0L_Qs9GCINCj0LvRg9Cz0LHQtdC6ICjQptC10L3RgtGAKQ!5e1!3m2!1sru!2s!4v1638361250989!5m2!1sru!2s"
                        width="400" height="286" allowFullScreen="" loading="lazy">
                    </iframe>
                </div>
                <hr/>
                <div className="flex items-center justify-center pt-5">
                    <h1 className="text-white text-md font-semibold"> &copy; <a href="https://webmakon.uz" className="text-black font-bold">WebMakon</a> 2022 All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;