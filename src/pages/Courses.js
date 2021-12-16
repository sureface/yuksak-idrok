import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer"
import CourseSection from '../components/courseSection';

const Courses = () => {
    return (
        <div>
            <Navigation />
            <CourseSection/>
            <Footer/>
            
        </div>
    );
};

export default Courses;