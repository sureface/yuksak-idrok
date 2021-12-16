import React from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import AboutContact from "../components/about/AboutContact"

const Contact = () => {
    return (
        <div >
            <Navigation />
            <div className='p-12'>
                <h1 className='text-2xl text-center tracking-wider'>BIZ BILAN ALOQA </h1>
            <AboutContact />
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;