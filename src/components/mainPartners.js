import React from 'react';
import partners1 from "../assets/images/hamkor1.png"
import partners2 from "../assets/images/hamkor2.png"
import partners3 from "../assets/images/hamkor3.png"
import partners4 from "../assets/images/hamkor4.png"

const MainPartners = () => {
    return (
        <div className="mainPartners my-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold mb-20">hamkorlarimiz</h1>
                <div className="flex items-center justify-between flex-wrap">
                    <div>
                        <img src={partners1} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners2} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners3} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners4} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners1} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners2} alt="oops something wrong"/>
                    </div>
                    <div>
                        <img src={partners4} alt="oops something wrong"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPartners;