import { Avatar, Button, Datepicker, Label, Modal, TextInput, Textarea } from 'flowbite-react';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'
const SingleService = () => {
    const service = useLoaderData();
    const [provider, setProvider] = useState(null);
    const {sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL} = service[0];
        const {user} = useContext(AuthContext);
        const [openModal, setOpenModal] = useState(false);

        useEffect(()=>{
          axios.get(`http://localhost:5000/users?email=${email}`)
          .then(res=>setProvider(res.data[0]));

        },[email])
          // console.log('provider: ', provider);
          // const {userdetail} = provider;
          // console.log(userdetail);
        const handleSubmit = (e) =>{
            e.preventDefault();
            const form  = e.target;
            const sname = form.sname.value;
            const spic = form.spic.value;
            const provideremail = form.provideremail.value;
            const useremail = form.useremail.value;
            const username = form.username.value;
            const price = form.price.value;
            const instruction = form.instruction.value;
            const date = form.date.value;

            const bookingInfo = {
                sname,
                spic,
                provideremail,
                useremail,
                username,
                price,
                instruction,
                date}
            console.log(bookingInfo);
            //axios post

            axios.post('http://localhost:5000/bookings',bookingInfo)
            .then(res=>{
                console.log(res.data)
                Swal.fire({
                    title: "Good job!",
                    text: "You have placed the order!",
                    icon: "success"
                  });
            })
            .catch(err=>console.log(err))

            setOpenModal(false);
        }
    return (
      <div>
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
            <Button onClick={() => setOpenModal(true)} className='bg-red-100 hover:bg-white flex-1 text-gray-600'>Book Now</Button>
           
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Booking</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto text-left font-maven">
      <div className="grid grid-cols-2 gap-10">
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={sname} name='sname' type="text" disabled />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Image" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={spic} name='spic' type="text" disabled />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Provider Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={email} name='provideremail' type="text" disabled />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Price (dollars)" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={price} name='price' type="number" disabled  />
      </div>

        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="User Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={user.displayName} name='username' type="text" disabled />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="User Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="email1" name='useremail' defaultValue={user.email} type="" placeholder="Your Email" disabled />
      </div>
      </div><br /><br />
      <div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="date" value="Service Taking Date" />
        </div>
        <Datepicker name='date' required/>
      </div>
      </div><br /><br />
      <div>
        
  
      
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Special Instruction" />
        </div>
        <Textarea style={{borderRadius:0}} id="name1" name='instruction' type="text" />
      </div>
      <br /><br /><br />
      <Modal.Footer>
           <Button type='submit' className='bg-greenish text-white'>Purchase</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
    </form>
          </div>
        </Modal.Body>
        
      </Modal>
            </div>

        </div>
        </div>
        {/* Provider detail part */}
        {provider && <div className='my-20 text-left left flex gap-20 max-w-5xl mx-auto'>
          <div>
            <img src={photoURL} alt="" />
          </div>
          <div>
            <h2 className='text-3xl'>Provider Information</h2><br />
          <h2>Name: {displayName}</h2>
          <p>Email: {email}</p>
          <p>Location: {slocation}</p><br />
          <p>{provider.userdetail}</p>
          </div>
          
        </div>}
        </div>
    );
};

export default SingleService;