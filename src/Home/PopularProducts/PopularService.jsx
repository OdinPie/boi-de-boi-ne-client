import React, { useEffect, useState } from 'react';
import FramerTextServices from '../FramerText/FramerTextServices';
import Services from '../../Pages/Services/Services';
import axios from 'axios';
import Service from '../../Pages/Services/Service';
import { motion,
    useScroll,
    useTransform, } from 'framer-motion';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
const PopularService = () => {
    const [popServices, setpopServices] = useState([]);
    useEffect(()=>{
        axios.get('https://bdbn-server.vercel.app/popularservices')
        .then(res=>{
            setpopServices(res.data);
        })
    },[])
    const navigate = useNavigate();
    const handleSeeMore = () =>{
        navigate('/services');
    }
    // console.log(popServices);
    return (
        <div>
        <div className="relative">
             <FramerTextServices ></FramerTextServices>
             <motion.div className="max-w-4xl mx-auto" whileInView={{animation:'ease-in-out'}}>
                <div className="serviceContainer absolute top-52 -z-1" >
                {popServices && popServices.map(serve=><Service serve={serve}></Service>)}
            </div>
            
        </motion.div>
        <div className='popOverlay sm:h-[700px] lg:h-[400px] absolute w-full z-1 -bottom-1/4'>
                <h2 className='text-4xl'></h2>
                </div>
             </div>
             <div className="flex justify-center items-center">
               
             <Button className='bg-dustyRose py-2 px-7 mt-16 w-56' onClick={handleSeeMore}>See More</Button>
             </div>
             </div>
    );
};

export default PopularService;