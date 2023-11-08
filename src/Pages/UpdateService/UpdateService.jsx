import { motion,useScroll, useTransform } from 'framer-motion';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import FooterSection from '../../Footer/FooterSection';

const UpdateService = () => {

    const service = useLoaderData();
    const {sname,
        spic,
        slocation,
        price,
        detail,_id} = service[0];
    console.log(sname);
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0,1], [0, -200]);
    const {user} = useContext(AuthContext);

    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const updatedsname = form.updatedsname.value;
      const updatedspic = form.updatedspic.value;
      const updatedslocation = form.updatedslocation.value;
      const updatedprice = form.updatedprice.value;
      const updateddetail = form.updateddetail.value;
      

      const updateInfo = {
        updatedsname,
        updatedspic,
        updatedslocation,
        updatedprice,
        updateddetail,
       }
        console.log(updateInfo);

        //axios post api
        // axios.post(`https://bdbn-server.vercel.app/services/${_id}`,updateInfo )
        fetch(`https://bdbn-server.vercel.app/services/${_id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
          if(data.modifiedCount>0){
            Swal.fire({
              title: "Good job!",
              text: "Service has been updated!",
              icon: "success"
            });
          }
        })
        
    }
    return (
        <div className='my-52'>
        <motion.h1 className="text-9xl font-tenor uppercase transition-all ease-in-out text-greenish" style={{translateX: 0, transitionDuration: '3s',x}} animate={{translateX: -100}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}>update  service</motion.h1>
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto text-left font-maven my-16">
      <div className="grid grid-cols-2 gap-10">
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='updatedsname' defaultValue={sname} type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service URL" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='updatedspic' defaultValue={spic} type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Area" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='updatedslocation' defaultValue={slocation} type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Price" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='updatedprice' defaultValue={price} type="number"  />
      </div>

        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Your Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" defaultValue={user.displayName} name='name' type="text" disabled />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="email1" name='email' defaultValue={user.email} type="email" placeholder="Your Email" disabled />
      </div>
      </div><br /><br />
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Description" />
        </div>
        <Textarea style={{borderRadius:0}} id="name1" name='updateddetail' defaultValue={detail} type="text" />
      </div>
      <br /><br /><br />
      <Button className='bg-greenish w-full' type="submit">Update</Button>
    </form><FooterSection></FooterSection></div>
    );
};

export default UpdateService;