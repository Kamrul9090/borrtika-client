import React from 'react';
import banner1 from '../../../assets/banner/banner (1).jpg'
import banner2 from '../../../assets/banner/banner (2).jpg'
import banner3 from '../../../assets/banner/banner (3).jpg'
import banner5 from '../../../assets/banner/banner (5).jpg'
import banner6 from '../../../assets/banner/banner (6).jpg'
import banner7 from '../../../assets/banner/banner (7).jpg'
import banner8 from '../../../assets/banner/banner (8).jpg'
import banner9 from '../../../assets/banner/banner (9).jpg'
import logo from '../../../assets/logo/icons8-brainstorm-skill-96.png'
import Carousel from 'react-grid-carousel';
const CarouselBanner = () => {
    return (
        <div className='max-w-screen mx-auto shadow-lg p-5 h-screen'>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <div className='p-8 lg:p-24'>
                        <div>
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div>
                            <p className='text-xl lg:text-2xl text-yellow-500 dark:text-gray-100'>তোমার সমাজ আধাঁর হলে</p>
                            <h1 className='text-xl font-bold text-green-700'>তুমি হও বর্তিকা</h1>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner2} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner3} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner9} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner5} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner6} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner7} />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={banner8} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselBanner;