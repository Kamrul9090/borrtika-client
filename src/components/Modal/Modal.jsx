import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from '../Button/Button';
const Modal = ({ modalIsOpen, onClose }) => {

    return (
        <div>

            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations. Fill this input field</h3>
                    <div className="modal-body">
                        <form className='flex flex-col space-y-2'>
                            <div className='flex flex-col'>
                                <label>Name</label>
                                <input type="name" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Email</label>
                                <input type="email" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Mobile</label>
                                <input type="email" className='outline w-3/4 mx-auto p-2 rounded-lg' />
                            </div>
                            <div className='flex flex-col'>
                                <label>Location</label>
                                <input type="email" className='outline w-3/4 mx-auto p-2 rounded-lg' />
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