import React from 'react';
import Navigation from '../components/navigation';
import Footer from "../components/footer";
import AContact from "../components/about/aContact";
import AboutCards from "../components/about/aboutCards";

const About = () => {
    return (
        <div>
            <Navigation/>
            <div className="container mx-auto">
                <h1 className="text-lg font-bold uppercase text-center lg:my-10 sm:my-3">markaz haqida</h1>
                <AboutCards />
                <AContact />
            </div>
            <Footer/>
        </div>
    );
};


export default About;