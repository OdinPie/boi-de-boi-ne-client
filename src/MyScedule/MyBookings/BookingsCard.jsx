import { Checkbox, Table } from 'flowbite-react';
import React from 'react';

const BookingsCard = ({booking}) => {
    const {
        sname,
        spic,
        provideremail,
        price,
        instruction,
        date} = booking;
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
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Cancel
            </a>
          </Table.Cell>
          </div>
        
      
    );
};

export default BookingsCard;