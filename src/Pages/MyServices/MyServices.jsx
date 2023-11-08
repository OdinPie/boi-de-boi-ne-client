import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyService from './MyService';
import noServiceFound from '../../assets/noServiceFound.json'
import Lottie from 'lottie-react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MyServices = () => {
    const [services, setServices] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        axios.get(`http://localhost:5000/services?email=${user.email}`)
        .then(res=>setServices(res.data))
        
    },[user])
    console.log(services);
    return (
        <div className='my-52'>
            <h2 className='text-4xl text-center'>My Services</h2>
            <div className='grid grid-cols-3 gap-10 max-w-5xl mx-auto mt-20'>
                {
                    services  && services.map(serve=><MyService serve={serve}></MyService>)
                }
                
            </div>
            {
                    services.length==0 && <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-2xl'>No Service Found</h2>
                        <Lottie className='w-96 h-96' animationData={noServiceFound} loop={true} height={500} width={500}></Lottie>
                        <Link to='/addproducts'><Button className='bg-greenish'>Add Service</Button></Link>
                        </div>
                }
        </div>
    );
};

export default MyServices;