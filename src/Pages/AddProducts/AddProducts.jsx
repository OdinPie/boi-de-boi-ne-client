import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import FooterSection from '../../Footer/FooterSection';
const AddProducts = () => {
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0,1], [0, -200]);
    const {user} = useContext(AuthContext);

    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const sname = form.sname.value;
      const spic = form.spic.value;
      const slocation = form.slocation.value;
      const price = form.price.value;
      const detail = form.detail.value;
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;

      const serviceInfo = {
        sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL}
        

        //axios post api
        axios.post('https://bdbn-server.vercel.app/services',serviceInfo )
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "Service has been added!",
              icon: "success"
            });
          }
        })
        form.reset();
    }
    return (
        <div className='my-52'>
        <motion.h1 className="text-9xl font-tenor uppercase transition-all ease-in-out text-greenish" style={{translateX: 0, transitionDuration: '3s',x}} animate={{translateX: -100}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}>add a service</motion.h1>
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto text-left font-maven my-16">
      <div className="grid grid-cols-2 gap-10">
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='sname' type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service URL" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='spic' type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Service Area" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='slocation' type="text"  />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Price" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='price' type="number"  />
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
        <Textarea style={{borderRadius:0}} id="name1" name='detail' type="text" />
      </div>
      <br /><br /><br />
      <Button className='bg-greenish w-full' type="submit">Submit</Button>
    </form><FooterSection></FooterSection></div> 
    );
};

export default AddProducts;