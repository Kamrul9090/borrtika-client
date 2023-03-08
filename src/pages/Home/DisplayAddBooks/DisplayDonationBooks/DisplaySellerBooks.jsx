import React from 'react';
import Carousel from 'react-grid-carousel'
import { Button } from '../../../../components/Button/Button';

const DisplaySellerBooks = () => {
    const sellerBooks = []
    return (
        <div>
            <Carousel cols={2} showDots loop>
                {sellerBooks.map((val, i) => (
                    <Carousel.Item key={i}>
                        <div className=' w-full max-h-full'>
                            <div className=''>
                                <img src={val.img} className="w-full max-h-48" />
                            </div>
                            <div className='flex flex-col text-sm dark:text-gray-100 w-full pt-2 max-h-96 font-semibold'>
                                <div className='flex justify-around'>
                                    <p>{val.book_name}</p>
                                    <span>Price {val.reading_price} FREE</span>
                                </div>
                                <div className='flex justify-around py-2'>
                                    <span> {val.seller_name}</span>
                                    <span>Available {val.book} books</span>
                                </div>
                                <Button>Take for Read</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default DisplaySellerBooks;