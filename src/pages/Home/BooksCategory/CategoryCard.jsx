import React from 'react';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
const CategoryCard = ({ categoryBook, setId }) => {
    const { category_book, img, category, type, _id } = categoryBook;

    return (
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Link to={`/category/${_id}`}>
                <div onClick={() => setId(categoryBook)} className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 hover:animate__headShake hover:animate-pulse hover:brightness-50">
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-center font-semibold tracking-wide hover:text-green-900 hover:underline">{category_book}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </AnimationOnScroll>
    );
};

export default CategoryCard;