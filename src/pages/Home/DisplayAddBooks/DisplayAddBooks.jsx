import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Buttonlg } from '../../../components/Button/Button';
import DisplayDonationBooks from './DisplayDonationBooks/DisplayDonationBooks';

const DisplayAddBooks = () => {
    const [change, setChange] = useState(false);
    console.log(change);
    return (
        <div className='flex max-w-5xl mx-auto gap-10 mb-20'>
            <div className='w-1/5 max-h-96 border-2 text-center shadow-lg rounded-md'>
                <h1 className='bg-gray-200 py-2 font-bold'>Select Your Category</h1>
                <div className='pt-5'>
                    <Link to='/donation' onClick={() => setChange(true)}><Buttonlg onClick={() => setChange(true)}>Donation Books</Buttonlg></Link>
                    <Link to='/seller'><Buttonlg>buy old Books</Buttonlg></Link>
                </div>
            </div>
            <div className='w-3/4 border-2 max-h-96 p-2 text-center shadow-lg rounded-md'>
                {
                    change ?
                        <Outlet></Outlet>
                        :
                        <DisplayDonationBooks></DisplayDonationBooks>
                }
            </div>
        </div>
    );
};

export default DisplayAddBooks;