import React, { useContext } from 'react';
import Carousel from 'react-grid-carousel'
import { BarLoader } from 'react-spinners';
import { AuthContext } from '../../../context/AuthProvider';
import { Button } from '../../../components/Button/Button';
const Books = ({ categoriesData }) => {
    const { loader } = useContext(AuthContext)
    if (loader) {
        <BarLoader></BarLoader>
    }
    return (
        <div>
            <Carousel cols={3} showDots loop>
                {categoriesData.map((val, i) => (
                    <Carousel.Item key={i}>
                        <div className='w-full max-h-full'>
                            <div className='max-h-40'>
                                <img src={val.img} className="w-full max-h-40" />
                            </div>
                            <div className='flex flex-col text-sm dark:text-gray-100 w-full p-2 max-h-72 font-semibold'>
                                <p>{val.book_name}</p>
                                <span>{val.writer_name}</span>
                                <span>Price ${val.price}</span>
                                <span>Reading price {val.reading_price} FREE</span>
                                <span>Time {val.reading_time} Days</span>
                                <span>Available {val.book} piece</span>
                                <Button>Take for Read</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Books;