import React, { Suspense, lazy, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Service from './Service';
import Lottie from 'lottie-react';
import noServiceFound from '../../assets/noServiceFound.json'
import { Button } from 'flowbite-react';
const Services = () => {
    const services = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto my-52'>
            <div className='serviceContainer ml-20'>
            
              {
                services && services.map(serve=><Service serve={serve}></Service>)
                } 
                {
                    services.length==0 && <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-2xl'>No Service Found</h2>
                        <Lottie className='w-96 h-96' animationData={noServiceFound} loop={true} height={500} width={500}></Lottie>
                        <Link to='/addproducts'><Button className='bg-greenish'>Add Service</Button></Link>
                        </div>
                }
            </div>
           
        </div>
    );
};

export default Services;