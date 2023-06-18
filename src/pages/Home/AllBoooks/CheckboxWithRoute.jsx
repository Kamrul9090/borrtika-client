import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckboxWithRoute = ({ categoryData, handleCheckBox }) => {

    return (
        <div className='space-y-2 py-5'>
            {
                categoryData.map(category => <div className='space-x-1 flex justify-center items-start pl-2 dark:text-gray-100'>
                    <Link to={`/category/${category.type}`}>
                        <button className='bg-green-900 px-4 py-2 text-white w-32 hover:bg-green-500' onClick={() => handleCheckBox(category)} >{category.type}</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default CheckboxWithRoute;