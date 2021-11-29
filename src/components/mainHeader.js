import React, {useState, useEffect} from 'react';
import '../styles/mainHeader.scss'
import Navigation from "./navigation";
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaUserGraduate, FaUsers, FaUserTie} from "react-icons/fa"

const MainHeader = () => {
    const [bitruvchlar, setBitruvchlar] = useState(0);
    const [oquvchilar, setOquvchilar] = useState(0);
    const [oqituvchilar, setOqituvchilar] = useState(0);


    return (
        <div className="mainHeader">
            <Navigation />
            <div className="bgHeader">
                <div className="container mx-auto flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between w-full h-56 mt-24">
                        <h1 className="text-white font-bold text-4xl uppercase tracking-widest">
                            YUKSAK IDROK - BIZ SIZGA <br/>
                            TALABA BO’LISHINGIZDA YORDAM BERAMIZ!
                        </h1>
                        <div className="flex flex-col items-center justify-between h-full">
                            {/*animate-bounce => for icons*/}
                            <a href="#" className="relative">
                                <FaFacebookF className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="#" className="relative">
                                <FaInstagram className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="#" className="relative">
                                <FaTelegramPlane className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="#" className="relative">
                                <FaYoutube className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between h-48">
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <div className="flex items-center">

                                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white">
                                    <FaUserGraduate className="text-white text-6xl text-blue-500" />
                                </div>
                                <div className="text-center ml-10">
                                    <h1 className="text-white text-4xl mb-2 font-bold">86 +</h1>
                                    <h1 className="text-white text-2xl font-bold uppercase leading-none">Bitiruvchilar</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">

                                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white">
                                    <FaUsers className="text-white text-6xl text-blue-500" />
                                </div>
                                <div className="text-center ml-10">
                                    <h1 className="text-white text-4xl mb-2 font-bold">154 +</h1>
                                    <h1 className="text-white text-2xl font-bold uppercase leading-none">o‘quvchilarimiz</h1>
                                </div>
                            </div>
                            <div className="flex justify-end items-center">
                                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white">
                                    <FaUserTie className="text-white text-6xl text-blue-500" />
                                </div>

                                <div className="text-center ml-10">
                                    <h1 className="text-white text-4xl mb-2 font-bold">26 +</h1>
                                    <h1 className="text-white text-2xl font-bold uppercase leading-none">ustozlarimiz</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;