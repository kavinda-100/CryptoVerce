// Note: Main Layout Component
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SideBar from '../SideBar'
import Footer from '../Footer'

const MainLayOut = () => {
  return (
    <main className='min-h-screen max-w-[1450px] mx-auto relative'>
        <Header />
        <div className='flex lg:gap-3 w-full min-h-[95vh]'>
          <div className='hidden lg:flex w-1/6 border-r-2 border-gray-200 mt-16'>
            <SideBar />
          </div>
          <div className='w-full lg:w-5/6 p-3 lg:p-4 mt-20'>
            <Outlet />
            <Footer />
          </div>
        </div>
    </main>
  )
}

export default MainLayOut