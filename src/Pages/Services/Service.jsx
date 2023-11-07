import { Avatar, Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Service = ({serve}) => {
    const {sname,
        spic,
        slocation,
        price,
        detail,
        displayName,
        email,
        photoURL,_id} = serve;

        const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/services/${_id}`)
    }
    return (
      <Card className="max-w-sm text-left glass" imgSrc={spic} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {sname}
      </h5>
      {detail.length <=100? <p className="font-normal text-gray-700 dark:text-gray-400">
        {detail}
      </p>:<p className="font-normal text-gray-700 dark:text-gray-400">
        {detail.slice(0,100)}....
      </p> }
      <p className="font-normal text-gray-700 dark:text-gray-400">Price: ${price}</p> 

      <hr />
      <p>Provider: </p>
      <div className='flex justify-between'>
        <div className="flex flex-wrap gap-2 items-center">
      <Avatar img={photoURL} />
      <p className="font-normal text-gray-700 dark:text-gray-400">{displayName}</p> 
    </div>
    <Button className='bg-dustyRose' onClick={handleDetails}>View Details</Button>

      </div>
      

    </Card>
    );
};

export default Service;