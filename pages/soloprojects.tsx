import React from "react";
import { motion } from "framer-motion"

const soloprojects = () => {
  return (
    <div className='p-4 flex flex-col px-6 pt-1 flex-grow '>
      <div className='p-3 my-5 flex-grow ' style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <p className="p-3 font-aboreto text-3xl flex justify-center  text-white dark:text-black">
          Patterns
        </p>
        <p className="p-3 font-poppin text-sm mb-3 flex justify-center text-white dark:text-black">
          Debut EP from 2020. An array of six songs.
        </p>
        <p className="p-3 font-poppins text-md mb-3 flex justify-center text-white dark:text-black ">
          Listen below
        </p>

        <div className="my-1 p-2 sm:overflow-y-auto mb-3 overflow-auto lg:grid grid-col-2 grid-flow-col gap-4 md:grid grid-col-2 bg-gradient-to-r from-orange-100 to-gray-300">
          {/* Youtube links */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-green-300 to-indigo-200 rounded-lg'>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/IotBQAzTMCc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-orange-300 to-cyan-200 rounded-lg'>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/6P_t2ypUtRY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>

          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-red-300 to-indigo-200 rounded-lg'>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/T9WNR_VyH_w"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-indigo-300 to-green-300 rounded-lg'>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/GX97ehRhMPo"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-green-300 to-orange-300 rounded-lg'>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/AKj_Ee8TRkA"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
            duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-gray-300 to-red-300 rounded-lg '>
              <iframe
                width="280"
                height="260"
                src="https://www.youtube.com/embed/x03ys2h3lr8"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>
        </div>

        <p className="p-3 font-poppins my-8 text-md mb-3 flex justify-center  text-white dark:text-black ">
          Preview of some songs from the next EP
        </p>
        <div className="flex justify-center">
        <div className='lg:col-span-1 bg-gradient-to-r from-red-200 to-cyan-100 rounded-2xl flex justify-center w-80'>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/gk058FsRgNw"
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading='lazy'
              className=' p-4 pb-3 flex justify-center'>
            </iframe>
          </div>
        </div>
         
       
      </div>
    </div>
  )
}

export default soloprojects