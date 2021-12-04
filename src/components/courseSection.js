import React from 'react';
import "../styles/courseCard.scss"
//import { FiArrowRightCircle} from "react-icons/fi"
import { FaUserPlus } from "react-icons/fa"
import { BsClockHistory } from "react-icons/bs"
import { BsStarFill } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
// import russian from "../assets/images/russian.jpg"
import flagRu from "../assets/images/Flag_of_Russia.png"
import flagBr from "../assets/images/britsh.png"
import saw1 from "../assets/images/saw1.png"
import saw2 from "../assets/images/saw2.png"
import saw3 from "../assets/images/saw3.png"
import {Link} from "react-router-dom";

const CourseSection = () => {
    return (
        <div className="courseSection my-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold mb-20">kurslar</h1>
                <div className="grid grid-cols-4 gap-6 w-full">

                    <div className="course-card bg-white rounded-2xl shadow-lg w-full">
                        <div className="course-card_img relative flex flex-col justify-between h-64">
                                <div className="course-card_img_pop absolute top-4 right-4 flex items-center text-white uppercase text-sm rounded-lg py-1 px-2">
                                    <BsClockHistory className="mr-2" />
                                    42 soat
                                </div>
                                <div className="flex items-center absolute -bottom-6 left-3">
                                    <div className="flex items-center justify-center bg-white rounded-full h-14 w-14 border-4 border-white z-20">
                                        <img className="w-full rounded-full" src={flagRu} alt="asd"/>
                                    </div>
                                    <div className="bg-blue-500 text-white text-lg font-bold uppercase py-1 px-5 rounded-lg border-4 border-white tracking-widest -ml-4 z-10">Rus tili</div>
                                </div>
                        </div>
                        <div className="px-4 py-6">
                            <p className="text-justify text-md font-medium text-gray-600">
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting industy
                                . Lorem Ipsum has been the industry's
                                standard dummy text ever since the 5
                                00s, when an hi's
                            </p>
                            <div className="w-full flex items-center justify-center my-3">
                                <button className="py-2 px-4 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                                </button>
                            </div>
                            <div className="flex items-center text-lg text-gray-600 font-medium">
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-gray-300 w-10 h-3 rounded-lg mr-2"></div>
                                Murakkab kurs
                            </div>
                            <div className="w-full h-0.5 bg-gray-200 my-5"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    100
                                    <div className="flex items-center ml-5">
                                        <img src={saw1} alt=""/>
                                        <img className="-ml-2" src={saw2} alt=""/>
                                        <img className="-ml-2" src={saw3} alt=""/>
                                    </div>
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <BsChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="course-card bg-white rounded-2xl shadow-lg w-full">
                        <div className="course-card_img relative flex flex-col justify-between h-64">
                            <div className="course-card_img_pop absolute top-4 right-4 flex items-center text-white uppercase text-sm rounded-lg py-1 px-2">
                                <BsClockHistory className="mr-2" />
                                42 soat
                            </div>
                            <div className="flex items-center absolute -bottom-6 left-3">
                                <div className="flex items-center justify-center bg-white rounded-full h-14 w-14 border-4 border-white z-20">
                                    <img className="w-full rounded-full" src={flagBr} alt="asd"/>
                                </div>
                                <div className="bg-blue-500 text-white text-lg font-bold uppercase py-1 px-5 rounded-lg border-4 border-white tracking-widest -ml-4 z-10">Rus tili</div>
                            </div>
                        </div>
                        <div className="px-4 py-6">
                            <p className="text-justify text-md font-medium text-gray-600">
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting industy
                                . Lorem Ipsum has been the industry's
                                standard dummy text ever since the 5
                                00s, when an hi's
                            </p>
                            <div className="w-full flex items-center justify-center my-3">
                                <button className="py-2 px-4 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                                </button>
                            </div>
                            <div className="flex items-center text-lg text-gray-600 font-medium">
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-gray-300 w-10 h-3 rounded-lg mr-2"></div>
                                Murakkab kurs
                            </div>
                            <div className="w-full h-0.5 bg-gray-200 my-5"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    100
                                    <div className="flex items-center ml-5">
                                        <img src={saw1} alt=""/>
                                        <img className="-ml-2" src={saw2} alt=""/>
                                        <img className="-ml-2" src={saw3} alt=""/>
                                    </div>
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <BsChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="course-card bg-white rounded-2xl shadow-lg w-full">
                        <div className="course-card_img relative flex flex-col justify-between h-64">
                            <div className="course-card_img_pop absolute top-4 right-4 flex items-center text-white uppercase text-sm rounded-lg py-1 px-2">
                                <BsClockHistory className="mr-2" />
                                42 soat
                            </div>
                            <div className="flex items-center absolute -bottom-6 left-3">
                                <div className="flex items-center justify-center bg-white rounded-full h-14 w-14 border-4 border-white z-20">
                                    <img className="w-full rounded-full" src={flagRu} alt="asd"/>
                                </div>
                                <div className="bg-blue-500 text-white text-lg font-bold uppercase py-1 px-5 rounded-lg border-4 border-white tracking-widest -ml-4 z-10">Rus tili</div>
                            </div>
                        </div>
                        <div className="px-4 py-6">
                            <p className="text-justify text-md font-medium text-gray-600">
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting industy
                                . Lorem Ipsum has been the industry's
                                standard dummy text ever since the 5
                                00s, when an hi's
                            </p>
                            <div className="w-full flex items-center justify-center my-3">
                                <button className="py-2 px-4 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                                </button>
                            </div>
                            <div className="flex items-center text-lg text-gray-600 font-medium">
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-gray-300 w-10 h-3 rounded-lg mr-2"></div>
                                Murakkab kurs
                            </div>
                            <div className="w-full h-0.5 bg-gray-200 my-5"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    100
                                    <div className="flex items-center ml-5">
                                        <img src={saw1} alt=""/>
                                        <img className="-ml-2" src={saw2} alt=""/>
                                        <img className="-ml-2" src={saw3} alt=""/>
                                    </div>
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <BsChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="course-card bg-white rounded-2xl shadow-lg w-full">
                        <div className="course-card_img relative flex flex-col justify-between h-64">
                            <div className="course-card_img_pop absolute top-4 right-4 flex items-center text-white uppercase text-sm rounded-lg py-1 px-2">
                                <BsClockHistory className="mr-2" />
                                42 soat
                            </div>
                            <div className="flex items-center absolute -bottom-6 left-3">
                                <div className="flex items-center justify-center bg-white rounded-full h-14 w-14 border-4 border-white z-20">
                                    <img className="w-full rounded-full" src={flagRu} alt="asd"/>
                                </div>
                                <div className="bg-blue-500 text-white text-lg font-bold uppercase py-1 px-5 rounded-lg border-4 border-white tracking-widest -ml-4 z-10">Rus tili</div>
                            </div>
                        </div>
                        <div className="px-4 py-6">
                            <p className="text-justify text-md font-medium text-gray-600">
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting industy
                                . Lorem Ipsum has been the industry's
                                standard dummy text ever since the 5
                                00s, when an hi's
                            </p>
                            <div className="w-full flex items-center justify-center my-3">
                                <button className="py-2 px-4 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                                </button>
                            </div>
                            <div className="flex items-center text-lg text-gray-600 font-medium">
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-blue-500 w-10 h-3 rounded-lg mr-2"></div>
                                <div className="bg-gray-300 w-10 h-3 rounded-lg mr-2"></div>
                                Murakkab kurs
                            </div>
                            <div className="w-full h-0.5 bg-gray-200 my-5"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    100
                                    <div className="flex items-center ml-5">
                                        <img src={saw1} alt=""/>
                                        <img className="-ml-2" src={saw2} alt=""/>
                                        <img className="-ml-2" src={saw3} alt=""/>
                                    </div>
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <BsChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseSection;