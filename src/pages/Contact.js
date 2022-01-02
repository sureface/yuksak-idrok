import React from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import AContact from "../components/about/aContact";
import {BiPhoneCall} from  "react-icons/bi"

const Contact = () => {
    return (
        <div>
            <Navigation/>
            <div className="container mx-auto">
                <div className="w-full text-2xl font-semibold text-center my-10">
                    BIZ BILAN ALOQA
                </div>
                <AContact/>
                <div className="w-full flex items-center justify-evenly my-10">
                    <h1 className="text-xl">Savollarigizga javob oling!</h1>
                    <span className="text-2xl font-bold text-blue-500">+998 (71) 128 19 97</span>
                    <a href="tel:+998711281997" className="bg-white text-blue-500 text-4xl rounded-xl px-16 py-2">
                        <BiPhoneCall />
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;