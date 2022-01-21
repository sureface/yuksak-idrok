import React from 'react';
import Slider from 'react-slick';
import ItemImg from "../assets/images/teacher.jpg";
import "../styles/teacherSlide.scss";

const MainSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="mainSlider my-20">
            <div className="container mx-auto">
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
        </div>
    );
};

export default MainSlider;