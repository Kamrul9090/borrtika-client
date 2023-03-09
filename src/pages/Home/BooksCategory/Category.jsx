import React, { useEffect, useState } from 'react';

import CategoryCard from './CategoryCard';
const Category = () => {
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch(`https://brrtika-server.vercel.app/`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const setId = (categoryBook) => {
        fetch(`https://brrtika-server.vercel.app/category/${categoryBook?._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryBook)
        })
            .then(res => res.json())
            .then(data => {
                setCategoryData(data)
            })
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='w-80 mx-auto my-20'>
                <p className='text-3xl font-bold font-sans text-green-900 dark:text-white'>Our books Category</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mb-20'>
                {
                    categories.map(categoryBook => <CategoryCard key={categoryBook._id} categoryBook={categoryBook} setId={setId}></CategoryCard>)
                }
            </div>
        </div >
    );
};

export default Category;