import Lottie from 'lottie-react';
import pageNotFound from '../assets/pageNotFound.json'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Navigationbar from '../Navigation/Navigationbar';
import FooterSection from '../Footer/FooterSection';

const ErrorRoute = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>

        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-center text-4xl text-red-600 font-tenor font-bold'>404 Not Found</h2>
            <Lottie className='w-96 h-96' animationData={pageNotFound} loop={true} height={500} width={500}></Lottie>
            <Link to='/'><Button className='bg-greenish'>Navigate to Home</Button></Link>
        </div><FooterSection></FooterSection></div>
    );
};

export default ErrorRoute;