import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const Register = () => {
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0,1], [0, -200]);
    const { signUpUser , updateUser } = useContext(AuthContext);
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.upic.value;
        const user = {displayName, password, email, photoURL};
        console.log(user);

        //usersignup
        signUpUser(email,password)
        .then(data=> {
            updateUser(displayName, photoURL);
            console.log(data.user);
            Swal.fire({
                title: "Good job!",
                text: "Registration Successful!",
                icon: "success"
              });
            
        })
        .catch(err=>{
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`
              });
        })
    }
    return (
        <div className='my-52'>
        <motion.h1 className="text-9xl font-tenor uppercase transition-all ease-in-out text-greenish" style={{translateX: 0, transitionDuration: '3s',x}} animate={{translateX: -100}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}>register</motion.h1>
        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1}}  onSubmit={handleSubmit} className="max-w-5xl mx-auto text-left font-maven my-16">
      <div className="grid grid-cols-2 gap-10">
        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Your Name" />
        </div>
        <TextInput style={{borderRadius:0}} id="name1" name='name' type="text" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="email1" name='email' type="email" placeholder="" required />
      </div>
      </div><br /><br />
      <div>

        <div>
        <div className="mb-2 block">
          <Label htmlFor="pic" value="Picture URL" />
        </div>
        <TextInput style={{borderRadius:0}} id="pic" name='upic' type="text" required />
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="pass" value="Password" />
        </div>
        <TextInput style={{borderRadius:0}} id="pass" name='password' type="password" required />
      </div>

      </div>
      <br /><br /><br />
      <p>Already have an account? <Link className='text-salmon underline' to='/login'>Login</Link></p><br /><br />
      <Button className='bg-greenish w-full' type="submit">Submit</Button>
    </motion.form></div>
    );
};

export default Register;