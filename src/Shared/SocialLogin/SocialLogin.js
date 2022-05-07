import React from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useNavigate, useLocation } from 'react-router-dom';
import auth from './../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn-social-login rounded-full px-5 py-2 font-bold bg-white'>
                <div className='google-sign-in-button '>
                    <div><img className='pr-3' src="https://i.ibb.co/RbwkZNf/google.png" alt="" /></div>
                    <div> Continue with Google</div></div>
            </button>

        </div>
    );
};

export default SocialLogin;