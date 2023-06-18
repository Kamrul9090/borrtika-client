import React from 'react';
import blogImage from '../../../assets/home-showcase/books.jpg';
import blogImage2 from '../../../assets/home-showcase/books-banner.jpg';
import redCircle from '../../../assets/home-showcase/red-circle-removebg-preview.png';
import yellowCircle from '../../../assets/home-showcase/yellow-circle-removebg-preview.png';
import { Button } from '../../../components/Button/Button';
const FreeBookBlog = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-64'>
                <div className='relative'>
                    <img src={blogImage} alt="" srcset="" className='w-2/3 h-2/3 rounded-2xl' />
                    <img src={blogImage2} alt="" srcset="" className='w-1/2 h-2/3 absolute right-0 top-44 rounded-2xl shadow-black shadow-xl' />
                </div>
                <div className='p-5 space-y-5 dark:text-white'>
                    <span className='font-semibold text-gray-600'>TAKE FREE BOOKS</span>
                    <h1 className='text-6xl font-semibold'>Read Books</h1>
                    <div className='text-justify space-y-4'>
                        <p className='text-justify'>
                            Free books are a treasure trove for avid readers and knowledge seekers, offering a gateway to explore countless stories, ideas, and information without straining their wallets. The availability of free books has been significantly enhanced in the digital age, where online platforms and libraries offer a vast collection of literary works at no cost. These books come in various forms, from classic literature and contemporary novels to academic textbooks and self-help guides, catering to diverse interests and preferences.
                        </p>
                        <p>
                            The benefits of free book reading extend beyond the financial aspect. They provide an opportunity for individuals from all walks of life to access education and broaden their horizons. Free books foster a love for reading, nurturing intellectual curiosity and critical thinking skills. They allow readers to discover new authors, genres, and perspectives, fostering cultural awareness and empathy.
                        </p>
                    </div>
                    <Button>Read Now</Button>
                </div>
            </div>

            {/* blog -2 */}

            <div className='grid grid-cols-1 lg:grid-cols-2 mb-64'>
                <div className='p-5 space-y-5 dark:text-white'>
                    <span className='font-semibold text-gray-600'>WELCOME TO DONATION</span>
                    <h1 className='text-6xl font-semibold'>Donate Us</h1>
                    <div className='text-justify space-y-4'>
                        <p className='text-justify'>
                            Books donation is a remarkable act of spreading knowledge and fostering literacy. When individuals or organizations donate books, they open doors to new worlds for those who may not have access to reading materials. By sharing the joy of reading, donors empower others to learn, imagine, and explore. Donated books can find their way to schools, libraries, shelters, and communities in need, enriching lives and inspiring minds. Each donated book has the potential to ignite curiosity, encourage critical thinking, and transform lives. Through this noble act, donors contribute to the betterment of society by promoting education and the love of learning for all.
                        </p>
                    </div>

                    <Button>Read Now</Button>
                </div>
                <div className='relative'>
                    <img src={blogImage2} alt="" srcset="" className='w-2/3 h-5/6 mx-auto relative z-40 rounded-md' />
                    <img src={redCircle} alt="" srcset="" className='w-1/3 absolute bottom-3' />
                    <img src={yellowCircle} alt="" srcset="" className='w-1/2 absolute top-[-70px] right-[-30px]' />
                    <img src="" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default FreeBookBlog;