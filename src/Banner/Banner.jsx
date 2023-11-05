
import { Button, Carousel } from 'flowbite-react';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="h-56 sm:h-64 lg:h-[700px] relative">
      <Carousel className='rounded-none overflow-hidden' slideInterval={7000} pauseOnHover>
        <div className='relative'>
        <div className="overlay"></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl text-white font-rechester'>
        {' '}
        <span style={{ color: '#EFD9D1', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Discover', 'Explore', 'Exchange']}
            loop={30}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span> New World of Books
      </h1>
            </div><Button className='bg-[#89A194] absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-10 px-7 py-3 animate-pulse'>Explore Now</Button>
        <img className='w-full' src="https://i.pinimg.com/736x/93/32/f1/9332f1527fed78dc503d8d3b39ee1f8f.jpg" alt="..." />
        </div>
        <div className='relative overflow-hidden'>
        <div className="overlay"></div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl text-white font-rechester'>
        {' '}
        <span style={{ color: '#EFD9D1', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Unleash the power of sharing', 'Connect with book enthusiasts worldwide']}
            loop={0}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
            </div><Button className='bg-[#D8AC9C] absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y- px-7 py-3 animate-pulse'>Explore Now</Button>

        <img className='w-full' src="https://i.pinimg.com/originals/43/88/06/43880637d02b1e4b13c428ff589d6451.png" alt="..." />
        </div>
        <div className='relative overflow-hidden'>
        <div className="overlay"></div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-5xl text-white font-rechester'>
        {' '}
        <span style={{ color: '#EFD9D1', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Join the book-loving community',' Build your reading universe !']}
            loop={30}
            cursor
            cursorStyle='| '
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span> 
      </h1>
            </div><Button className='bg-[#D8AC9C] absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-10 px-7 py-3 animate-pulse'>Sign Up</Button>

        <img className='w-full' src="https://images.unsplash.com/photo-1595123550441-d377e017de6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="..." />
        </div>
      </Carousel>
      
    </div>
    );
};

export default Banner;