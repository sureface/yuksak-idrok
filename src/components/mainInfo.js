import React from 'react';

const MainInfo = () => {
    return (
        <div className="py-12">
            <h1 className="text-black text-2xl uppercase font-bold text-center my-10">BIZ HAQIMIZDA</h1>
            <div className="bg-blue-500 p-5">
                <div className="container mx-auto">
                    <h1 className="text-white text-2xl font-semibold uppercase text-center mb-3 pb-3">ONLINE MUROJAAT</h1>
                    <form className="flex flex-col">
                        <div className="flex items-center justify-between w-full">
                            <input className="mb-4 py-3 px-5 mr-3 rounded-xl w-full" type="text" placeholder="Your Name" name="name" id="name" />
                            <input className="mb-4 py-3 px-5 mr-3 rounded-xl w-full" type="email" placeholder="E-mail" name="email" id="email" />
                        </div>
                        <input className="mb-4 py-3 px-5 rounded-xl w-full" type="number" placeholder="+998 (00) 000-00-00" name="number" id="number" required/>
                        <textarea className="mb-4 py-3 px-5 rounded-xl" name="textarea" placeholder="Savolingiz..?" id="textarea" cols="30" rows="10"> </textarea>
                        <div className="flex items-center justify-end w-full">
                            <button type="submit" className="text-lg bg-white font-semibold rounded-xl px-5 py-2">Yuborish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;