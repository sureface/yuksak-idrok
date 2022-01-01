import React from 'react';
import Navigation from '../components/navigation';
import Footer from "../components/footer";
import AboutCards from "../components/about/aboutCards";
import AboutContact from "../components/about/aboutContact";

const About = () => {
    return (
        <div>
            <Navigation/>
            <div className="container mx-auto">
                <h1 className="text-lg font-bold uppercase text-center my-10">markaz haqida</h1>
                <AboutCards />
                <AboutContact />
            </div>
            <Footer/>
        </div>
    );
};


export default About;