import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import { AuthContext } from '../../context/AuthProvider';
import DisplayCategoryBooksCard from './DisplayCategoryBooksCard';

const DisplayCategoryBooks = () => {
    const { loader } = useContext(AuthContext)
    const category = useLoaderData();

    if (loader) {
        return <BarLoader></BarLoader>
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto my-40'>
            {
                category?.data.map(categoryBook => <DisplayCategoryBooksCard key={categoryBook._id} categoryBook={categoryBook}></DisplayCategoryBooksCard>)
            }
        </div>
    );
};

export default DisplayCategoryBooks;