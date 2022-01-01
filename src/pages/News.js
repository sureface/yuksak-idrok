import React from 'react';
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import NewsMain from '../components/news/NewsMain';
import NewsItem from '../components/news/NewsItem';
import "../styles/newsStyles.scss"

const News = () => {
    return (
        <div>
            <Navigation />
            <div className='p-12 flex flex-col gap-8'>
                <NewsMain />
                <div className='w-full h-1 news__line'></div>
                <NewsItem/>
            </div>
            <Footer/>
        </div>
    );
};

export default News;