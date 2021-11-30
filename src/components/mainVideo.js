import React from 'react';

const MainVideo = () => {
    return (
        <div className="mainVideo py-20">
            <div className="container mx-auto">
                <iframe width="100%" height="720" src="https://www.youtube.com/embed/rEEHdaRo5mE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>
        </div>
    );
};

export default MainVideo;