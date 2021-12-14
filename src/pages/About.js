import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/navigation';
import Footer from "../components/footer";
import AboutItem from '../components/about/AboutItem';
import AboutContact from '../components/about/AboutContact';

const About = () => {
    return (
        <div>
        <Navigation />
        <AboutStyled>
            <h1 className="title"> MARKAZ HAQIDA</h1> 
            <AboutItem />   
            <AboutContact />
             
        </AboutStyled>
        <Footer/>
        </div>   
    );
};

const AboutStyled = styled.section`
 padding:50px 5%;
 .title{
     line-height: 150%;
     letter-spacing: 0.03em;
     color: #1C1C1C;
     font-size: 26px;
 }
`

export default About;