import React from 'react';
import '../styles/mainHeader.scss'
import Navigation from "./navigation";
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaUserGraduate, FaUsers, FaUserTie} from "react-icons/fa"
import CountUp from 'react-countup';


const MainHeader = () => {

    return (
        <div className="mainHeader">
            <Navigation />
            <div className="bgHeader">
                <div className="container mx-auto flex flex-col justify-between h-full">
                    <div className="flex lg:flex-row vl:flex-col items-center xl:justify-between lg:justify-around w-full  h-56   sm:mt-24 vl:mt-20">
                        <div className="lg:w-2/3 w-full">
                            <h1 className="text-white font-bold sm:text-4xl vl:text-2xl uppercase sm:mb-5 vl:mb-3 tracking-wider leading-normal text-center">
                                YUKSAK IDROK - BIZ SIZGA
                                TALABA BO’LISHINGIZDA YORDAM BERAMIZ!
                            </h1>
                        </div>

                        <div className="flex lg:flex-col vl:flex-row lg:gap-0 vl:gap-10 items-center justify-between h-full lg:mt-0 vl:mt-7 ">
                            {/*animate-bounce => for icons*/}
                            <a href="/#" className="relative">
                                <FaFacebookF className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="/#" className="relative">
                                <FaInstagram className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="/#" className="relative">
                                <FaTelegramPlane className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                            <a href="/#" className="relative">
                                <FaYoutube className="w-full h-full text-2xl text-white" />
                                <span className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-white opacity-75"> </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center xs:mx-0 vl:mx-auto justify-between h-48">
                        <div className="grid grid-cols-12 lg:gap-4 sm:gap-2 xs:mb-0   vl:mb-5 vl:gap-y-3 w-full">
                            <div className="flex sm:flex-row xs:flex-col xs:justify-center sm:gap-1 gap-3    xs:col-span-4 vl:col-span-12 items-center">
                                <div className="flex items-center justify-center h-14 w-14 xl:h-24 xl:w-24 lg:h-16 lg:w-16 rounded-full bg-white">
                                    <FaUserGraduate className="  text-2xl xl:text-6xl lg:text-3xl  text-blue-500" />
                                </div>
                                <div className="xs:text-center flex vl:flex-col sm:flex-col xs:flex-col-reverse   lg:ml-10 md:ml-2 sm:gap-0 xs:gap-2">
                                    <h1 className="text-white  text-base lg:text-xl xl:text-4xl mb-2 font-bold"><CountUp
                                        start={0}
                                        end={150}
                                        duration={4.25}
                                    />+</h1>
                                    <h1 className="text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold uppercase leading-none">Bitiruvchilar</h1>
                                </div>
                            </div>
                            <div className="flex sm:flex-row xs:flex-col xs:justify-center sm:gap-1 gap-3 xs:col-span-4 vl:col-span-12 items-center">
                                <div className="flex items-center justify-center h-14 w-14 xl:h-24 xl:w-24 lg:h-16 lg:w-16 rounded-full bg-white">
                                    <FaUsers className=" text-2xl xl:text-6xl lg:text-3xl  text-blue-500" />
                                </div>
                                <div className="xs:text-center vl:flex-col flex sm:flex-col xs:flex-col-reverse lg:ml-10 md:ml-2 sm:gap-0 xs:gap-2">
                                    <h1 className="text-white  text-base lg:text-xl xl:text-4xl mb-2 font-bold"><CountUp
                                        start={0}
                                        end={50}
                                        duration={4.25}
                                    />+</h1>
                                    <h1 className="text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold uppercase leading-none">o‘quvchilarimiz</h1>
                                </div>
                            </div>
                            <div className="flex sm:flex-row xs:flex-col xs:justify-center sm:gap-1  gap-3    xs:col-span-4 vl:col-span-12 items-center">
                                <div className="flex items-center justify-center h-14 w-14 xl:h-24 xl:w-24 lg:h-16 lg:w-16 rounded-full bg-white">
                                    <FaUserTie className="  text-2xl xl:text-6xl lg:text-3xl  text-blue-500" />
                                </div>
                                <div className="xs:text-center vl:flex-col flex sm:flex-col xs:flex-col-reverse lg:ml-10 md:ml-2 sm:gap-0 xs:gap-2">
                                    <h1 className="text-white  text-base lg:text-xl xl:text-4xl mb-2 font-bold"><CountUp
                                        start={0}
                                        end={15}
                                        duration={4.25}
                                    />+</h1>
                                    <h1 className="text-white text-sm md:text-base lg:text-xl xl:text-2xl font-bold uppercase leading-none">ustozlarimiz</h1>
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