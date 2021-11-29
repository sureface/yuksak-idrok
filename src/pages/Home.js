import React from 'react';
import MainHeader from "../components/mainHeader";
import CourseSection from "../components/courseSection";
import RegisterFast from "../components/registerFast";
import MainAboutUs from "../components/mainAboutUs";

const Home = () => {
    return (
        <div className="app">
            <MainHeader />
            <CourseSection />
            <RegisterFast />
            <MainAboutUs />
        </div>
    );
};

export default Home;