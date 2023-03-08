import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import love1 from '../../assets/svg/love-svgrepo-com.svg'
import love2 from '../../assets/svg/love-svgrepo-com (1).svg'
import { toast } from 'react-hot-toast';
const DisplayCategoryBooksCard = ({ categoryBook }) => {
    const [fillLevel, setFillLevel] = useState(false);

    const { book_name, writer_name, img, price, reading_price, reading_time, upload_time, book } = categoryBook;

    const seIcon = () => {
        if (fillLevel === false) {
            setFillLevel(true)
            const existingCard = JSON.parse(localStorage.getItem("cards")) || [];
            const card = {
                name: book_name,
                writer: writer_name,
                img: img,
                price: price,
                reading_price: reading_price,
                reading_time: reading_time,
            }
            const updatingCard = [...existingCard, card];
            localStorage.setItem("cards", JSON.stringify(updatingCard))
            toast.success("Added this book in your wishList")
        } else {
            return;
        }

    }

    return (
        <div className="flex flex-col max-w-xl p-6 space-y-4 sm:p-10 bg-gray-200 dark:bg-gray-900 dark:text-gray-100 shadow-lg">
            <p>Added {upload_time}</p>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={img} alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold leading-snug sm:pr-8">{book_name}</h3>
                                    <p className="text-sm dark:text-gray-400">{writer_name}</p>
                                    <small className='font-semibold'>Book {book} pieces available</small>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">Price ${price}</p>
                                    <p className=" dark:text-gray-100">Read: <span className='text-xl text-green-600 font-bold'>Free</span></p>
                                    <p>Time {reading_time} days</p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x space-x-2">
                                <Button>Take for read</Button>
                                <button onClick={() => seIcon()} type="button" className="flex items-center px-2 py-1 space-x-1">
                                    {
                                        fillLevel ?
                                            <img src={love2} className="w-5" alt="" />

                                            :
                                            <img src={love1} className="w-5" alt="" />
                                    }
                                    <span className='underline hover:text-red-700'>WishList</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right">
                <p className="text-sm dark:text-gray-400">If you lost this book you need to pay for It.</p>
            </div>
        </div>
    );
};

export default DisplayCategoryBooksCard;