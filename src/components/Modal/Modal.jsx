import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from '../Button/Button';
const Modal = ({ modalIsOpen, onClose }) => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <div className={`${modalIsOpen ? 'block' : 'hidden'} relative`}>
                {/* <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75">

                </div> */}
                <div className="modal-container bg-gray-200 absolute lg:left-20 bottom-10 shadow-2xl w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="modal-header">
                            <h3 className="modal-title text-lg font-medium leading-6 text-gray-900">Modal Title</h3>
                        </div>
                        <div className="modal-body">
                            <form className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <label>Name</label>
                                    <input type="name" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Mobile</label>
                                    <input type="email" />
                                </div>
                                <div className='flex flex-col'>
                                    <label>Location</label>
                                    <input type="email" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer flex justify-around my-4">
                            <Button>Submit</Button>
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;