import React from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import { ImLocation2 } from "react-icons/im";
import ambassador from '../../../assets/logo/announcement.png'
const OurAmbassador = () => {
    const { data: ourAmbassador = [], isLoading } = useQuery({
        queryKey: ["ourAmbassador"],
        queryFn: async () => {
            const res = await fetch(`https://brrtika-server.vercel.app/our_ambassador`);
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <BarLoader></BarLoader>
    }
    return (
        <>

            <div className='w-full lg:w-1/2 mx-auto'>
                <div className='flex items-center dark:text-gray-100'>
                    <img src={ambassador} className="w-24 h-24" alt="" srcset="" />
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-2xl'>Our Regional Ambassador</h1>
                        <p className=''>Connect our regional ambassador.You can shared <br /> your opinion and also get you help about us.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto my-20'>

                {
                    ourAmbassador.map(ambassador => <div className="w-11/12 p-5 auto mx-auto sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100 items-center justify-center shadow-xl">
                        <div className="flex-shrink-0 w-full mb-6 h-[70%] sm:w-32 sm:mb-0">
                            <img src={ambassador.img} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-xl font-semibold">{ambassador.name}</h2>
                                <span className="text-sm dark:text-gray-400">{ambassador.position}</span>
                            </div>
                            <div className="">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-400">{ambassador.email}</span>
                                </span>
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                        <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-400">+{ambassador.contact}</span>
                                </span>

                                <span className="flex items-center space-x-2">
                                    <ImLocation2></ImLocation2>
                                    <span className="dark:text-gray-400">{ambassador.zone}</span>
                                </span>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </>
    );
};

export default OurAmbassador;