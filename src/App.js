import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import News from "./pages/News";
import Contact from "./pages/Contact";
import RegisterCourse from './pages/RegisterCourse';
import FullNews from './components/news/FullNews';
import {BsFillChatLeftDotsFill} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import MainInfo from "./components/mainInfo";

const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [offsetY, setOffsetY] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200){
            setOffsetY(true);
        } else {
            setOffsetY(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact  component={Home} />
                    <Route path="/about" exact  component={About} />
                    <Route path="/teachers" exact  component={Teachers} />
                    <Route path="/courses" exact  component={Courses} />
                    <Route path="/news" exact component={News} />
                    <Route path='/full-news/:id' exact component={FullNews} />
                    <Route path="/contact" exact  component={Contact} />
                    <Route path="/courses/more/:idCourse" exact  component={RegisterCourse} />
                </Switch>
            </BrowserRouter>

            <div className={offsetY ? "fixed bottom-12 right-12 cursor-pointer z-50" : "hidden"} onClick={() => setIsOpen(!isOpen)}>
                <div className="relative">
                    <BsFillChatLeftDotsFill className="w-full h-full text-2xl text-white filter drop-shadow-xl"/>
                    <span
                        className="animate-ping absolute -top-1 -left-1 h-8 w-8 rounded-full bg-blue-300 opacity-75"> </span>
                </div>
            </div>
            <div
                className={isOpen ? "fixed top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center bg-gray-700 bg-opacity-75 transition ease-in duration-200" : "hidden"}
            >
                <div className="relative">
                    <AiOutlineClose onClick={() => setIsOpen(!isOpen)}
                                    className='absolute right-2 top-12 text-white text-2xl cursor-pointer transition duration-500 ease-in-out transform  hover:rotate-180'/>
                    <MainInfo/>
                </div>
            </div>
        </div>
    );
};

export default App;