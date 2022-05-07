import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const registeredToast = () => toast("Succesfully Registered");
    return (
        <div>
            {registeredToast}
        </div>
    );
};

export default Toast;