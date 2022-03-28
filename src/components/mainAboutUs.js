import React from 'react';
import "../styles/mainAboutUs.scss"
import {Link} from "react-router-dom";

const MainAboutUs = () => {
    return (
        <div className="mainAbout sm:my-12 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-between">
                        <div className="mb-12">
                            <div className="flex flex-col items-center lg:items-start mb-5 lg:mb-0">
                                <h2 className="text-3xl font-bold capitalize text-blue-500 mb-4">biz <span
                                    className="font-semibold text-gray-300">haqimizda</span></h2>
                                <div className="h-1 w-1/3 bg-blue-500 block lg:hidden"></div>
                            </div>

                            <div className="flex mb-10">
                                <div className="h-auto w-3 bg-blue-500 hidden lg:block"></div>
                                <div className="p-0 lg:p-3 text-lg">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    industry's standard dummy text ever since the,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially.
                                </div>
                            </div>
                            <div className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores deserunt eaque esse
                                fuga iure molestiae nam rem sapiente sint? Ab alias aliquam atque consequatur consequuntur,
                                corporis, dicta dolor dolorem error est eveniet facilis hic incidunt nam natus nihil officia
                                placeat qui ratione rerum sit sunt ullam, unde? Magni, voluptas.
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <Link to="/about" type='button' className="link bg-white text-blue-500 text-xl font-semibold rounded-lg shadow-lg uppercase py-3 px-5">batafsil</Link>
                        </div>
                    </div>
                    <div className="mainAbout_image"> </div>
                </div>
            </div>
        </div>
    );
};

export default MainAboutUs;