import React from 'react'
import Slider from 'react-slick';
import ItemImg from "../../assets/images/teacher.jpg"
import "../../styles/teacherSlide.scss"

const TeacherSlide = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
        <div>
            <Slider  {...settings}>
                <div className='bg rounded-xl overflow-hidden'>
                    <img className='w-full' src={ItemImg} alt="" />
                    <div className='p-4'>
                        <h1 className='text-white text-xl tracking-wider font-medium'>AKMAL ANVAROV </h1>
                        <p className="text-white">Markaz asoschisi</p>
                    </div>
                </div>
                <div className='bg rounded-xl overflow-hidden'>
                    <img className='w-full' src={ItemImg} alt="" />
                    <div className='p-4'>
                        <h1 className='text-white text-xl tracking-wider font-medium'>Mis. MALIKA  </h1> 
                        <p className="text-white">Ingiliz tili o’qituvchisi</p>
                    </div>
                </div>
                <div className='bg rounded-xl overflow-hidden'>
                    <img className='w-full' src={ItemImg} alt="" />
                    <div className='p-4'>
                        <h className='text-white text-xl tracking-wider font-medium'>Mr. MASHXUR </h> 
                        <p className="text-white">Matematika o’qituvchisi </p>
                    </div>
                </div>
                <div className='bg rounded-xl overflow-hidden'>
                    <img className='w-full' src={ItemImg} alt="" />
                    <div className='p-4'>
                        <h1 className='text-white text-xl tracking-wider font-medium'>Mr. JUJU</h1>
                        <p className="text-white"> Arab tili O’qituvchisi</p>
                    </div>
                </div>
                <div className='bg rounded-xl overflow-hidden'>
                    <img className='w-full' src={ItemImg} alt="" />
                    <div className='p-4'>
                        <h1 className='text-white text-xl tracking-wider font-medium'>ALIXAN</h1>
                        <p className="text-white">Yetakchi O’qituvchi</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default TeacherSlide
