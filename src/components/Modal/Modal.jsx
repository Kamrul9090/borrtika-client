import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from '../Button/Button';
import { BarLoader } from 'react-spinners';

const Modal = ({ book_name, resale_price, bookingData }) => {
    const { loader, user } = useContext(AuthContext);

    console.log(book_name);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            mobile,
            location
        }
        console.log(booking);
    }

    if (loader) {
        return <BarLoader></BarLoader>
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations. Fill this input field</h3>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
                            <div className='flex flex-col'>
                                <label>Name</label>
                                <input
                                    name="name"
                                    defaultValue={user?.displayName} disabled
                                    type="text" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input
                                    name="email"
                                    defaultValue={user?.email} disabled
                                    type="email" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Mobile</label>
                                <input
                                    name="mobile"
                                    type="text" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Location</label>
                                <input
                                    name="location"
                                    type="text" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <Button>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Modal;