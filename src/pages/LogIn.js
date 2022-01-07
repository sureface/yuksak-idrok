import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Login from "../components/login";

const LogIn = () => {
    return (
        <div>
            <Navigation />
            <div className="container mx-auto">
                <Login />
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;