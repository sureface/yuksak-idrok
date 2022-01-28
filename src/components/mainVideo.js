import React from 'react';

const MainVideo = () => {
    return (
        <div className="mainVideo lg:py-20 py-6">
            <div className="container mx-auto">
                <iframe width="100%"  className='md:h-96 h-72' src="https://www.youtube.com/embed/rEEHdaRo5mE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                </iframe>
            </div>
        </div>
    );
};

export default MainVideo;