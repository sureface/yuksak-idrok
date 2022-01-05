import React from 'react';
import NewsMain from "../components/news/NewsMain";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import NewsItem from "../components/news/NewsItem";

const News = () => {
    return (
        <div>
            <Navigation />
            <div className="container mx-auto">
                <NewsMain />
                <div className="w-full h-1 bg-blue-500 mb-14 mt-20"> </div>
                <NewsItem />
            </div>
            <Footer />
        </div>
    );
};

export default News;