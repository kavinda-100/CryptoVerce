import { Outlet } from "react-router-dom"
import MainHeader from "../MainHearder"
import Footer from "../Footer"

const MainLayOut = () => {
  return (
    <main className='min-h-screen max-w-[1450px] mx-auto'>
        <MainHeader />
        <div className=' w-full mt-16'>
          <Outlet />
        </div>
        <Footer />
    </main>
  )
}

export default MainLayOut