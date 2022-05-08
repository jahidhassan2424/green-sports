
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Greetings from '../Greetings/Greetings';
import './Home.css'


const Home = () => {

    return (
        <div className='container'>
            <Greetings></Greetings>
            <div className='carousal-section'>
                <div>
                    <Category></Category>
                </div>
                <div>
                    <Banner></Banner>
                </div>
            </div>

        </div>
    );
};

export default Home;