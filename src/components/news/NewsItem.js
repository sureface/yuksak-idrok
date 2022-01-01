import React from 'react'
import Slider from 'react-slick';
import NewsItem1 from "../../assets/images/news2_1.png"
import NewsItem2 from "../../assets/images/news2_2.png"
import NewsItem3 from "../../assets/images/news2_3.png"

const NewsItem = () => {
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
            <Slider className='slider__news' {...settings}>
                <div className='slider__news'>
                <img src={NewsItem1} alt="" />
                <p>Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada Natijalariga 
                    ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar. 

                    Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada  ...</p>
                </div>
                <div className='slider__news'>
                <img src={NewsItem2} alt="" />
                <p>Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada Natijalariga 
                    ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar. 

                    Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada  ...</p>
                </div>
                <div className='slider__news'>
                <img src={NewsItem3} alt="" />
                <p>Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada Natijalariga 
                    ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar. 

                    Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada  ...</p>
                </div>

                <div className='slider__news'>
                <img src={NewsItem1} alt="" />
                <p>Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada Natijalariga 
                    ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar. 

                    Abiturientlarimiz orasidan Azamjon
                    Komilov, Murod Axmedov va Nozima 
                    Sattorova 2021 - yilda bo’lib o’tgan 
                    Matematika fanidan bo’lib o’tgan 10-11
                    sinflar orasidagi Olimpiada  ...</p>
                </div>
                
            </Slider>    
        </div>
    )
}

export default NewsItem
