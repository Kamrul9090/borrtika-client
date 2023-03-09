import React from 'react';
import Carousel from 'react-grid-carousel'
import { Button } from '../../../../components/Button/Button';
import { BarLoader } from 'react-spinners';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const DisplaySellerBooks = () => {
    const { data: sellerBooks = [], isLoading } = useQuery({
        queryKey: ["sellerBooks"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/seller_books`);
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <BarLoader></BarLoader>
    }
    console.log(sellerBooks);

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
                                    <span>Available {val.book} books</span>
                                </div>
                                <div className='flex justify-around py-2'>
                                    <span>Price {val.price}</span>
                                    <span>sell {val.resale_price}</span>
                                </div>
                                <div className='flex justify-around py-2'>
                                    <span>seller {val.seller_name}</span>
                                    <span>use {val.use} years</span>
                                </div>
                                <Link to='/payment'><Button>Buy Now</Button></Link>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default DisplaySellerBooks;