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
            <div className="py-12">
                <h1 className="text-black text-2xl uppercase font-bold text-center my-10">BIZ HAQIMIZDA</h1>
                <MainInfo />
            </div>
            <MainInfoCard />
            <MainPartners />
            <Footer />
        </div>
    );
};

export default Home;