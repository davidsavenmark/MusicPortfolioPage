import { ImSpotify, ImYoutube } from 'react-icons/im'
import { SiApplemusic } from 'react-icons/si'
import { GoLocation } from 'react-icons/go'
import {useTheme} from 'next-themes'
import { useState, useEffect } from 'react'



const Sidebar = () => {
    const {theme, setTheme} = useTheme()

    const changeTheme = ()=>{
        setTheme(theme ==="light" ? "dark" : "light");
    };

    const [activeButton, setActiveButton] = useState<string>('')

    useEffect(()=> {
        if(theme)
        {
        if(theme ==='light')setActiveButton('Light Theme')
        else if(theme ==='dark')setActiveButton('Dark Theme')

        }


    },[theme])

    return (
        <>
            <img
                src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/277350139_338827658285184_8942894879981920547_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hRToecrtXy4AX-qwpj5&_nc_ht=scontent-arn2-1.xx&oh=00_AT9C1uowSNSijtji6DMSUpgA3iN1oM9kscyUIe1c3byg7A&oe=6312AE36"
                alt="user-avatar"
                className='w-32 h-32 rounded-full mx-auto shadow-lg shadow-black'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-aboreto text-white dark:text-black'>
                <span>Sinemark </span>
            </h3>
            <p className='px-2 py-1 my-3 font-poppins text-white dark:text-black'>
                Artist & Musician
            </p>

            <a href="https://open.spotify.com/album/4k2IYJ8yKjtFiZjLpviF37?si=3i8_IvRmT8yb8C_wT_9ipA&fbclid=IwAR1KfxEiuK99QmYyNuJvFr52_VUa_mku8urVRQHmStPqL2oAuxW2JdsqHzc&nd=1" 
            target="_blank" 
            rel="noreferrer">
                <p className='px-2 py-1 my-3 bg-gray-300 opacity-80 rounded-full cursor-pointer font-poppins hover:scale-105 shadow-lg shadow-indigo-300 hover:text-green-600 text-black dark:text-black'>
                    Stream now
                </p>
            </a>

            {/*Socials*/}
            <div>
                <p className='flex items-center m-5 justify-evenly shadow-lg shadow-orange-200 rounded-full'>
                    <a href="https://open.spotify.com/album/4k2IYJ8yKjtFiZjLpviF37?si=3i8_IvRmT8yb8C_wT_9ipA&fbclid=IwAR1KfxEiuK99QmYyNuJvFr52_VUa_mku8urVRQHmStPqL2oAuxW2JdsqHzc&nd=1" 
                    target="_blank" 
                    rel="noreferrer">
                        <ImSpotify className='w-6 h-8 hover:scale-125 text-green-600' />
                    </a>
                    <a href="https://www.youtube.com/watch?v=IotBQAzTMCc&list=PL7T9moZCZP_nkMsW9c2VtL-7JHGmv73LP" 
                        target="_blank" 
                        rel="noreferrer">
                        <ImYoutube className='w-6 h-8 hover:scale-125  text-red-600' />
                    </a>
                    <a href="https://music.apple.com/gb/artist/sinemark/1523764689" 
                       target="_blank" 
                       rel="noreferrer">
                        <SiApplemusic className='w-6 h-8 hover:scale-125 text-red-600' />
                    </a>
                </p>
            </div>

            <div className='my-5 py-4 font-poppins' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-1 text-white dark:text-black'>
                    <GoLocation />
                    <span>Stockholm, Sweden</span>
                </div>
            </div>
            
            {/* Email button*/}
            <div className='font-poppins'>
                <button 
                className='bg-gray-300 opacity-80 w-9/12 
                rounded-full py-1 px-5 my-2 focus:outline-none 
                hover:scale-105 shadow-md shadow-black hover:text-green-600 text-black dark:text-black' 
                onClick={() => window.open('mailto:sinemark1@gmail.com')}>
                    Contact Me
                </button>

                <button onClick={changeTheme} className='bg-gray-300 opacity-80 w-9/12 
                rounded-full py-1 px-5 my-2 focus:outline-none 
                hover:scale-105 shadow-md shadow-black hover:text-green-600 text-black dark:text-black'>
                   {activeButton}
                </button>
            </div>
        </>
    )
}

export default Sidebar