import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Greetings.css'

const Greetings = () => {

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
                            <div className='shadow-md greeting-card m-2 h4 px-5 py-3 rounded-xl  '>Sell Count</div>
                            <div className='shadow-md greeting-card m-2 h4 px-5 py-3 rounded-xl '>Total Cost</div>
                            <div className='shadow-md greeting-card m-2 h4 px-5 py-3 rounded-xl '>Item Sold</div>
                        </div>
                    </div>
                    :
                    <div></div>
            }

        </div>
    );
};

export default Greetings;