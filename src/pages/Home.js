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
import NewYearLeft from "../assets/images/newYear-Left.png"
import NewYearRight from "../assets/images/newYear-Right.png"
import MainPartners from "../components/mainPartners";

const Home = () => {
    return (
        <div className="app relative">
            <img src={NewYearLeft} className="absolute top-1 left-0 z-40 w-32" alt="oops something wrong"/>
            <img src={NewYearRight} className="absolute top-1 right-0 z-40 w-32" alt="oops something wrong"/>
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