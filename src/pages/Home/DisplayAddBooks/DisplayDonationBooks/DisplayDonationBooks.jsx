import React from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import Carousel from 'react-grid-carousel'

const DisplayDonationBooks = () => {
    const { data: donationBooks = [], isLoading } = useQuery({
        queryKey: ["donationBooks"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/add_books`);
            const data = res.json();
            return data;
        }
    })


    if (isLoading) {
        return <BarLoader></BarLoader>
    }
    return (
        <div>
            <Carousel cols={2} showDots loop>
                {donationBooks.map((val, i) => (
                    <Carousel.Item key={i}>
                        <div className=' w-full max-h-full'>
                            <div className=''>
                                <img src={val.img} className="w-full max-h-48" alt='' />
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
                                <label htmlFor="my-modal-3" className="className=' bg-green-900 text-white hover:bg-green-400 p-2 rounded-xl onClick={OpenModal}">Take for Read</label>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default DisplayDonationBooks;