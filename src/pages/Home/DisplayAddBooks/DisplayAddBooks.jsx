import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Buttonlg } from '../../../components/Button/Button';

const DisplayAddBooks = () => {
    return (
        <div className='flex max-w-5xl mx-auto gap-10 mb-20'>
            <div className='w-1/5 max-h-96 border-2 text-center shadow-lg rounded-md'>
                <h1 className='bg-gray-200 py-2 font-bold'>Select Your Category</h1>
                <div className='pt-5'>
                    <Link to='/donation'><Buttonlg>Donation Books</Buttonlg></Link>
                    <Link to='/seller'><Buttonlg>buy old Books</Buttonlg></Link>
                </div>
            </div>
            <div className='w-3/4 border-2 max-h-96 p-2 text-center shadow-lg rounded-md'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DisplayAddBooks;