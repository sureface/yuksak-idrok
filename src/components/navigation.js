import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/navigation.scss"
import {FaAngleDown} from "react-icons/fa";
// import Logo from "../assets/images/logoYuksakIdrok.png"
import newYearLogo from "../assets/images/newYearLogo.png"

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const ShowDropDown = () => {
        setIsOpen(isOpen === true);
        console.log(setIsOpen)
    }

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
                        <div className="lanSelector flex items-center">
                            <button className="uppercase text-lg text-white font-semibold mr-1" onClick={ShowDropDown}>uz</button>
                            <FaAngleDown className="text-white" />
                        </div>
                        <div className="dropdown-menu">
                            <ul>
                                <li>
                                    <a href="#" className="uppercase text-lg text-blue-500 font-semibold">RU</a>
                                </li>
                                <li>
                                    <a href="#" className="uppercase text-lg text-blue-500 font-semibold">EN</a>
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