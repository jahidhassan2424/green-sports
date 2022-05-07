
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Home.css'


const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container'>
            {
                user
                    ?
                    <div>
                        {/* User Greetings Section */}
                        <div className='greeting-section border p-5 rounded-2xl shadow-md '>
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

export default Home;