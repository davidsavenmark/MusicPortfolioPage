//import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ReactPlayer from 'react-player'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ServiceCard from '../components/ServiceCard';
import {services} from '../data'





// const opts = {
//   height: '260',
//   width: '300',
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 0,
//   },
// };


const index = () => {
  //console.log('CLIENT',services)

  return (
    <div className='p-4 flex flex-col px-6 pt-1 flex-grow'>
      <h5 className='my-3 font-medium'>
        The second EP is in the works and I can with confidence say that the whole sound is just better.
        Every song sounds like it could be released by itself.
        The drums are thicker, sound is overall more up-lifting.
       
      </h5>

      <h5> I can't wait to share it!
        'Patterns' gave me peace, clarity and most importantly, a reference point.
        More videos from this upcoming EP will be released in the near future.
      // Sinemark, September 1st 2022.
      </h5>

      <div className='p-4 my-5 flex-grow' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <h6 className='my-3 font-bold text-xl tracking-wide text-black'>What I'm doing</h6>
        <div className='grid lg:grid-cols-2 gap-6'>
          {services.map(service => (
            <div className='lg:col-span-1 bg-gray-200 rounded-lg'>
              <ServiceCard service={service} />
            </div>
          ))}

        </div>
        <Carousel className='p-4' infiniteLoop useKeyboardArrows autoPlay>
				<div>
          <h2 className='justify-center text-indigo-500'></h2>
					<img src="/sinemark3.png" alt="image1" className='shadow-md shadow-black'/>					
				</div>
				<div>
					<img src="/sinemark2.png" alt="image2" className='shadow-md shadow-black'/>
				</div>
				<div>
					<img src="/sinemark1.png" alt="image3" className='shadow-md shadow-black'/>
				</div>
				<div>
					<img src="/sinemark4.png" alt="image4" className='shadow-md shadow-black'/>
				</div>
				<div>
					<img src="/sinemark5.png" alt="image5" className='shadow-md shadow-black'/>
				</div>
			</Carousel>
      </div>

      

    </div>
    

    
  )
}

export default index



// export const getStaticProps = async (context: GetStaticPropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     }
    
//   }


// }


// export const getServerSideProps = async (context: GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     }
    
//   }


// }