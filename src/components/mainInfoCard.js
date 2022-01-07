import React from 'react';
import cardImge1 from "../assets/images/cardrasm1.png"
import cardImge2 from "../assets/images/cardrasm2.png"
import cardImge3 from "../assets/images/cardrasm3.png"

const MainInfoCard = () => {
    return (
        <div className="mainInfoCard py-20">
            <div className="container mx-auto">
                <h1 className="text-center uppercase text-2xl text-black font-bold mb-20">bizda</h1>
                <div className="grid grid-cols-3 gap-10 w-full">
                    <div className="card bg-white rounded-xl hover:shadow-xl w-full hover:scale-75">
                        <div>
                            <img className="w-full" src={cardImge1} alt="oops something wrong"/>
                        </div>
                        <div className="card-content p-7">
                            <h1 className="text-black text-2xl font-semibold text-center mb-5">Online ro’yxatdan o’tish</h1>
                            <p className="text-black text-lg font-medium text-justify">
                                Biz bilan online tarzdda bog’laning,
                                ro’yxatdan o’ting, kursimiz a’zosiga
                                aylaning. Kurslarimizda sizni kutib
                                qolamiz! Biz bilan online tarzdda
                                bog’laning, ro’yxatdan o’ting ...
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white rounded-xl hover:shadow-xl w-full hover:scale-75">
                        <div>
                            <img className="w-full" src={cardImge2} alt="oops something wrong"/>
                        </div>
                        <div className="card-content p-7">
                            <h1 className="text-black text-2xl font-semibold text-center mb-5">Online ro’yxatdan o’tish</h1>
                            <p className="text-black text-lg font-medium text-justify">
                                Biz bilan online tarzdda bog’laning,
                                ro’yxatdan o’ting, kursimiz a’zosiga
                                aylaning. Kurslarimizda sizni kutib
                                qolamiz! Biz bilan online tarzdda
                                bog’laning, ro’yxatdan o’ting ...
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white rounded-xl hover:shadow-xl w-full hover:scale-75">
                        <div>
                            <img className="w-full" src={cardImge3} alt="oops something wrong"/>
                        </div>
                        <div className="card-content p-7">
                            <h1 className="text-black text-2xl font-semibold text-center mb-5">Online ro’yxatdan o’tish</h1>
                            <p className="text-black text-lg font-medium text-justify">
                                Biz bilan online tarzdda bog’laning,
                                ro’yxatdan o’ting, kursimiz a’zosiga
                                aylaning. Kurslarimizda sizni kutib
                                qolamiz! Biz bilan online tarzdda
                                bog’laning, ro’yxatdan o’ting ...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfoCard;