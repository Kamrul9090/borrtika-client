import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import Books from './Books';
import CheckboxWithRoute from './CheckboxWithRoute';
const BookLayout = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    const { data: categoryData = [], isLoading } = useQuery({
        queryKey: ["categoryData"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/`);
            const data = await res.json();
            return data;
        }
    })


    const handleCheckBox = (data) => {
        fetch(`http://localhost:5000/category/${data.type}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data.data)
            });
    }
    if (isLoading) {
        <BarLoader></BarLoader>
    }
    return (
        <div className='flex max-w-5xl mx-auto gap-10 mb-20'>
            <div className='w-1/5 max-h-96 border-2 text-center shadow-lg rounded-md'>
                <h1 className='bg-gray-200 py-2 font-bold'>Select Your Category</h1>
                <CheckboxWithRoute key={categoryData._id} categoryData={categoryData} handleCheckBox={handleCheckBox}></CheckboxWithRoute>
            </div>
            <div className='w-3/4 border-2 max-h-96 p-2 text-center shadow-lg rounded-md'>
                <Books categoriesData={categoriesData}></Books>
            </div>
        </div>
    );
};

export default BookLayout;