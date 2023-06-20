import React from 'react';
import './contact.css';
import book from '../../../../assets/logo/book.png';

const ContactUs = () => {
    return (
        <>
            <div className="bg_contact">
                <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
                    <div className='h-96'>
                        <img src={book} alt="" className='h-full' />
                    </div>
                    <div className='p-5'>
                        <h3 className='text-3xl font-bold text-white'>Contact Us</h3>
                        <form className='space-y-5'>
                            <input type="name" placeholder='name...' className='bg-transparent outline-none border-b-2 pl-2 py-2 w-full text-white font-bold' />
                            <input type="email" placeholder='email' className='bg-transparent w-full py-2 outline-none border-b-2 p-2' />
                        </form>
                        <textarea name="message" id="" cols="60" rows="5" placeholder='message...' className='bg-transparent text-white mt-5 outline-none border-2 rounded-lg p-2'></textarea>
                        <input type="submit" className='text-black font-bold py-2 px-5 bg-slate-200 rounded-md' />
                    </div>
                </div>
            </div>
        </>

    );
};

export default ContactUs;