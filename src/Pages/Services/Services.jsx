import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import Service from './Service';
import Lottie from 'lottie-react';
import noServiceFound from '../../assets/noServiceFound.json'
import loaderAnimation from '../../assets/loaderAnimation.json'
import { Button, Label, TextInput } from 'flowbite-react';
import axios from 'axios';
import ServiceCard from './ServiceCard';
const Services = () => {
    // const services = useLoaderData();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:5000/services')
        .then(res=>{
            setServices(res.data);
            if(res.data.length===0 || res.data.length>0){
                setLoading(false);
            }
            
        })
    },[])

    const searchFunction = e =>{

        e.preventDefault();
        const form = e.target;
        const hint = form.hint.value;
        console.log(hint);

        axios.get(`http://localhost:5000/search/${hint}`)
        .then(res=>{
            console.log(res);
            setServices(res.data);
            setLoading(false)
            // window.location.reload(false);
            })
    }

    return (
        <div className='max-w-7xl mx-auto my-52'>
            <div className="mx-auto flex  w-full flex-shrink-0 items-center sm:w-auto my-20">
          <form onSubmit={searchFunction} action="#" className="flex w-full justify-center flex-col items-center md:flex-row md:gap-x-3">
            
            <TextInput className='w-1/3' placeholder="Search by Book Name" name='hint'  type="text" />
            <Button className='bg-tealy px-5' type="submit">Search</Button>
          </form>
        </div>
            <div className='max-w-6xl mx-auto'>
            
              {
                services && services.map(serve=><ServiceCard serve={serve}></ServiceCard>)
                } 

            {
                loading && <div className='flex flex-col justify-center items-center mt-56'>
                    <Lottie  animationData={loaderAnimation} loop={true} height={500} width={500}></Lottie>
                </div>
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

export default Services;