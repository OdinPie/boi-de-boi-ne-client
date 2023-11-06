import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AddProducts = () => {
    const { scrollYProgress } = useScroll();
    let x = useTransform(scrollYProgress, [0,1], [0, -200]);
    // ○ Picture URL of the Service
    // ○ Service Name,
    // ○ Your name, (from Firebase user , not editable )
    // ○ Your email, (from Firebase user , not editable )
    // ○ Price,
    // ○ Service Area,
    // ○ Description
    // ○ Service Area,
    // ○ provider picture (not in form) 
    return (
        <div className='my-28'>
        <motion.h1 className="text-9xl font-tenor uppercase transition-all ease-in-out text-greenish" style={{translateX: 0, transitionDuration: '3s',x}} animate={{translateX: -100}} initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}>add a service</motion.h1>
        <form className="max-w-5xl mx-auto text-left font-maven my-16">
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
        <TextInput style={{borderRadius:0}} id="name1" name='location' type="text"  />
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
        <TextInput style={{borderRadius:0}} id="name1" name='name' type="text" disabled />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your Email" />
        </div>
        <TextInput style={{borderRadius:0}} id="email1" name='email' type="email" placeholder="Your Email" disabled />
      </div>
      </div><br /><br />
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name1" value="Description" />
        </div>
        <Textarea style={{borderRadius:0}} id="name1" name='name' type="text" />
      </div>
      <br /><br /><br />
      <Button className='bg-greenish w-full' type="submit">Submit</Button>
    </form></div>
    );
};

export default AddProducts;