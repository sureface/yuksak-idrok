import React from 'react';
import Slider from 'react-slick';
import partners1 from "../assets/images/hamkor1.png"
import partners2 from "../assets/images/hamkor2.png"
import partners3 from "../assets/images/hamkor3.png"
import partners4 from "../assets/images/hamkor4.png"

const MainPartners = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="mainPartners my-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold mb-20">hamkorlarimiz</h1>
                <Slider {...settings}>
                    <div>
                        <img className="w-24" src={partners1} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners2} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners3} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners4} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners1} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners2} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img className="w-24" src={partners4} alt="oops something wrong"/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default MainPartners;