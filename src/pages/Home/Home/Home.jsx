import React, { useContext, useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import { AuthContext } from '../../../context/AuthProvider';
import BookLayout from '../AllBoooks/BookLayout';
import Category from '../BooksCategory/Category';
import DisplayAddBooks from '../DisplayAddBooks/DisplayAddBooks';
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
            <DisplayAddBooks></DisplayAddBooks>
            <OurServices></OurServices>
            <OurAmbassador></OurAmbassador>
        </div>
    );
};

export default Home;