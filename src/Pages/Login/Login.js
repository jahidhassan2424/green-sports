import React, { useRef, useState } from 'react';
import './Login.css'
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from './../../firebase.init';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
// import { ToastContasiner, toast } from 'react-toastify';

// import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Login = () => {
    // State Declearation
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');

    // Hook Declearation
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passRef = useRef('');
    const [sendPasswordResetEmail, sendingReset, errorReset] = useSendPasswordResetEmail(auth);


    // Login Button Handle
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
            })

    }


    if (user) {
        navigate("/");
    }
    if (error) {
        console.log(error);
    }
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login-body'>

            {/* Toast */}
            <ToastContainer />

            {/* Login Form */}
            <Form onSubmit={handleLogin} className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Login</h1>
                    <Form.Label className='fs-4'>Email address</Form.Label>
                    <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control ref={passRef} name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger fw-bold'>{error?.message}</p>
                <p className='fs-5'>New to Dental Care? <Link className='text-decoration-none text-danger fw-bold' to={'/register'}>Register</Link></p>

                <div className='text-center mt-5 mb-3'>
                    <Button className='submit-button' variant="primary" type="submit">
                        LOGIN
                    </Button>
                    <p className='text-danger forget-pass' onClick={async () => {
                        {
                            if (emailRef.current.value) {
                                await sendPasswordResetEmail(emailRef.current.value);
                                // toast("Password Reset Email Sent");
                            }
                            else {
                                // toast("Enter email address");
                            }
                        }

                    }}>Forget Password?</p >

                </div>
            </Form >

            {/* Google Sign In */}
            <div className='text-center'><SocialLogin></SocialLogin></div>
        </div >
    );
};

export default Login;