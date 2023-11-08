import { Checkbox, Table } from 'flowbite-react';
import React from 'react';
import Swal from 'sweetalert2';

const BookingsCard = ({booking}) => {
    const {
        sname,
        spic,
        provideremail,
        price,
        instruction,
        date,
        _id } = booking;
        const handleDelete = () =>{
            const id = {_id};
            fetch('https://bdbn-server.vercel.app/bookings',{
                method:'DELETE',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(id)
            })
            .then(res=>res.json())
            .then(data=> console.log(data))
        }
        const openModal = () =>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!"
              }).then((result) => {
                
                if (result.isConfirmed) {
                 handleDelete();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your order has been cancelled.",
                    icon: "success"
                  });
                }
                window.location.reload(false);
              });
        }
    return (
        
        <div className='flex items-center'>
          <Table.Cell className="whitespace-nowrap">
            <img className='w-36 h-24' src={spic} alt={sname} />
          </Table.Cell>
          <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white w-36">
            {sname}
          </Table.Cell>
          <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white">
            {date}
          </Table.Cell>
          <Table.Cell>${price}</Table.Cell>
          <Table.Cell className='w-[150px] whitespace-wrap'>{instruction}</Table.Cell>
          <Table.Cell>{provideremail}</Table.Cell>
          <Table.Cell>
            <a onClick={openModal} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Cancel
            </a>
          </Table.Cell>
          </div>
        
      
    );
};

export default BookingsCard;