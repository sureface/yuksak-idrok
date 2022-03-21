import React, {useState, useEffect} from 'react';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import courseImg from "../assets/images/cardimage1.png"; 
import { BsFillTelephoneFill } from 'react-icons/bs';
import {FiSend} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import MainInfo from '../components/mainInfo';
import axios from 'axios'
import { API_URL } from '../utils/axios';
import { useParams } from 'react-router-dom'

const RegisterCourse = () => {


    const [toggle, setToggle] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [course, setCourse] = useState([]);
    


    const { idCourse } = useParams();
    
    useEffect(() => {
        getOneCourse();
    });

    const getOneCourse = async () => { 

        await axios.get(`${API_URL}/courses/${idCourse}`)
        .then(res => { 
            setCourse(res.data.course);  
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    //toggle for  modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };



    // get current tab of page
    const currentTab = (index) => {
        setToggle(index)
    }

    return <div>
        <Navigation />
        <div className="container mx-auto">
            <h1 className="w-full text-2xl font-semibold text-center vl:my-5 sm:my-10 uppercase">
                {
                    course.map(item => {
                        return item.title
                    })
                    

                 }
            </h1>

            <div className="grid grid-cols-2 my-8 rounded-2xl overflow-hidden"
            style={{backgroundColor: '#F7F7F7'}}
            >
                <div className='col-span-2 sm:col-span-1'>
                        <img src={courseImg} className='' alt="" />
                </div>

                <div className="flex flex-col justify-between col-span-2 sm:col-span-1 xs:p-10 p-5">
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

                    <div className=' flex lg:flex-row   gap-2 flex-col items-center justify-between mt-5'>
                        <button onClick={toggleModal} className="text-white text-sm w-full  font-semibold flex gap-2 items-center justify-center  bg-blue-500 py-2 px-3 rounded-xl">
                            <FiSend  />
                            Biz bilan aloqa
                        </button> 


                        <a className='text-white text-sm w-full font-semibold flex gap-2 items-center justify-center bg-blue-500 py-2 px-3 rounded-xl' href="tel:+998909000909"> 
                            <BsFillTelephoneFill/> Hoziroq kursga yoziling
                        </a>
                    </div>

                    <div className={isOpen ? "fixed top-3 left-3 right-3 bottom-3 h-full" : "hidden"}>
                        <AiOutlineClose onClick={toggleModal} className='absolute right-3 top-3 text-white text-2xl cursor-pointer' />
                        <MainInfo/> 
                    </div>

                </div>
            </div>

        </div>
        <Footer/>
  </div>;
};

export default RegisterCourse;
