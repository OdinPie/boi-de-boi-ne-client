import { Card } from 'flowbite-react';
import React from 'react';

const Reviews = () => {
    return (
        <div className='my-20 max-w-6xl mx-auto'>
            <h1 className='font-tenor text-4xl text-center'>User Review</h1><br /><br />
            <div className='flex gap-10'>
            <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
        
      </div>
      <div className="flex flex-col items-center pb-10">
        <img src="https://wallpapers.com/images/hd/portrait-of-woman-with-random-people-5wu04gyr7p6p0i5c.jpg" alt="" />
        
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mellisa Brown</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>"Great website! Helped me so much when is was looking for a good book selling shop"</p>
        </div>
      </div>
    </Card>
    
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
        
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className='h-[190px]' src="https://apiwp.thelocal.com/cdn-cgi/image/format=webp,width=855,quality=75/https://apiwp.thelocal.com/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg" alt="" />
        
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nick Jonas</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Web Developer</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>"If you are looking for a reliable website, this is for you"</p>
        </div>
      </div>
    </Card>
    
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
        
      </div>
      <div className="flex flex-col items-center pb-10">
        <img className='h-[190px]' src="https://images.squarespace-cdn.com/content/v1/590cc57ebe659408c68d77fd/1539111100345-873MNDZSI8DNBCMXS8MQ/Header.jpg" alt="" />
        
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ramses Third</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Film Director</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <p>"Been using this website for 2 years. Absolute LOVE LOVE LOVE it!"</p>
        </div>
      </div>
    </Card>
    
    </div>
        </div>
    );
};

export default Reviews;