import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  
  return (

    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-24  md:px-32 overflow-hidden '>
        <div className='h-full col-span-12 text-base text-center lg:col-span-3 p-4 overflow-hidden'>
          <Sidebar />
        </div>
        <div className='lg:col-span-9 my-7  bg-slate-900 dark:bg-gradient-to-r from-orange-200 to-gray-400 rounded-3xl col-span-12 overflow-hidden shadow-md shadow-black'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>

  )
}

export default MyApp
