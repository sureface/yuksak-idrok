import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles/navigation.scss"
import { FaBars} from "react-icons/fa";
import Logo from "../assets/images/logoYuksakIdrok.png"
import LogoBlue from "../assets/images/blue-logo.png"

const Navigation = () => {

     const [showNav, setShowNav] = useState(false);

    const showToggler = () => {
        setShowNav(!showNav);  
    }

    return (
        <div className="navigationBar h-20 lg:bg-blue-500 bg-white flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <button type="button" className={"lg:hidden block"} onClick={showToggler}>
                    <FaBars  className="text-4xl text-blue-500"/>
                </button>
                <div>
                    <Link to="/"><img className="w-32 lg:block hidden" src={Logo} alt="oops something went wrong"/></Link>
                    <Link onClick={showToggler} to="/"><img className="w-32 lg:hidden block" src={LogoBlue} alt="oops something went wrong"/></Link>
                </div>
                <ul className={ showNav ? "lg:flex hidden items-center lg:ml-10 nav-link   show" : "lg:flex items-center lg:ml-10 nav-link  hidden "}>
                    <li>
                        <Link onClick={showToggler} className="links uppercase text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg text-white font-semibold lg:py-7 lg:px-6 hover:bg-white hover:text-blue-500" to="/courses">kurslar</Link>
                    </li>
                    <li>
                        <Link onClick={showToggler} className="links uppercase text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg text-white font-semibold lg:py-7 lg:px-6 hover:bg-white hover:text-blue-500" to="/about">biz haqimizda</Link>
                    </li>
                    <li>
                        <Link onClick={showToggler} className="links uppercase text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg text-white font-semibold lg:py-7 lg:px-6 hover:bg-white hover:text-blue-500" to="/news">yangiliklar</Link>
                    </li>
                    <li>
                        <Link onClick={showToggler} className="links uppercase text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg text-white font-semibold lg:py-7 lg:px-6 hover:bg-white hover:text-blue-500" to="/contact">biz bilan aloqa</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;