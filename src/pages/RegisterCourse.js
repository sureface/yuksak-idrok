import React from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import "../styles/register.scss";
import {FaUserFriends, FaUserGraduate} from 'react-icons/fa';
import {IoTodaySharp} from 'react-icons/io5';
import {GiPriceTag} from 'react-icons/gi';
import {MdAccessTimeFilled} from 'react-icons/md';
//import axios from 'axios'
//import {API_URL} from '../utils/axios';
//import {useParams} from 'react-router-dom'
import img3 from "../assets/images/img3.png"
import img2 from "../assets/images/img2.png"
import img1 from "../assets/images/img1.png"

const RegisterCourse = () => {
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
                        kursimiz kimlarga to'g'ri keladi
                    </h1>
                    <div className="grid grid-cols-3 gap-10 py-40">
                        <div className="bg-gray-100 rounded-xl py-10 px-5 relative">
                            <div className={"absolute card_img w-3/5"}>
                                <img src={img3} alt=""/>
                            </div>
                            <h3 className="text-2xl mt-12 text-center font-semibold">0 dan boshlamoqchi
                                bo’lganlarga</h3>
                            <p className="text-lg text-justify m-4 text-gray-500 font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque doloremque excepturi
                                explicabo facere fugiat ipsam numquam rerum, ut voluptatem ?
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl py-10 px-5 relative">
                            <div className={"absolute card_img w-3/5"}>
                                <img src={img1} alt=""/>
                            </div>
                            <h3 className="text-2xl mt-12 text-center font-semibold">Boshlang’ich bilimga
                                ega bo’lganlarga</h3>
                            <p className="text-lg text-justify m-4 text-gray-500 font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque doloremque excepturi
                                explicabo facere fugiat ipsam numquam rerum, ut voluptatem ?
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl py-10 px-5 relative">
                            <div className={"absolute card_img w-3/5"}>
                                <img src={img2} alt=""/>
                            </div>
                            <h3 className="text-2xl mt-12 text-center font-semibold">Kuchli sabr va ishtiyoqga
                                ega bo’lgan insonlarga</h3>
                            <p className="text-lg text-justify m-4 text-gray-500 font-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque doloremque excepturi
                                explicabo facere fugiat ipsam numquam rerum, ut voluptatem ?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default RegisterCourse;
