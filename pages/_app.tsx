import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <div className='grid grid-cols-12 gap-8 px-5 lg:px-48 my-14 sm:px-24 md:px-32 overflow-hidden '>
        <div className='col-span-12 lg:col-span-3 rounded-2xl p-4 text-center'>
          <Sidebar />
        </div>
        <div className='lg:col-span-9 bg-gradient-to-r from-gray-200 to-orange-200 opacity-8 rounded-3xl col-span-12 overflow-hidden shadow-md shadow-black'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
  )
}

export default MyApp
