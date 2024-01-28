import { Outlet } from "react-router-dom"
import MainHeader from "../MainHearder"

const MainLayOut = () => {
  return (
    <main className='min-h-screen max-w-[1450px] mx-auto relative'>
        <MainHeader />
        <div className=' min-h-[95vh] w-full p-3 lg:p-4 mt-20'>
          <Outlet />
        </div>
    </main>
  )
}

export default MainLayOut