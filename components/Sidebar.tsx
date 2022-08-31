import react from 'react'
import { ImSpotify, ImYoutube } from 'react-icons/im'
import { SiApplemusic } from 'react-icons/si'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img
                src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/277350139_338827658285184_8942894879981920547_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hRToecrtXy4AX-qwpj5&_nc_ht=scontent-arn2-1.xx&oh=00_AT9C1uowSNSijtji6DMSUpgA3iN1oM9kscyUIe1c3byg7A&oe=6312AE36"
                alt="user-avatar"
                className='w-32 h-32 rounded-full mx-auto'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-aboreto'>
                <span>Sinemark </span>
            </h3>
            <p className='px-2 py-1 my-3 bg-purple-200 rounded-full font-poppins'>
                Artist & Musician
            </p>

            <a href="https://open.spotify.com/album/4k2IYJ8yKjtFiZjLpviF37?si=3i8_IvRmT8yb8C_wT_9ipA&fbclid=IwAR1KfxEiuK99QmYyNuJvFr52_VUa_mku8urVRQHmStPqL2oAuxW2JdsqHzc&nd=1" target="_blank">
                <p className='px-2 py-1 my-3 bg-gray-300 rounded-full cursor-pointer font-poppins'>Stream now</p>
            </a>

            {/*Socials*/}
            <div>
                <a href="" className='flex items-center m-5 justify-evenly text-blue-500'>
                    <ImSpotify className='w-6 h-8' />
                    <ImYoutube className='w-6 h-8' />
                    <SiApplemusic className='w-6 h-8' />
                </a>
            </div>

            <div className='my-5 py-4 bg-gray-200 font-poppins' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-1'>
                    <GoLocation />
                    <span>Stockholm, Sweden</span>
                </div>

            </div>
            {/* Email button*/}
            <div className='font-poppins'>
                <button className='bg-blue-300 w-9/12 rounded-full py-2 px-5 my-2 focus:outline-none' onClick={() => window.open('mailto:sinemark1@gmail.com')}>Contact Me</button>
                <button className='bg-gradient-to-r from-cyan-200 to-orange-200 w-9/12 rounded-full py-2 px-5 my-2'>Theme</button>

            </div>


        </div>

    )
}

export default Sidebar