import React from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';

const OurServices = () => {
    const { data: ourServices = [], isLoading } = useQuery({
        queryKey: ["ourServices"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/our_services`);
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        <BarLoader></BarLoader>
    }
    console.log(ourServices);
    return (
        <>
            <div className='w-1/2 mx-auto text-center'>
                <h1 className='font-bold text-4xl text-green-900'>Our Services</h1>
                <p className='font-semibold dark:text-gray-100'>Brrtika Giving many services. You can take books for free reading, Donation for pure people. take Donation for reading books.and you can also sell your old books.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto gap-5 my-32'>
                {
                    ourServices.map(service => <div className="flex flex-col justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                        <img src={service.img} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y divide-gray-700">
                            <div className="my-2 space-y-1">
                                <h2 className="text-lg font-semibold sm:text-xl">{service.title}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400"></p>
                            </div>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <p>
                                    {service.des}
                                </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default OurServices;