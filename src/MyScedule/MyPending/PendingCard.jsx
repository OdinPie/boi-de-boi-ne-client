import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Select } from 'flowbite-react';
const PendingCard = ({pend}) => {
    const {
        sname,
        spic,
        useremail,
        username,
        price,
        instruction,
        date,
        _id, state } = pend;

        const handleStatus = (e) =>{
            // const id = {_id};
          
            e.preventDefault();
            const dropdown = e.target;
            const statusValue = dropdown.value;
            console.log(statusValue);
            fetch(`https://bdbn-server.vercel.app/bookings/${_id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({statusValue})
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                window.location.reload(false);
            })
        }
       
    return (
        
        <div className='flex items-center'>
          <Table.Cell className="whitespace-nowrap">
            <img className='w-36 h-24' src={spic} alt={sname} />
          </Table.Cell>
          <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white w-36">
            {sname}
          </Table.Cell>
          <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white w-[280px]">
            {date}
          </Table.Cell>
          <Table.Cell className='w-20 '>${price}</Table.Cell>
          <Table.Cell className='w-[150px] whitespace-wrap'>{instruction}</Table.Cell>
          <Table.Cell>{username}</Table.Cell>
          <Table.Cell className='whitespace-wrap'>{useremail}</Table.Cell>
          <Table.Cell className='w-52'>
          {state && state=='Completed' ? <span>Completed</span> : state=='Processing' ? <Select id="Pending" name='status' onChange={handleStatus} >
            <option value='Processing'>Processing</option>
            <option value='Completed'>Completed</option>
          </Select> : <Select id="Pending" name='status' onChange={handleStatus} >
            <option value='Pending'>Pending</option>
            <option value='Processing'>Processing</option>
            <option value='Completed'>Completed</option>
          </Select>}
          </Table.Cell>
          </div>
        
      
    );
};

export default PendingCard;