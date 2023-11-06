import { Button, Label, TextInput } from 'flowbite-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
const Login = () => {
    const { loginUser, signWithGoogle } = useContext(AuthContext);
    const { scrollYProgress } = useScroll();
    const location = useLocation();
    let x = useTransform(scrollYProgress, [0,1], [0, -200]);
    const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        //login
        loginUser(email, password)
        .then(res=>{
            {
                location.state? navigate(location.state) : navigate('/')
            }
        })
        .catch(err=>{
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
    whileInView={{ opacity: 1}}>login</motion.h1>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1}} className="max-w-3xl mx-auto text-left font-maven my-16">
      
        
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="email1" name='email' type="email" placeholder="" required />
      </div>
      <br /><br />
      <div>

        <div>
        <div className="mb-2 block">
          <Label htmlFor="pass" value="Password" />
        </div>
        <TextInput style={{borderRadius:0}} id="pass" name='password' type="password" required />
      </div>

      </div>
      <br /><br /><br />
      <p>Do not have an account? <Link className='text-salmon underline' to='/register'>Register</Link></p><br /><br />
      <Button className='bg-greenish w-full' type="submit">Submit</Button><br />
      <Button className='bg-greenish w-full' onClick={signWithGoogle}><FaGoogle className='mx-5'></FaGoogle>Sign in with Google</Button>
    </motion.form></div>
    );
};

export default Login;