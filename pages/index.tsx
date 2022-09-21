import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';

const Home = ({endpoint}) => {
  console.log(endpoint)
  
  return (
   
    <div className='p-4 flex flex-col px-6 pt-1 flex-grow'>
      <h5 className='my-3 font-medium font-poppins text-white dark:text-black'>
        The second EP is in the works and I can with confidence say that the whole sound is just better.
        Every song sounds like it could be released by itself.
        The drums are thicker, sound is overall more up-lifting. These songs comes from older arrangements
        that I could not just leave unfinished. There are other genres I would like to move
        towards in the future but for now, this next EP will be another step closer to what Sinemark is about.
        
        
      </h5>
      <h6 className='my-3 font-small font-poppins text-white dark:text-black'>Go to 'Solo' for a quick preview of what I've been working on.</h6>
      <div className='p-4 my-5 flex-grow' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 font-bold text-xl tracking-wide flex justify-center text-white dark:text-black'>What I'm doing</h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {services.map(service => (
            <div className='lg:col-span-1 bg-gray-800 dark:bg-slate-100 rounded-lg text-white dark:text-black shadow-lg'>
              <ServiceCard service={service}/>
            </div>
          ))}
        </div>

            {/* image-carousel */}
        <Carousel className='p-4' infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src="../images/sinemark4.png" alt="image4" className='shadow-md shadow-black' />
          </div>
          <div>
            <img src="../images/sinemark3.png" alt="image1" className='shadow-md shadow-black' />
          </div>
          <div>
            <img src="../images/sinemark5.png" alt="image5" className='shadow-md shadow-black' />
          </div>
          <div>
            <img src="../images/sinemark2.png" alt="image2" className='shadow-md shadow-black' />
          </div>
          <div>
            <img src="../images/sinemark1.png" alt="image3" className='shadow-md shadow-black' />
          </div>
          <div>
            <img src="../images/sinemark6.png" alt="image5" className='shadow-md shadow-black' />
          </div>
        </Carousel>

      </div>
    </div>
    
    
    
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext)=>{
  //  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  //  const data = await res.json();
  // console.log('SERVER', services)
  return { props: { endpoint: process.env.VERCEL_URL } };
}

export default Home
