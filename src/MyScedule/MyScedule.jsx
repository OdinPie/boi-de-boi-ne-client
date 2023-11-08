import React from 'react';
import Mybookings from './MyBookings/Mybookings';
import servicesAnimation from '../../src/assets/servicesAnimation.json'
import Lottie from 'lottie-react';
import MyPending from './MyPending/MyPending';
import FooterSection from '../Footer/FooterSection';

const MyScedule = () => {
    
    return (
        <div className=''>
            {/* <h1 className='text-center text-4xl bg-salmon absolute w-full'>My Schedule</h1> */}
            <Lottie animationData={servicesAnimation} loop={true} height={500} width={500}></Lottie>
            <Mybookings></Mybookings>
            <MyPending></MyPending>
            <FooterSection></FooterSection>
        </div>
    );
};

export default MyScedule;