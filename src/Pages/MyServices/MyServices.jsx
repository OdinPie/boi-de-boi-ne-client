import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyService from './MyService';

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
                    services && services.length && services.map(serve=><MyService serve={serve}></MyService>)
                }
            </div>
        </div>
    );
};

export default MyServices;