import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";

import "swiper/swiper.min.css"
import "swiper/swiper-bundle.min.js.map"
import "../styles/mainSwiper.scss"

import Teacher1 from "../assets/images/teacher1.jpg"
import Teacher2 from "../assets/images/teacher2.png"
import Teacher4 from "../assets/images/teacher4.jpg"
import Teacher5 from "../assets/images/teacher5.jpg"
import Teacher6 from "../assets/images/teacher6.png"
import Teacher7 from "../assets/images/teacher7.jpg"

import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

const MainSlider = () => {
    return (
        <div className="mainSlider my-20">
            <div className="container mx-auto">
                <h1 className="text-3xl text-black font-bold text-center mb-3">O’QITUVHCILARIMIZ</h1>
                <div className="swiper-container">
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} loop={true}
                            coverflowEffect={{
                                "rotate": 20,
                                "stretch": 2,
                                "depth": 350,
                                "modifier": 1,
                                "slideShadows": true
                            }} pagination={true} className="mySwiper">
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher1}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher2}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher4}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher5}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher6}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher7}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher4}/>
                        </SwiperSlide>
                        <SwiperSlide className="shadow-xl">
                            <img src={Teacher2}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;