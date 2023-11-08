import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import MyService from '../../Pages/MyServices/MyService';
import BookingsCard from './BookingsCard';
import { Table } from 'flowbite-react';

const Mybookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/bookings?useremail=${user.email}`)
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
                
            </div>
        </div>
    );
};

export default Mybookings;