import { Avatar, Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const service = useLoaderData();
    const {sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL} = service[0];

        console.log(sname);
    return (
        <div className='flex bg-gray-400 overflow-hidden'>
            <div className=''>
                <img className='w-[800px] h-full' src={spic} alt="" />
            </div>
            <div className='flex-1 py-36  px-5 pb-20  text-white flex flex-col justify-center items-center'>
                <div className='text-center'>
                <h2 className='text-5xl font-tenor  '>{sname}</h2><br /><br /><br />
                <div className='text-xl font-maven'>
                <p>Price: ${price}</p><br /><br />

                <p>{detail}</p> <br /><br />
                {/* <p>Location: {slocation}</p> */}
                </div>
                <hr />
                </div>
                <hr />
                <br />
                <div className='text-left text-xl '>
                <p>Provider: </p><br />
                <div className='flex gap-10'>
                <Avatar img={photoURL} />
                {/* <p className="font-normal text-gray-700 dark:text-gray-400 uppercase">{displayName}</p>  */}
                <p className="font-normal text-white uppercase">{displayName}</p> 
                </div>
            </div><br /><br />
            <div className="flex w-full">
            <Button  className='bg-red-100 flex-1 text-gray-600'>Book Now</Button>
            </div>

        </div>
        
        
        </div>
    );
};

export default SingleService;