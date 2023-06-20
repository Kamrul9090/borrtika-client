import React from 'react';

const FaQ = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <div className='w-1/2 mx-auto text-center'>
                        <h2 className="text-2xl font-semibold sm:text-4xl"> Asked Questions</h2>
                        <p className="mt-4 mb-8 dark:text-gray-400">There have most common questions and answer from user that help you know about our services.</p>
                    </div>
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <details className="w-4/5 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is vorrtika ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Vorrtika is a non-profitable organization. The main theme of vorrtika is helping people to reading books and donate old books college student.</p>
                        </details>
                        <details className="w-4/5 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How many people running this organization.</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We have 15+ volontaire.There are working as a regional ambassador in different places.</p>
                        </details>
                        <details className="w-4/5 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How to get a college books from vorrtika?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">First, you need to register. and inform us about your needs.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaQ;