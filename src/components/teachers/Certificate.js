import React from 'react'
import Slider from "react-slick";
import "../../styles/teacherSlide.scss";
import cert1 from "../../assets/images/cert1.png"
import cert2 from "../../assets/images/cert2.png"
import cert3 from "../../assets/images/cert3.png"
import cert4 from "../../assets/images/cert4.png"
import cert5 from "../../assets/images/cert5.png"
import cert6 from "../../assets/images/cert6.png"

const Certificate = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <div className='py-12'>
            <h1 className='font-medium text-2xl tracking-wider text-center'>YUTUQLAR</h1>
            <Slider {...settings} >
                <img src={cert1} alt="" />
                <img src={cert2} alt="" />
                <img src={cert3} alt="" />
                <img src={cert4} alt="" />
                <img src={cert5} alt="" />
                <img src={cert6} alt="" />

            </Slider>
            
        </div>
    )
}

export default Certificate
