import React from 'react';
import '../styles/mainHeader.scss'
import Navigation from "./navigation";

const MainHeader = () => {
    return (
        <div className="mainHeader">
            <Navigation />
            <div className="bgHeader">
                <h1>something</h1>
            </div>

        </div>
    );
};

export default MainHeader;