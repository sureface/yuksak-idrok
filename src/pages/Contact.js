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
                <div className="w-full text-2xl font-semibold text-center vl:my-5 sm:my-10">
                    BIZ BILAN ALOQA
                </div>
                <AContact/>
                <div className="w-full flex sm:flex-row vl:flex-col sm:gap-0 vl:gap-6 items-center sm:justify-evenly vl:justify-center   vl:my-5 sm:my-10">
                    <h1 className="md:text-xl sm:text-lg vl:text-2xl">Savollarigizga javob oling!</h1>
                    <span className="md:text-2xl sm:text-xl vl:text-2xl font-bold text-blue-500">+998 (71) 128 19 97</span>
                    <a href="tel:+998711281997" className="bg-white text-blue-500 md:text-4xl sm:text-3xl vl:text-2xl rounded-xl vl:px-10 md:px-16 py-2">
                        <BiPhoneCall />
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;