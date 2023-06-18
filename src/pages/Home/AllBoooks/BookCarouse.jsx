import React, { useContext } from 'react';
import Carousel from 'react-grid-carousel'
import { AuthContext } from '../../../context/AuthProvider';
import { BarLoader } from 'react-spinners';

const BookCarouse = ({ categoriesData, books }) => {
    const { loader } = useContext(AuthContext)
    if (loader) {
        <BarLoader></BarLoader>
    }
    return (
        <div>
            {
                categoriesData ?
                    <Carousel cols={3} showDots loop>
                        {categoriesData.map((val, i) => (
                            <Carousel.Item key={i}>
                                <div className='w-full max-h-full'>
                                    <div className='max-h-40'>
                                        <img src={val.img} className="w-full max-h-40" alt='' />
                                    </div>
                                    <div className='flex flex-col text-sm dark:text-gray-100 w-full p-2 max-h-72 font-semibold'>
                                        <p>{val.book_name}</p>
                                        <span>{val.writer_name}</span>
                                        <span>Price ${val.price}</span>
                                        <span>Reading price {val.reading_price} FREE</span>
                                        <span>Time {val.reading_time} Days</span>
                                        <span>Available {val.book} piece</span>
                                        <label htmlFor="my-modal-3" className="className=' bg-green-900 text-white hover:bg-green-400 p-2 rounded-xl onClick={OpenModal}">Take for Read</label>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    :
                    <Carousel cols={3} showDots loop>
                        {books.map((val, i) => (
                            <Carousel.Item key={i}>
                                <div className='w-full max-h-full'>
                                    <div className='max-h-40'>
                                        <img src={val.img} className="w-full max-h-40" alt='' />
                                    </div>
                                    <div className='flex flex-col text-sm dark:text-gray-100 w-full p-2 max-h-72 font-semibold'>
                                        <p>{val.book_name}</p>
                                        <span>{val.writer_name}</span>
                                        <span>Price ${val.price}</span>
                                        <span>Reading price {val.reading_price} FREE</span>
                                        <span>Time {val.reading_time} Days</span>
                                        <span>Available {val.book} piece</span>
                                        <label htmlFor="my-modal-3" className="className=' bg-green-900 text-white hover:bg-green-400 p-2 rounded-xl onClick={OpenModal}">Take for Read</label>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
            }

        </div>
    );
};

export default BookCarouse;