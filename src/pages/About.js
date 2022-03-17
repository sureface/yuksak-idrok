import React from 'react';
import Navigation from '../components/navigation';
import Footer from "../components/footer";
import AboutCards from "../components/about/aboutCards";
import Certificate from "../components/certificate";
import MainInfoCard from "../components/mainInfoCard";

const About = () => {
    return (
        <div>
            <Navigation/>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold uppercase text-center md:my-10 vl:my-3 text-blue-500">o'quv markazimiz haqida</h1>
                <AboutCards />
                <Certificate />
                <MainInfoCard />
            </div>
            <Footer/>
        </div>
    );
};


export default About;