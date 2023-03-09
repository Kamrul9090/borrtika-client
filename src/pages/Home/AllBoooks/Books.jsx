import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Modal from '../../../components/Modal/Modal';
import BookCarouse from './BookCarouse';
const Books = ({ categoriesData }) => {
    return (
        <div>
            <BookCarouse categoriesData={categoriesData}></BookCarouse>
            <Modal />
        </div>
    );
};

export default Books;