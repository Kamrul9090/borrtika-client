import React, { useState } from 'react';
import Carousel from 'react-grid-carousel'
import { BarLoader } from 'react-spinners';
import { useQuery } from 'react-query';
import Modal from '../../../../components/Modal/Modal';

const DisplaySellerBooks = () => {
    const [bookingData, setBookingData] = useState([])
    const { book_name, resale_price } = bookingData;
    const { data: sellerBooks = [], refetch, isLoading } = useQuery({
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

    const handleBuyBooks = (id) => {
        fetch(`http://localhost:5000/seller_books/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
            })
    }
    return (
        <div>
            <Carousel cols={2} showDots loop>
                {sellerBooks.map((val, i) => (
                    <Carousel.Item key={i}>
                        <div className=' w-full max-h-full'>
                            <div className=''>
                                <img src={val.img} className="w-full max-h-48" alt='' />
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
                                <label onClick={() => handleBuyBooks(val._id)} htmlFor="my-modal-3" className="className=' bg-green-900 text-white hover:bg-green-400 p-2 rounded-xl">Buy It</label>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal bookingData={bookingData} book_name={book_name} resale_price={resale_price} ></Modal>
        </div>
    );
};

export default DisplaySellerBooks;