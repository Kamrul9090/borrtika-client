import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Modal from '../../../components/Modal/Modal';
import BookCarouse from './BookCarouse';
const Books = ({ categoriesData }) => {
    const { modalIsOpen, closeModal } = useContext(AuthContext)


    return (
        <div>
            <BookCarouse categoriesData={categoriesData}></BookCarouse>
            <Modal modalIsOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
};

export default Books;