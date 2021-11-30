import React from 'react';
import MainHeader from "../components/mainHeader";
import CourseSection from "../components/courseSection";
import RegisterFast from "../components/registerFast";
import MainAboutUs from "../components/mainAboutUs";
import MainVideo from "../components/mainVideo";
import MainSlider from "../components/mainSlider";
import MainInfo from "../components/mainInfo";

const Home = () => {
    return (
        <div className="app">
            <MainHeader />
            <CourseSection />
            <RegisterFast />
            <MainAboutUs />
            <MainVideo />
            <MainSlider />
            <MainInfo />
        </div>
    );
};

export default Home;