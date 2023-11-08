import React from 'react';
import Mybookings from './MyBookings/Mybookings';
import servicesAnimation from '../../src/assets/servicesAnimation.json'
import Lottie from 'lottie-react';

const MyScedule = () => {
    
    return (
        <div className=''>
            <Lottie animationData={servicesAnimation} loop={true} height={500} width={500}></Lottie>
            <Mybookings></Mybookings>
        </div>
    );
};

export default MyScedule;