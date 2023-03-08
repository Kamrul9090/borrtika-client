import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Buttonlg } from '../../components/Button/Button';
import Navbar from '../../shared/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-5xl mx-auto py-40 flex'>
                <aside className='w-64 border-4 border-green-900 rounded-lg h-96'>
                    <div className='p-2'>
                        <Link to='/dashboard/add_services'><Buttonlg>Add Services</Buttonlg></Link>
                        <Link to='/dashboard/users'><Buttonlg>Users</Buttonlg></Link>
                        <Link to='/dashboard/buyer'><Buttonlg>Buyer</Buttonlg></Link>
                        <Link to='/dashboard/admin'><Buttonlg>Admin</Buttonlg></Link>
                    </div>
                </aside>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-5 p-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;