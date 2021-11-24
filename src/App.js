import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;