import React, {Component} from "react";
import Slider from "react-slick";
import NewsItem1 from "../../assets/images/news2_1.png";

export default class NewsItem extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="mb-16">
                <Slider {...settings}>
                    <div className="bg-white rounded-xl">
                        <div className="w-full">
                            <img className="w-full rounded-t-xl" src={NewsItem1} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className="text-justify">
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada Natijalariga
                                ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar.
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada ...
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="w-full">
                            <img className="w-full rounded-t-xl" src={NewsItem1} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className="text-justify">
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada Natijalariga
                                ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar.
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada ...
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="w-full">
                            <img className="w-full rounded-t-xl" src={NewsItem1} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className="text-justify">
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada Natijalariga
                                ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar.
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada ...
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="w-full">
                            <img className="w-full rounded-t-xl" src={NewsItem1} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className="text-justify">
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada Natijalariga
                                ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar.
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada ...
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl">
                        <div className="w-full">
                            <img className="w-full rounded-t-xl" src={NewsItem1} alt=""/>
                        </div>
                        <div className="p-5">
                            <p className="text-justify">
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada Natijalariga
                                ko’ra 1-2 va 3 o’rinlani qo’lga kiritdilar.
                                Abiturientlarimiz orasidan Azamjon
                                Komilov, Murod Axmedov va Nozima
                                Sattorova 2021 - yilda bo’lib o’tgan
                                Matematika fanidan bo’lib o’tgan 10-11
                                sinflar orasidagi Olimpiada ...
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
