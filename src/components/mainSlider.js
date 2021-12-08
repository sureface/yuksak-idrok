import React from 'react';

import "../styles/mainSwiper.scss"

import Teacher1 from "../assets/images/teacher1.jpg"

const MainSlider = () => {

    return (
        <div className="mainSlider my-64">
            <div className="container mx-auto flex items-center justify-center">
                <div className="sliderBox">
                    <span className="span1">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span2">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span3">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span4">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span5">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span6">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span7">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                    <span className="span8">
                        <img src={Teacher1} alt="oops sorry something wrong"/>
                        <h1 className="text-white text-xl font-bold">Jasur Jo'rayev</h1>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;