import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckboxWithRoute = ({ categoryData, handleCheckBox }) => {

    return (
        <div className='space-y-2 py-5'>
            {
                categoryData.map(category => <div className='space-x-1 flex justify-items-start pl-2 dark:text-gray-100'>
                    <Link to={`/category/${category.type}`}>
                        <button onClick={() => handleCheckBox(category)} >{category.type}</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default CheckboxWithRoute;