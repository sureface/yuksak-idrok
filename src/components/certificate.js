import React from 'react';
import cert1 from "../assets/images/cert1.png"
import cert2 from "../assets/images/cert2.png"
import cert3 from "../assets/images/cert3.png"
import cert4 from "../assets/images/cert4.png"
import cert5 from "../assets/images/cert5.png"
import cert6 from "../assets/images/cert6.png"

const Certificate = () => {
    return (
        <section className={"certificate sm:pt-24 xs:pt-12 py-6"}>
            <h1 className={"text-2xl font-bold uppercase text-center md:my-10 my-6 text-blue-500"}>Litsenziayalar va sertifikatlar</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                <div>
                    <img src={cert1} alt="xatolik yuz berdi"/>
                </div>
                <div>
                    <img src={cert2} alt="xatolik yuz berdi"/>
                </div>
                <div>
                    <img src={cert3} alt="xatolik yuz berdi"/>
                </div>
                <div>
                    <img src={cert4} alt="xatolik yuz berdi"/>
                </div>
                <div>
                    <img src={cert5} alt="xatolik yuz berdi"/>
                </div>
                <div>
                    <img src={cert6} alt="xatolik yuz berdi"/>
                </div>
            </div>
        </section>
    );
};

export default Certificate;