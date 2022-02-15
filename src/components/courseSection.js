import React from 'react';
import "../styles/courseCard.scss";
import Slider from 'react-slick';
import {FaUserPlus} from "react-icons/fa"
import { BsStarFill} from "react-icons/bs"
import {MdReadMore} from "react-icons/md"
import courseImg from "../assets/images/cardimage1.png";
import {Link} from "react-router-dom";

const CourseSection = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1070,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="courseSection my-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold sm:mb-10">kurslar</h1>
                <Slider {...settings}>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="course-card bg-white shadow-lg w-full rounded-2xl">
                        <div className="flex items-center justify-between w-full py-2 px-4">
                            <div className="flex items-center justify-between w-full">
                                 
                                <h1 className="text-md text-gray-800 font-bold">KURS DARAJASI</h1>
                                <div className="flex items-center ml-2">
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-blue-500 w-3 h-3 rounded-lg mr-2"></div>
                                    <div className="bg-gray-300 w-3 h-3 rounded-lg mr-2"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(${courseImg})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            className="course-card_img relative flex flex-col justify-between sm:h-72 vl:h-60">
                            
                        </div>
                        <div className="px-4 py-6">
                            <div className="flex justify-around mb-5">
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-purple-500 rounded-2xl"></div>
                                <div className="w-1/4 h-2 bg-blue-500 rounded-2xl"></div>
                            </div>
                            <Link to="/registerCourse" className="py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold  z-10">
                                    Kursga Yozilish
                                    <FaUserPlus  className="text-2xl ml-3" />
                            </Link>
                            <div className="flex items-center justify-center my-6">
                                <h1 className="uppercase text-lg text-gray-800 font-bold">ingliz tili BOSHLOVCHILAR UCHUN</h1>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-black font-medium">
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                    <BsStarFill className="mr-1 text-yellow-400" />
                                </div>
                                <Link to="/courses" className="flex items-center text-black text-lg font-medium">
                                    Batafsil
                                    <MdReadMore className="ml-2 text-2xl"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>
        </div>
    );
};

export default CourseSection;