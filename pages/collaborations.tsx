import React from 'react'
import { motion } from "framer-motion"
import { Carousel } from 'react-responsive-carousel'

const collaborations = () => {
  return (
    <>
      <div className="justify-center">
        <div className="my-1 p-2 sm:overflow-y-auto mb-3 overflow-auto lg:grid grid-col-2 grid-flow-col gap-4 md:grid grid-col-2 bg-gradient-to-r from-orange-100 to-gray-300">

          {/* Youtube links */}
          <motion.div animate={{ rotate: 360 }}
            transition={{
              repeat: 0,
              repeatType: "reverse",
              duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-green-300 to-indigo-200 rounded-lg'>
              <iframe
                width="300"
                height="260"
                src="https://www.youtube.com/embed/junhqJnucG4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div animate={{ rotate: 360 }}
            transition={{
              repeat: 0,
              repeatType: "reverse",
              duration: 1
            }}>

            <div className='lg:col-span-1 bg-gradient-to-r from-orange-300 to-cyan-200 rounded-lg'>
              <iframe
                width="300"
                height="260"
                src="https://www.youtube.com/embed/_uaec22kcqE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div animate={{ rotate: 360 }}
            transition={{
              repeat: 0,
              repeatType: "reverse",
              duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-red-300 to-indigo-200 rounded-lg'>
              <iframe
                width="300"
                height="260"
                src="https://www.youtube.com/embed/AZXxxjlAb24"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>

          <motion.div animate={{ rotate: 360 }}
            transition={{
              repeat: 0,
              repeatType: "reverse",
              duration: 1
            }}>
            <div className='lg:col-span-1 bg-gradient-to-r from-indigo-300 to-gray-300 rounded-lg'>
              <iframe
                width="300"
                height="260"
                src="https://www.youtube.com/embed/BqhJuMLOI2E"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
                className=' p-4 pb-3'>
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default collaborations