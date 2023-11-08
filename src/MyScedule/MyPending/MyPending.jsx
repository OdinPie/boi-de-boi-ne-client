import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Table } from 'flowbite-react';
import PendingCard from './PendingCard';

const MyPending = () => {
    const {user} = useContext(AuthContext);
    const [pending, setPending] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/bookings?provideremail=${user.email}`)
        .then(res=>setPending(res.data))
    },[user])
    console.log(pending);
    return (
        <div className='my-32'>
            <h2 className='text-center text-4xl font-tenor'>My Pending Works</h2><br />
            <div>
            <Table hoverable className='max-w-5xl mx-auto w-full'>
                <Table.Head className='flex gap-48 w-fit'>
                
                    <Table.HeadCell className='w-48'>Service</Table.HeadCell>
                    <Table.HeadCell>Service name</Table.HeadCell>
                    <Table.HeadCell className='w-44'>Sceduled Date</Table.HeadCell>
                    <Table.HeadCell >Price</Table.HeadCell>
                    <Table.HeadCell>Instruction</Table.HeadCell>
                    <Table.HeadCell>User</Table.HeadCell>
                    <Table.HeadCell>User Email</Table.HeadCell>
                    <Table.HeadCell className='pr-16'>
                    Status
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                {
                    pending && pending.map(pend=>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <PendingCard pend={pend}></PendingCard> </Table.Row> )
                }
                </Table.Body>
                </Table>
                
            </div>
        </div>
    );
};

export default MyPending;