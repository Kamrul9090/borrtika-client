import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Buttonlg } from '../../../components/Button/Button';

const AddServices = () => {
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm();

    const imageHostKey = process.env.REACT_APP_imageBBKey;
    const onSubmit = (data) => {
        const date = new Date();
        const formatDate = format(date, "PP");

        const picture = data.img[0];
        const formData = new FormData();
        formData.append("image", picture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const addBook = {
                        type: data.select,
                        img: imgData.data.display_url,
                        book_name: data.book_name,
                        writer: data.writer,
                        price: data.original_price,
                        resale_price: data.resale_price,
                        seller_name: data.seller_name,
                        use: data.year_of_use,
                        book: data.pieces,
                        formatDate,
                    }

                    fetch(`https://brrtika-server.vercel.app/add_books`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(addBook)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Your post Added")
                            }
                        });

                }
            })

    }
    return (
        <>
            <h1 className='text-3xl'>Add Your Products</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 lg:grid-cols-3 gap-5 lg:p-10'>
                <div className='flex flex-col'>
                    <label htmlFor="select">Services Type</label>
                    <select {...register("select")} className='outline rounded-lg'>
                        <option value="donation">donation</option>
                        <option value="sell">sell</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Add a Picture</label>
                    <input {...register("img")} className="outline rounded-lg" type="file" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Book name</label>
                    <input {...register("book_name")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Writer</label>
                    <input {...register("writer")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Original Price</label>
                    <input {...register("original_price")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Resale Price</label>
                    <input {...register("resale_price")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Location</label>
                    <input {...register("location")} className="outline rounded-lg" type="text" />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="name">Years of use</label>
                    <input {...register("year_of_use")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">seller name</label>
                    <input {...register("seller_name")} className="outline rounded-lg" type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Pieces</label>
                    <input {...register("pieces")} className="outline rounded-lg" type="text" />
                </div>
                <Buttonlg>Add Services</Buttonlg>
            </form>
        </>
    );
};

export default AddServices;