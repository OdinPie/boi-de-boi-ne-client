import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyService from './MyService';
import noServiceFound from '../../assets/noServiceFound.json'
import loaderAnimation from '../../assets/loaderAnimation.json'
import Lottie from 'lottie-react';
import { Button, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
import FooterSection from '../../Footer/FooterSection';

const MyServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        axios.get(`https://bdbn-server.vercel.app/services?email=${user.email}`)
        .then(res=>{
            setServices(res.data);
            if(res.data.length==0){
            setLoading(false);

            }
            setLoading(false);
        })
        
    },[user])
    console.log(services);
    return (
        <div>
        <div className='my-52'>
            <h2 className='text-4xl text-center'>My Services</h2>
            <div className='grid grid-cols-3 gap-10 max-w-5xl mx-auto mt-20'>
                {
                    services  && services.map(serve=><MyService serve={serve}></MyService>)
                }
                
            </div>
            {
                loading && <div className='flex flex-col justify-center items-center mt-56'>
                    <Lottie  animationData={loaderAnimation} loop={true} height={500} width={500}></Lottie>
                </div>
            }
            {
                    services.length==0 && <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-2xl'>No Service Found</h2>
                        <Lottie className='w-96 h-96' animationData={noServiceFound} loop={true} height={500} width={500}></Lottie>
                        <Link to='/addproducts'><Button className='bg-greenish'>Add Service</Button></Link>
                        </div>
                }
               
        </div> <FooterSection></FooterSection></div>
    );
};

export default MyServices;