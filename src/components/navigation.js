import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/navigation.scss"
import {FaAngleDown} from "react-icons/fa";
// import Logo from "../assets/images/logoYuksakIdrok.png"
import newYearLogo from "../assets/images/newYearLogo.png"

const Navigation = () => {

    const [clicked, setClicked] = useState(false);
    const [selectedRu] = useState("RU");
    const [selectedEn] = useState("EN");
    const [selectedUz] = useState("UZ");
    const [defaultLan, setDefaultLan] = useState("UZ");

    return (
        <div className="navigationBar h-20 bg-blue-500 flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <Link to="/"><img className="w-32" src={newYearLogo} alt="oops something went wrong"/></Link>
                </div>
                <ul className="flex items-center ml-10">
                    <li>
                        <Link className="links uppercase text-lg text-white font-semibold py-7 px-6 hover:bg-white hover:text-blue-500" to="/courses">kurslar</Link>
                    </li>
                    <li>
                        <Link className="links uppercase text-lg text-white font-semibold py-7 px-6 hover:bg-white hover:text-blue-500" to="/about">biz haqimizda</Link>
                    </li>
                    <li>
                        <Link className="links uppercase text-lg text-white font-semibold py-7 px-6 hover:bg-white hover:text-blue-500" to="/news">yangiliklar</Link>
                    </li>
                    <li>
                        <Link className="links uppercase text-lg text-white font-semibold py-7 px-6 hover:bg-white hover:text-blue-500" to="/contact">biz bilan aloqa</Link>
                    </li>
                </ul>
                <div className="flex items-center">
                    <div className="dropdown">
                        <div className="flex items-center cursor-pointer" onClick={() => setClicked(!clicked)}>
                            <button className="uppercase text-lg text-white font-semibold mr-1">{defaultLan}</button>
                            <FaAngleDown className={ clicked ? "text-white angelDown rotateTop" : "text-white"} />
                        </div>
                        <div className={clicked ? "dropdown-menu active" : "dropdown-menu"}>
                            <ul>
                                <li>
                                    <a href="#" className="uppercase text-lg text-blue-500 font-semibold hover:bg-blue-500 hover:text-white px-3" onClick={() => setDefaultLan(selectedRu) || setClicked(!clicked)}>{selectedRu}</a>
                                </li>
                                <li>
                                    <a href="#" className="uppercase text-lg text-blue-500 font-semibold hover:bg-blue-500 hover:text-white px-3" onClick={() => setDefaultLan(selectedEn) || setClicked(!clicked)}>{selectedEn}</a>
                                </li>
                                <li>
                                    <a href="#" className="uppercase text-lg text-blue-500 font-semibold hover:bg-blue-500 hover:text-white px-3" onClick={() => setDefaultLan(selectedUz) || setClicked(!clicked)}>{selectedUz}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/login" className="links py-2 px-10 bg-white rounded-xl uppercase text-lg text-blue-500 font-semibold hover:border-opacity-0 ml-10">kirish</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;