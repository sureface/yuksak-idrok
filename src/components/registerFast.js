import React, {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import MainInfo from "./mainInfo";

const RegisterFast = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-blue-500 py-6 my-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <h1 className='md:text-xl text-lg text-white hidden sm:flex font-semibold md:mr-20 mr-10'>Hoziroq ro’yxatdan o’ting,  joylar soni cheklangan!</h1>
                    <button type="button" className="bg-white text-blue-500 md:text-xl text-lg font-semibold rounded-lg uppercase py-3 px-5" onClick={() => setIsOpen(!isOpen)}>A’ZO BO’LISH</button>
                </div>
            </div>
            <div
                className={isOpen ? "fixed top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center bg-gray-700 bg-opacity-75 transition ease-in duration-200" : "hidden"}
            >
                <div className="relative">
                    <AiOutlineClose onClick={() => setIsOpen(!isOpen)}
                                    className='absolute right-2 top-12 text-white text-2xl cursor-pointer transition duration-500 ease-in-out transform  hover:rotate-180'/>
                    <MainInfo />
                </div>
            </div>
        </div>
    );
};

export default RegisterFast;