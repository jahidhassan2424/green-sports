import React, { useRef, useState } from 'react';
import { Form, Button, ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
// import Toast from './../Shared/Toast';
import { async } from '@firebase/util';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Loading from './../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const handleRegister = (event) => {
        event.preventDefault();
        const displayName = event?.target?.name.value;
        const password = passwordRef.current.value;
        const email = event?.target?.email.value;
        console.log(email, password, displayName);
        createUserWithEmailAndPassword(email, password)

        updateProfile({ displayName })
    }
    if (user) {
        navigate("/");
    }
    let erroMessage;
    if (error) {
        erroMessage = <>{error.message}</>;
        console.log(error);
    }
    return (
        <div className='login-body'>

            {/* Custom Toast Message */}
            <ToastContainer />

            {/* Registration Form */}
            <Form onSubmit={handleRegister} className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Register</h1>

                    <Form.Label className='fs-4'>Your Name</Form.Label>
                    <Form.Control ref={nameRef} name="name" type="text" placeholder="Enter Name" required />

                    <Form.Label className='fs-4 mt-3'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control ref={passwordRef} name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <p>{erroMessage}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className='text-danger fw-bold' type="checkbox" label="Agree to Tearms and Condition" />
                </Form.Group>
                <p className='fs-5'>Already have an account? <Link className='text-decoration-none text-danger fw-bold' to={'/login'}>Login</Link></p>
                {
                    loading && <Loading></Loading>
                }

                <div className='text-center mt-5 mb-3'>
                    {
                        agree ?
                            <Button ref={emailRef} className='submit-button' variant="primary" type="submit">
                                Register
                            </Button>
                            :
                            <Button className='submit-button' disabled variant="primary" type="submit">
                                Register
                            </Button>
                    }
                    <br />

                </div>
            </Form>

            {/* Social Login Section */}
            <div className='text-center'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;