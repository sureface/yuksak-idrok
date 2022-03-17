import React, { useState, useEffect} from 'react'
import Slider from 'react-slick';
import ItemImg from "../../assets/images/teacher.jpg";
import "../../styles/teacherSlide.scss";
import axios from 'axios';
import { API_URL } from '../../utils/axios';

const TeacherSlide = () => {

    const [teachers, setTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       getTeachers();
    }, []);

    useEffect(() => {
        if (teachers.length !== 0) {
            setIsLoading(false)
        }
    }, [teachers]);

    const getTeachers = async () => { 

        await axios.get(`${API_URL}/teachers`)
            .then(res => { 
                setTeachers(res.data.teachers);
            })
            .catch(err => {
                console.log(err);
            })

    }

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
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
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
        <div>
            {
                isLoading ? (
                    <h2>Yuklanmoqda...</h2>
                ): (
                    <Slider  {...settings}>
                {
                    teachers.map((teacher) => {
                        return (
                            <div key={teacher.id} className="bg rounded-xl overflow-hidden">
                                <div className="teacher-slide__img"
                                style={{
                                        backgroundImage: `url(${ItemImg})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        height: '200px'
                                    }}    
                                >
                                    <img src={teacher.img} alt="" />
                                     
                                </div>
                                <div className="p-4">
                                    <h1 className="text-white text-xl tracking-wider font-medium">{teacher.first_name} { teacher.last_name}</h1> 
                                    <p className='text-white'>{ teacher.description}</p>
                                </div>
                            </div>
                        )
                    })
                 }
                
            </Slider>
                )
            }
        </div>
    )
}

export default TeacherSlide
