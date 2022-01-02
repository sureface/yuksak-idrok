import React from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import AContact from "../components/about/AboutContact"

const Contact = () => {
    return (
        <div >
            <Navigation />
            <div className='p-12'>
                <h1 className='text-2xl text-center tracking-wider'>BIZ BILAN ALOQA </h1>
            <AContact />
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;