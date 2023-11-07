import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto my-52'>
            <div className='grid grid-cols-3 gap-10'>
              {
                services && services.map(serve=><Service serve={serve}></Service>)
            }  
            </div>
            
        </div>
    );
};

export default Services;