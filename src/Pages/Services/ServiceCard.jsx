import { Avatar, Button, Card } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const ServiceCard = ({serve}) => {
    const {sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL,_id} = serve;

        const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/services/${_id}`)
    }
    return (
   
    <div className='flex p-8 px-36 bg-[#ddc1e968] w-[1000px] max-h-[500px] justify-between mb-16'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-2xl font-tenor'>{sname}</h1><br />
            <img className='h-[300px] max-w-[200px]' src={spic} alt="" />
        </div>

        <div className='w-1/3 text-left'>
            <BiSolidQuoteAltLeft className='text-4xl'></BiSolidQuoteAltLeft>
        {detail.length <=100? <p className="font-normal text-gray-700 dark:text-gray-400">
         {detail}
      </p>:<p className="font-normal text-gray-700 dark:text-gray-400">
        {detail.slice(0,100)}....
      </p> }
      <hr />
      <br /><br />
       <p>Provider: </p><br />
       <div className='flex justify-between'>
         <div className="flex flex-wrap gap-2 items-center">
       <Avatar img={photoURL} rounded />
       <p className="font-normal text-gray-700 dark:text-gray-400">{displayName}</p> 
     </div>
        </div><br /><br />
     <Button className='outline hover:bg-white outline-white w-full text-teal-800' onClick={handleDetails}>View Details</Button>

    </div></div>
    );
};

export default ServiceCard;