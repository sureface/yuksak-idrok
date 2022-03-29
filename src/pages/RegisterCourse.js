import React, {useEffect, useState} from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import courseImg from "../assets/images/cardimage1.png";
import {FaUserFriends, FaUserGraduate, FaTelegramPlane, FaUserCog} from 'react-icons/fa';
import {IoTodaySharp} from 'react-icons/io5';
import {GiPriceTag} from 'react-icons/gi';
import {MdAccessTimeFilled} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import MainInfo from '../components/mainInfo';
import axios from 'axios'
import {API_URL} from '../utils/axios';
import {useParams} from 'react-router-dom'

const RegisterCourse = () => {

    const [isOpen, setIsOpen] = useState(false);


    // const [course, setCourse] = useState([]);

    // const { idCourse } = useParams();
    
    // useEffect(() => {
    //     getOneCourse();
    // });
    //
    // const getOneCourse = async () => {
    //
    //     await axios.get(`${API_URL}/courses/${idCourse}`)
    //     .then(res => {
    //         setCourse(res.data.course);
    //
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

return (
        <div>
            <Navigation/>
            <section className="h-auto relative">
                <div className="container mx-auto">
                    <h1 className="text-center py-7 text-3xl text-blue-500 font-bold capitalize">ona tili kursi</h1>
                    <div className="bg-gray-100 py-10 mb-10 rounded-xl relative">
                        <div className="grid grid-cols-5 gap-10 px-12">
                            <div>
                                <MdAccessTimeFilled className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">davomiyligi</h3>
                                <h3 className="text-black font-semibold text-lg">8 oy</h3>
                                <h3 className="text-black font-semibold text-lg">1 oy / 12 ta dars</h3>
                            </div>
                            <div>
                                <IoTodaySharp className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">kunlari</h3>
                                <h3 className="text-black font-semibold text-lg">dushanba,seshanba,chorshanba</h3>
                                <h3 className="text-black font-semibold text-lg">soat 15:00 dan 16:30 gacha</h3>
                            </div>
                            <div>
                                <FaUserFriends className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">o'quvchilar</h3>
                                <h3 className="text-black font-semibold text-lg">15 kishi</h3>
                            </div>
                            <div>
                                <FaUserGraduate className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">ustoz</h3>
                                <h3 className="text-black font-semibold text-lg">Jasur Jurayev</h3>
                            </div>
                            <div>
                                <GiPriceTag className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">narxi</h3>
                                <h3 className="text-black font-semibold text-lg">600 000 so'm / oy</h3>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl text-blue-500 font-bold capitalize text-center mb-10">
                        kursimiz kimlarga to'g'ri keladi.. ?
                    </h1>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="bg-gray-100 rounded-xl py-10 px-5">
                            <div className="flex items-center justify-center">
                                <FaUserCog  className="text-4xl text-blue-500"/>
                            </div>
                            <h2 className="text-2xl">0 dan boshlamoqchi bo’lganlarga</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-5 right-7 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div className="relative">
                        <FaTelegramPlane className="w-full h-full text-2xl text-blue-500"/>
                        <span
                            className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-blue-300 opacity-75"> </span>
                    </div>
                </div>
                <div className={isOpen ? "fixed top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center bg-gray-700 bg-opacity-75" : "hidden"}>
                    <div className="relative">
                        <AiOutlineClose onClick={() => setIsOpen(!isOpen)} className='absolute right-2 top-12 text-white text-2xl cursor-pointer transition duration-500 ease-in-out transform  hover:rotate-180'/>
                        <MainInfo/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default RegisterCourse;
