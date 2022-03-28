import React from 'react';
import MainHeader from "../components/mainHeader";
import CourseSection from "../components/courseSection";
import RegisterFast from "../components/registerFast";
import MainAboutUs from "../components/mainAboutUs";
import MainVideo from "../components/mainVideo"; 
import TeacherSlide from "../components/teachers/TeacherSlide";
import MainInfo from "../components/mainInfo";
import MainInfoCard from "../components/mainInfoCard";
import Footer from "../components/footer";
import MainPartners from "../components/mainPartners";

const Home = () => {
    return (
        <div className="app relative">
            <MainHeader />
            <CourseSection />
            <MainAboutUs />
            <MainVideo />
            <RegisterFast />
            <div className="container mx-auto">
            <h1 className="text-black text-2xl text-blue-500 uppercase font-bold text-center my-10">USTOZLARIMIZ</h1>
                <TeacherSlide />
            </div>
            <MainInfo />
            <MainInfoCard />
            <MainPartners />
            <Footer />
        </div>
    );
};

export default Home;