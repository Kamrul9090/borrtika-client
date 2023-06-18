import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import Books from './Books';
import CheckboxWithRoute from './CheckboxWithRoute';
import { Link, Outlet } from 'react-router-dom';
import BookCarouse from './BookCarouse';
import Modal from '../../../components/Modal/Modal';
const BookLayout = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [change, setChange] = useState(false);
    const { data: categoryData = [], isLoading } = useQuery({
        queryKey: ["categoryData"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/`);
            const data = await res.json();
            return data;
        }
    })
    const { data: books = [] } = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/books`);
            const data = await res.json();
            return data;
        }
    })

    const handleCheckBox = (data) => {
        fetch(`https://brrtika-server.vercel.app/category/${data.type}`, {
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
                {/* <CheckboxWithRoute key={categoryData._id} categoryData={categoryData} handleCheckBox={handleCheckBox}></CheckboxWithRoute> */}
                {
                    categoryData.map(category => <div className='space-x-1 flex justify-center items-start pl-2 dark:text-gray-100'>
                        <Link to={`/category/${category.type}`} onClick={() => setChange(true)}>
                            <button className='bg-green-900 px-4 py-2 text-white w-32 hover:bg-green-500' onClick={() => handleCheckBox(category)} >{category.type}</button>
                        </Link>
                    </div>)
                }
            </div>
            <div className='w-3/4 border-2 max-h-96 p-2 text-center shadow-lg rounded-md'>
                {
                    change ?
                        <BookCarouse categoriesData={categoriesData}></BookCarouse>
                        :
                        <BookCarouse books={books}></BookCarouse>

                }
                <Modal />
            </div>
        </div>
    );
};

export default BookLayout;