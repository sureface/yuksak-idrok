import React from 'react';
import LoginImage from "../assets/images/login.png";

const Login = () => {
    return (
        <div className="my-20">
            <div className="flex items-center w-full">
                <div className="w-1/2">
                    <img className="w-full" src={LoginImage} alt="oops sorry something wrong"/>
                </div>
                <div className="w-1/2 py-10 px-12">
                    <div className="text-2xl text-black font-bold text-center flex flex-col mb-10">
                        Xush keldingiz!
                        <span className="text-lg font-normal">
                            Davom etirish uchun login va parolni kiriting.
                        </span>
                    </div>
                    <form>
                        <input type="text" className="w-full py-4 px-5 border-2 border-blue-500 text-2xl rounded-2xl mb-5" name="login" placeholder="Login" required/>
                        <input type="password" className="w-full py-4 px-5 border-2 border-blue-500 text-2xl rounded-2xl mb-5" name="password" placeholder="Parol" required/>
                        <div className="w-full flex items-center justify-end">
                            <button type="submit" className="text-white text-xl uppercase bg-blue-500 py-3 px-10 rounded-2xl">krish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;