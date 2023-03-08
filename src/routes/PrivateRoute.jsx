import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { BarLoader } from 'react-spinners';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loader, user } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <BarLoader></BarLoader>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;