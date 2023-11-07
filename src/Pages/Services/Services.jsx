import React, { Suspense, lazy, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Service from './Service';
const Services = () => {
    const services = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto my-52'>
            <div className='serviceContainer'>
            
              {
                services && services.map(serve=><Service serve={serve}></Service>)
            } 
            </div>
           
        </div>
    );
};

export default Services;