import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import "../styles/register.scss";
import {FaUserFriends, FaUserGraduate} from 'react-icons/fa';
import {IoTodaySharp} from 'react-icons/io5';
import {GiPriceTag} from 'react-icons/gi';
import {MdAccessTimeFilled} from 'react-icons/md';
import img3 from "../assets/images/img3.png";
import img2 from "../assets/images/img2.png";
import img1 from "../assets/images/img1.png";
import {getGroupsCourse, getIndividualsCourses} from "./register/query";

const RegisterCourse = () => {

    const {id} = useParams();
    const [groups, setGroups] = useState([]);
    const [individuals, setIndividuals] = useState([]);
    const [empty, setEmpty] = useState({});

    useEffect(() => {

        const getGroups = async () => {
            const {data, error} = await getGroupsCourse(id);
            if (data) {
                if (data.name){
                    setEmpty(true);
                }
                setGroups(data);
                console.log(data);
            } else if (error) {
                console.log(error);
            }
        }
        getGroups();

    }, []);

    useEffect(() => {

        const getGroups = async () => {
            const {data, error} = await getIndividualsCourses(id);
            if (data) {
                if (data.name){
                    setEmpty(true);
                }
                setIndividuals(data);
                console.log(data , "individuals came");
            } else if (error) {
                console.log(error);
            }
        }
        getGroups();

    }, []);


    return (
        <div>
            <Navigation/>
            <section className="h-auto relative">
                <div className="container mx-auto">
                    <h1 className="text-center py-7 text-3xl text-blue-500 font-bold capitalize">{groups.courseName}</h1>
                    <div className={ groups.active === false || empty === true ? "bg-blue-500 py-10 mb-10 rounded-xl relative empty" : "bg-gray-100 py-10 mb-10 rounded-xl relative"}>
                        <h1 className="font-bold text-xl text-blue-500 text-center mb-7 uppercase">guruh</h1>
                        <div className={ groups.active === false ? "unActive relative grid grid-cols-5 gap-10 px-12" : "grid grid-cols-5 gap-10 px-12"}>
                            <div>
                                <MdAccessTimeFilled className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">davomiyligi</h3>
                                <h3 className="text-black font-semibold text-lg">{groups.duration} oy</h3>
                                <h3 className="text-black font-semibold text-lg">1 oy / {groups.in_month} ta dars</h3>
                            </div>
                            <div>
                                <IoTodaySharp className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">kunlari</h3>
                                <h3 className="text-black font-semibold text-lg">{groups.days}</h3>
                                <h3 className="text-black font-semibold text-lg">soat {groups.start} dan {groups.end} gacha</h3>
                            </div>
                            <div>
                                <FaUserFriends className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">o'quvchilar</h3>
                                <h3 className="text-black font-semibold text-lg">{groups.members} kishi</h3>
                            </div>
                            <div>
                                <FaUserGraduate className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">ustoz</h3>
                                <h3 className="text-black font-semibold text-lg">{groups.teacherName}</h3>
                            </div>
                            <div>
                                <GiPriceTag className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">narxi</h3>
                                <h3 className="text-black font-semibold text-lg">{groups.price} so'm / oy</h3>
                            </div>
                        </div>
                    </div>

                    <div className={ individuals.active === false || empty === true ? "bg-blue-500 py-10 mb-10 rounded-xl relative empty_Individuals" : "bg-gray-100 py-10 mb-10 rounded-xl relative"}>
                        <h1 className="font-bold text-xl text-blue-500 text-center mb-7 uppercase">individual guruh</h1>
                        <div className={ individuals.active === false ? "unActive relative grid grid-cols-5 gap-10 px-12" : "grid grid-cols-5 gap-10 px-12"}>
                            <div>
                                <MdAccessTimeFilled className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">davomiyligi</h3>
                                <h3 className="text-black font-semibold text-lg">{individuals.duration} oy</h3>
                                <h3 className="text-black font-semibold text-lg">1 oy / {individuals.in_month} ta dars</h3>
                            </div>
                            <div>
                                <IoTodaySharp className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">kunlari</h3>
                                <h3 className="text-black font-semibold text-lg">{individuals.days}</h3>
                                <h3 className="text-black font-semibold text-lg">soat {individuals.start} dan {individuals.end} gacha</h3>
                            </div>
                            <div>
                                <FaUserFriends className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">o'quvchilar</h3>
                                <h3 className="text-black font-semibold text-lg">{individuals.members} kishi</h3>
                            </div>
                            <div>
                                <FaUserGraduate className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">ustoz</h3>
                                <h3 className="text-black font-semibold text-lg">{individuals.teacherName}</h3>
                            </div>
                            <div>
                                <GiPriceTag className="text-blue-500 text-4xl mb-3"/>

                                <h3 className="text-black font-bold text-xl capitalize">narxi</h3>
                                <h3 className="text-black font-semibold text-lg">{individuals.price} so'm / oy</h3>
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
