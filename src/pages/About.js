import React from 'react';
import Navigation from '../components/navigation';
import Footer from "../components/footer";
import AboutItem from '../components/about/AboutItem';
import AboutContact from '../components/about/AboutContact';

const About = () => {
    return (
        <div>
        <Navigation />
        <div className='p-12'>
            <h1 className="text-center leading-normal tracking-wider text-2xl"> MARKAZ HAQIDA</h1> 
            <AboutItem />   
            <AboutContact />
             
        </div>
        <Footer/>
        </div>   
    );
};



export default About;