import React from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from './../../firebase.init';
import Loading from './../../Shared/Loading/Loading';


const RequiredAuth = ({ children }) => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    };

    return children;


}
export default RequiredAuth;