import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer"
import TeacherSlide from '../components/teachers/TeacherSlide';
import EnglishTeacher from '../components/teachers/EnglishTeacher';

const Teachers = () => {
    return (
        <div>
            <Navigation />
            <div className='container mx-auto'>
                <h1 className="font-medium text-2xl py-8 tracking-wider text-center">
                TAJRIBALI USTOZLAR
                </h1>
                <TeacherSlide />
                <EnglishTeacher />
            </div>
            <Footer/>
        </div>
    );
};

export default Teachers;