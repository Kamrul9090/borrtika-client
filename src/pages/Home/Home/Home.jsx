import React from 'react';
import BookLayout from '../AllBoooks/BookLayout';
import Category from '../BooksCategory/Category';
import CarouselBanner from '../Header/CarouselBanner';
import Header from '../Header/Header';
import OurAmbassador from '../OurAmbassador/OurAmbassador';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div className='dark:bg-black bg-gray-100'>
            <Header></Header>
            <CarouselBanner></CarouselBanner>
            <Category></Category>
            <BookLayout></BookLayout>
            <OurServices></OurServices>
            <OurAmbassador></OurAmbassador>
        </div>
    );
};

export default Home;