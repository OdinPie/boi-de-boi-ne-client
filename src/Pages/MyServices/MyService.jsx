import { Button, Card } from 'flowbite-react';
import { useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyService = ({serve}) => {
    const {sname, spic, price, _id} = serve;
    const navigate = useNavigate();
    const handleDelete = () =>{
            const id = {_id}
            fetch('http://localhost:5000/services',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(id)
            })
            .then(res=> res.json())
            .then(data=>console.log(data))

    }
    const openModal = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
            if (result.isConfirmed) {
             handleDelete();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
            window.location.reload(false);
          });
    }
    return (
        <div>
                <div className='bg-skin h-80 mb-24'>
        
                <img className='h-full w-full' src={spic} alt="" />

                <h5 className="text-2xl font-bold font-maven text-gray-900 dark:text-white">
                    {sname}
                </h5><br />
                <div className="flex gap-3">
                <Button onClick={openModal} className='bg-dustyRose w-1/2'><AiOutlineDelete className='text-2xl'></AiOutlineDelete></Button>
                <Button onClick={()=>{navigate(`/update/${_id}`)}} className='bg-dustyRose flex-1'><BiPencil className='text-2xl'></BiPencil></Button>
                </div>
                
                </div>
                
        </div>
    );
};

export default MyService;