import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {


    return (
        <div >

            <Carousel interval="2500" className='bannerBody' fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/g3jbfrf/cristina-anne-costello-s4-K5-M98r5.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/hMDn59Z/lesly-juarez-g-NYQx-I5uf-II-unsplash.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/g3jbfrf/cristina-anne-costello-s4-K5-M98r5.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/hMDn59Z/lesly-juarez-g-NYQx-I5uf-II-unsplash.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Banner;