import React from "react";

const soloprojects = () => {


  return (
    <div className='p-4 flex flex-col px-6 pt-1 flex-grow '>

      
      
      <div className='p-3 my-5 flex-grow ' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
      <p className="p-3 font-aboreto text-3xl text-black flex justify-center">Patterns</p>
      <p className="p-3 font-poppins text-black text-sm mb-3 flex justify-center">Debut EP from 2020, An array of six songs. 
      </p>
      <p className="p-3 font-poppins text-black text-md mb-3 flex justify-center ">Listen to the full playlist
      </p>
        <div className="flex justify-center my-1 ml-2 ">
          <iframe 
          width="400" 
          height="315" 
          src="https://www.youtube.com/embed/videoseries?list=PL7T9moZCZP_nkMsW9c2VtL-7JHGmv73LP" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          className="sm:max-w-sm">
          </iframe>
        </div>


        <div className='grid lg:grid-cols-2 gap-6'>
  
        </div>
        
      </div>
    
    </div>

  )
}

export default soloprojects