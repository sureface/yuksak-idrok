import React, {useState} from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import courseImg from "../assets/images/cardimage1.png";
import {FaUserPlus} from "react-icons/fa"

const RegisterCourse = () => {


    const [group, setGroup] = useState(true)
    const [individual, setIndividual] = useState(false)



    const handleChange = () => { 
        setGroup(!group);
        setIndividual(!individual);
    }

    return <div>
        <Navigation />
        <div className="container mx-auto">
            <h1 className="w-full text-2xl font-semibold text-center vl:my-5 sm:my-10">
            KURSLARGA YOZILISH 
            </h1>
            <p className="w-full xs:text-lg vl:text-base">
            INGILIZ TILI BOSHLOVCHILAR UCHUN
            </p>
            <div className="my-8 flex md:flex-row vl:flex-col gap-7 rounded-2xl overflow-hidden"
            style={{backgroundColor: '#F7F7F7'}}
            >
                <div className="md:w-1/2 sm:w-full">
                        <img src={courseImg} className='' alt="" />
                </div>

                <form className="md:w-1/2 sm:w-full p-10">
                    <div className="flex xs:gap-20 vl:gap-7" >
                        <label htmlFor="group" className="flex items-center gap-5">
                            <input type="radio"  checked name='radio' id='group' className="" />
                            <p className='text-lg' onClick={handleChange} >Guruh </p>
                        </label>
                        <label htmlFor="individual" className="flex items-center gap-5">
                            <input type="radio" name='radio' id='individual' className="" />
                            <p className='text-lg' onClick={handleChange} >Individual </p>
                        </label>
                    </div> 

                    <div className="">
                        <div className={group ? "flex flex-col gap-3 pt-3" : "hidden"}>
                            <p className="">9 - 11 kishilik kurs  </p>
                            <p className="">Davomiyligi 3 oydan - 5 oygacha </p>
                            <p className="">Dushanba / Chorshanba / Juma </p>
                            <label htmlFor="radio1" className="flex items-center gap-4"><input name="date-check"   id='radio1' type="radio" /> <p className="">09:00 dan - 11:00 gacha </p> </label>

                            <label htmlFor="radio2" className="flex items-center gap-4"> <input name="date-check" id='radio2' type="radio" /> <p className="">11:00 dan - 13:00 gacha </p> </label>

                            <label htmlFor="radio3" className="flex items-center gap-4"> <input name="date-check" id='radio3' type="radio" /> <p className="">13:00 dan - 15:00 gacha </p> </label>

                            <label htmlFor="radio4" className="flex items-center gap-4"> <input name="date-check" id='radio4' type="radio" /><p className="">15:00 dan - 17:00 gacha </p> </label>

                            <p className=''>1 oyda - 12 ta dars</p>
                            <p className=''>1 oylik to’lov 500 000 so’m!</p>
                        </div>
                        <div className={individual ? "flex flex-col gap-3 pt-3" : "hidden"}>
                        <p className="">1 kishilik kurs  </p>
                            <p className="">Davomiyligi 3 oydan - 5 oygacha </p>
                            <p className="">Dushanba / Chorshanba / Juma </p>
                            <label htmlFor="radio5" className="flex items-center gap-4"><input name="date-check2"   id='radio5' type="radio" /> <p className="">09:00 dan - 11:00 gacha </p> </label>

                            <label htmlFor="radio6" className="flex items-center gap-4"> <input name="date-check2" id='radio6' type="radio" /> <p className="">11:00 dan - 13:00 gacha </p> </label>

                            <label htmlFor="radio7" className="flex items-center gap-4"> <input name="date-check2" id='radio7' type="radio" /> <p className="">13:00 dan - 15:00 gacha </p> </label>

                            <label htmlFor="radio8" className="flex items-center gap-4"> <input name="date-check2" id='radio8' type="radio" /><p className="">15:00 dan - 17:00 gacha </p> </label>

                            <p className=''>1 oyda - 12 ta dars</p>
                            <p className=''>1 oylik to’lov 1 000 000 so’m!</p>
                        </div>
                    </div>

                    <button className='mt-5 mx-auto py-2 px-16 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold'>  <FaUserPlus  className="text-2xl ml-3" /></button>

                </form>
            </div>
        </div>
        <Footer/>
  </div>;
};

export default RegisterCourse;
