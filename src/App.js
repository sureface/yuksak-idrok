import React from 'react';
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

const App = () => {
    return (
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
    );
};

export default App;