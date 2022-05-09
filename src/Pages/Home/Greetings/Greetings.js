import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Greetings.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Greetings = () => {
    const [total, setTotal] = useState();
    const [user] = useAuthState(auth);


    return (
        <div className='container'>
            {
                user
                    ?
                    <div className='abc'>
                        {/* User Greetings Section */}
                        <div className='greeting-section  p-5 mb-3 rounded-2xl shadow-md '>
                            <div className='h2 '>Hey {user.displayName}, Good Morning</div>
                            <div className='shadow-md greeting-card m-2 h4 px-5 py-3 rounded-xl  '>
                                <h4 className='text-center'>Sell Count</h4>
                                <h3 className='text-center' >2198</h3>
                            </div>
                            <div className='shadow-md greeting-card m-2 h4 px-5 py-3 rounded-xl '>
                                <h4 className='text-center'>Total Cost</h4>
                                <h3 className='text-center' >100M</h3>
                            </div>

                        </div>
                    </div>
                    :
                    <div></div>
            }

        </div>
    );
};

export default Greetings;