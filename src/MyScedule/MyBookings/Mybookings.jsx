import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import BookingsCard from './BookingsCard';
import { Table } from 'flowbite-react';
import Lottie from 'lottie-react';
import noServiceFound from '../../assets/noServiceFound.json'

const Mybookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        axios.get(`https://bdbn-server.vercel.app/bookings?useremail=${user.email}`)
        .then(res=>setBookings(res.data))
    },[user])

  
    return (
        <div>
            <h2 className='text-center text-4xl font-tenor'>My Bookings</h2><br />
            <div>
            <Table hoverable className='max-w-5xl mx-auto w-full'>
                <Table.Head className='flex gap-48 w-fit'>
                
                    <Table.HeadCell className='w-48'>Service</Table.HeadCell>
                    <Table.HeadCell>Service name</Table.HeadCell>
                    <Table.HeadCell className='w-44'>Sceduled Date</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Instruction</Table.HeadCell>
                    <Table.HeadCell>Provider</Table.HeadCell>
                    

                    <Table.HeadCell>
                    <span className="sr-only">Cancel</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {
                    bookings && bookings.map(booking=>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <BookingsCard booking={booking}></BookingsCard> </Table.Row> )
                }
                </Table.Body>
                </Table>
                {
                    bookings.length==0 && <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-center text-2xl mt-10'>No Bookings Found</h2>
                        <Lottie className='w-96 h-96' animationData={noServiceFound} loop={true} height={100} width={100}></Lottie>
                        </div>
                }
                
                
            </div>
        </div>
    );
};

export default Mybookings;