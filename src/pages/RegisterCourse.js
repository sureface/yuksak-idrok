import React, {useState} from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import courseImg from "../assets/images/cardimage1.png";
import {FaUserPlus} from "react-icons/fa"

const RegisterCourse = () => {


    const [toggle, setToggle] = useState(1);



    // get current tab of page
    const currentTab = (index) => {
        setToggle(index)
    }

    return <div>
        <Navigation />
        <div className="container mx-auto">
            <h1 className="w-full text-2xl font-semibold text-center vl:my-5 sm:my-10 uppercase">
            KURSLARGA YOZILISH 
            </h1>

            <div className="grid grid-cols-2 my-8 rounded-2xl overflow-hidden"
            style={{backgroundColor: '#F7F7F7'}}
            >
                <div>
                        <img src={courseImg} className='' alt="" />
                </div>

                <div className="p-10">
                    <div className="grid grid-cols-2 gap-2" >
                        <button className={toggle === 1 ? "flex items-center justify-center py-2 text-lg font-semibold text-blue-500 border-t-2 border-blue-500" : "flex items-center justify-center py-2 text-lg font-semibold text_black"} onClick={() => currentTab(1)}>
                            Guruh
                        </button>
                        <button className={toggle === 2 ? "flex items-center justify-center py-2 text-lg font-semibold text-blue-500 border-t-2 border-blue-500" : "flex items-center justify-center py-2 text-lg font-semibold text_black"} onClick={() => currentTab(2)}>
                            Individual
                        </button>
                    </div>

                    <div>
                        <div className={toggle === 1 ? "flex flex-col gap-3 pt-3" : "hidden"}>
                            <p className="">9 - 11 kishilik kurs  </p>
                            <p className="">Davomiyligi 3 oydan - 5 oygacha </p>
                            <p className="">Dushanba / Chorshanba / Juma </p>

                            <label htmlFor="radio1" className="flex items-center gap-4">
                                <input name="date-check"   id='radio1' type="radio" /> <p className="">09:00 dan - 11:00 gacha </p>
                            </label>

                            <p className=''>1 oyda - 12 ta dars</p>
                            <p className=''>1 oylik to’lov 500 000 so’m!</p>
                        </div>

                        <div className={toggle === 2 ? "flex flex-col gap-3 pt-3" : "hidden"}>
                        <p className="">1 kishilik kurs  </p>
                            <p className="">Davomiyligi 3 oydan - 5 oygacha </p>
                            <p className="">Dushanba / Chorshanba / Juma </p>
                            <label htmlFor="radio5" className="flex items-center gap-4">
                                <input name="date-check2"   id='radio5' type="radio" /> <p className="">09:00 dan - 11:00 gacha </p>
                            </label>
                            <p className=''>1 oyda - 12 ta dars</p>
                            <p className=''>1 oylik to’lov 1 000 000 so’m!</p>
                        </div>
                    </div>

                    <button className='mt-5 mx-auto py-2 px-16 bg-blue-500 rounded-xl flex items-center pointer justify-center text-white text-lg font-semibold'>  <FaUserPlus  className="text-2xl ml-3" /></button>

                </div>
            </div>
        </div>
        <Footer/>
  </div>;
};

export default RegisterCourse;
