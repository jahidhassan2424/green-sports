import React, { useRef, useState } from 'react';
import './Login.css'
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    // State Declearation
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [errorAllTypes, setErrorAllTypes] = useState([]);

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

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login-body'>

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
                <p className='text-danger fw-bold'>{error?.message.slice(9)}</p>

                <p className='fs-5'>New to GREEN SPORTS? <Link className='text-decoration-none text-danger fw-bold' to={'/register'}>Register</Link></p>

                <div className='text-center mt-5 mb-3'>
                    <Button className='submit-button' variant="primary" type="submit">
                        LOGIN
                    </Button>
                    <p className='text-danger forget-pass' onClick={async () => {
                        {
                            if (emailRef.current.value) {
                                await sendPasswordResetEmail(emailRef.current.value);
                                <Loading></Loading>
                                toast("Password Reset Email Sent", { autoClose: 1200 });
                            }
                            else {
                                toast.error("Enter email address", { autoClose: false });
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