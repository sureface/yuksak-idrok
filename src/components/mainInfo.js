import React from 'react';

const MainInfo = () => {
    return (
        <div className="bg-blue-500 p-5 my-10">
            <div className="container mx-auto">
                <h1 className="text-white text-2xl font-semibold uppercase text-center mb-3 pb-3">ONLINE MUROJAAT</h1>
                <form className="flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input className="py-3 px-5 rounded-xl" type="text" placeholder="Your Name" name="name" id="name" required/>
                        <input className="py-3 px-5 rounded-xl" type="email" placeholder="E-mail" name="email" id="email" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <input className="py-3 px-5 rounded-xl" type="number" placeholder="+998 (00) 000-00-00" name="number" id="number" required/>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <textarea className="py-3 px-5 rounded-xl text-gray-400" placeholder="Savolingiz..?" name="textarea" cols="30" rows="10"> </textarea>
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <button type="submit" className="text-lg bg-white font-semibold rounded-xl px-5 py-2 text-blue-500">Yuborish</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainInfo;