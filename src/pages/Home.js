import React from 'react';
import MainHeader from "../components/mainHeader";
import CourseSection from "../components/courseSection";
import RegisterFast from "../components/registerFast";
import MainAboutUs from "../components/mainAboutUs";
import MainVideo from "../components/mainVideo";
import MainSlider from "../components/mainSlider";
import MainInfo from "../components/mainInfo";
import MainInfoCard from "../components/mainInfoCard";
import Footer from "../components/footer";
import MainPartners from "../components/mainPartners";

const Home = () => {
    return (
        <div className="app relative">
            <MainHeader />
            <CourseSection />
            <RegisterFast />
            <MainAboutUs />
            <MainVideo />
            <MainSlider />
            <MainInfo />
            <MainInfoCard />
            <MainPartners />
            <Footer />
        </div>
    );
};

export default Home;