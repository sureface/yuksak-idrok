import React, {useState, useEffect} from "react";
import Slider from "react-slick";  
import axios from "axios";
import { API_URL } from "../../utils/axios";
import { Link } from "react-router-dom";

const NewsItem = () => {
    
    const [news, setNews] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        getNews();
    }, []);
    useEffect(() => {
        if (news.length !== 0) {
            setIsLoading(false)
        }
    }, [news]);

    const getNews = async () => { 

        await axios.get(`${API_URL}/news`)
            .then(res => { 
                setNews(res.data.news);
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
            <div className="mb-16">
                {
                    isLoading ? (
                        <h1>Yuklanmoqda...</h1>
                    ): (
                        <Slider {...settings}>
                    {
                        news.map((item) => { 
                            return (
                                <div className="bg-white rounded-xl overflow-hidden" key={item.id}>
                                    <div className="w-full"
                                        style={{
                                            background: ' #eee',  
                                            height: '200px',
                                        }}
                                    >
                                        <img className="w-full rounded-t-xl" src={item.img} alt=" " 
                                            
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h2 className="sm:text-xl ss:text-lg font-semibold">{item.title}</h2>
                                        <p className="text-justify py-2">{item.subtitle.substring(0, 70)}...</p>
                                        <Link
                                            className="pointer py-2 px-5 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold"
                                            to={`/full-news/${item.id}`}>
                                            Batafsil</Link>
                                    </div>
                                </div>
                            )
                        })
                    }   
                </Slider>
                    )
               }
            </div>
        );
    }

export default NewsItem;