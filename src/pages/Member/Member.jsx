import React from 'react';
import logo from '../../assets/logo/borrtika_logo.png'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
const Member = () => {
    const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm();
    const imageHostKey = process.env.REACT_APP_imageBBKey;
    const [formImage, setFormImage] = useState('');
    const handleImage = event => {
        const formData = new FormData();
        const pic = event.target.files[0];
        formData.append("image", pic)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImageData => {
                if (ImageData.success) {
                    setFormImage(ImageData.data.url)
                }
            })
    }

    const handleMemberForm = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='my-36 w-4/5 mx-auto p-10'>
            <h1 className='text-3xl text-center'>"তোমার সমাজ আধাঁর হলে, তুমি হও বর্তিকা"</h1>
            <div className='text-center my-5 space-y-3'>
                <img src={logo} alt="" srcset="" className='bg-green-800 w-40 mx-auto' />
            </div>
            <div className='mt-5 space-y-2'>
                <div className='text-center'>
                    <h1 className='underline text-xl'>বর্তিকা পাঠক ফর্ম</h1>
                    <div className='border-2 border-emerald-300 w-40 h-40 mx-auto'>
                        <img src={formImage} alt="" srcset="" className='w-full h-full mb-5' />
                        <div>
                            <label htmlFor="file" className='bg-green-800 text-white p-2 rounded-md'>
                                upload Img
                                <input onChange={handleImage} type="file" name='file' id='file' className='w-full hidden' />
                            </label>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleMemberForm)} className='pt-20 grid grid-cols-1 w-1/2 mx-auto gap-5'>
                    <div className='space-y-2'>
                        <label htmlFor="">Name(Bangla)</label>
                        <input name="banglaName"
                            type="text"
                            {...register("banglaName", { required: "Name name is required" })}
                            aria-invalid={errors.banglaName ? "true" : "false"} id="banglaName"
                            placeholder="bangla name..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Name(English)</label>
                        <input name="englishName"
                            type="text"
                            {...register("englishName", { required: "English name is required" })}
                            aria-invalid={errors.banglaName ? "true" : "false"} id="englishName"
                            placeholder="english name..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Father</label>
                        <input name="father" type="text"
                            {...register("father", { required: "father name is required" })}
                            aria-invalid={errors.father ? "true" : "false"} id="father"
                            placeholder="father name..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Mother</label>
                        <input name="mother" type="text"
                            {...register("mother", { required: "mother name is required" })}
                            aria-invalid={errors.mother ? "true" : "false"} id="mother"
                            placeholder="mother name..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Current Address</label>
                        <input name="address" type="text"
                            {...register("address", { required: "address is required" })}
                            aria-invalid={errors.address ? "true" : "false"} id="address"
                            placeholder="your address..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Institution/occupation</label>
                        <input name="institution" type="text"
                            {...register("institution", { required: "institution is required" })}
                            aria-invalid={errors.institution ? "true" : "false"} id="institution"
                            placeholder="your institution..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Date of birth</label>
                        <input name="birthday" type="date"
                            {...register("birthday", { required: "birthday is required" })}
                            aria-invalid={errors.birthday ? "true" : "false"} id="birthday"
                            placeholder="your birthday..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Favorite writer</label>
                        <input name="writer" type="text"
                            {...register("writer", { required: "writer name is required" })}
                            aria-invalid={errors.writer ? "true" : "false"} id="writer"
                            placeholder="your writer..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">What kind of book you like?</label>
                        <input name="favoriteBook" type="text"
                            {...register("favoriteBook", { required: "favoriteBook name is required" })}
                            aria-invalid={errors.favoriteBook ? "true" : "false"} id="favoriteBook"
                            placeholder="your favoriteBook..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">Mobile</label>
                        <input name="mobile" type="text"
                            {...register("mobile", { required: "mobile number is required" })}
                            aria-invalid={errors.mobile ? "true" : "false"} id="mobile"
                            placeholder="your mobile number..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="">E-mail</label>
                        <input name="email" type="email"
                            {...register("email", { required: "email is required" })}
                            aria-invalid={errors.email ? "true" : "false"} id="email"
                            placeholder="your e-mail..."
                            className='bg-blue-100 w-full p-2' required />
                    </div>
                    <button type='submit' className='bg-green-900 hover:bg-green-600 text-white w-full py-2 my-2 rounded-lg'>Submit Form</button>
                </form>
            </div>
        </div>
    );
};

export default Member;