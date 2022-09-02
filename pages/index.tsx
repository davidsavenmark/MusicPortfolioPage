//import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
//import {services} from '../data'
import React from 'react'
import ReactPlayer from 'react-player'


const opts = {
  height: '260',
  width: '300',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};


const index = () => {
  //console.log('CLIENT',services)

  return (
    <div className='p-4'>
      <h5>
        The second EP is in the works and with confidence I can say the whole sound is better.
        Every song sounds like it could be released by itself.
        The drums are thicker, the sound is overall more up-lifting. I cannot wait to share it!
        Patterns gave me peace and clarity and most importantly, a reference point. More videos from this upcoming EP will be released in the near future. 
        Sincerely
        // Sinemark
        September 1,  2022
      </h5>
    
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