
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Chart from '../Chart/Chart';
import Featured from '../Featured/Featured';
import Greetings from '../Greetings/Greetings';
import './Home.css'

const Home = () => {

    return (
        <div className='container'>
            <Greetings></Greetings>

            {/* Carousal Section */}
            <div className='carousal-section'>
                <div>
                    <Category></Category>
                </div>
                <div>
                    <Banner></Banner>
                </div>
            </div>
            <div>
                <h2 className='text-center'>Sell 2021 </h2>
                <Chart></Chart>
            </div>
            {/* Featured Item Section */}
            <h1 className='text-center mt-24 mb-5 fw-bold'>Featured Product</h1>
            <div>
                <Featured></Featured>
            </div>

        </div>
    );
};

export default Home;