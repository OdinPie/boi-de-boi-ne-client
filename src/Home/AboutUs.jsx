import Lottie from 'lottie-react';
import React from 'react';
import aboutUs from '../assets/aboutUs.json'
const AboutUs = () => {
    return (
        <div className='flex justify-center items-center max-w-6xl mx-auto'>
            <div className='w-1/2'>
                <h1 className='text-6xl font-tenor text-left'>About Us</h1><br /><br />
                <p className='text-left'>Welcome to BOIDeBoiNe. <br /><br />

At BOIDeBoiNe, we believe that every book has a story, and every story deserves to be shared. Our platform is dedicated to fostering a community of book lovers and enthusiasts, creating a space where old books find new homes and where literary journeys continue to flourish.


Join us on this literary adventure, as we embark on a journey to spread the joy of reading and to celebrate the magic of storytelling. Together, let's keep the pages turning and the stories alive. <br /><br />

Happy reading! <br /><br />

The BOIDeBoiNe Team</p>
            </div>
            <div className='w-1/2'>
                <Lottie animationData={aboutUs} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default AboutUs;