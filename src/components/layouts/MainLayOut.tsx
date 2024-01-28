import { Outlet } from "react-router-dom"

const MainLayOut = () => {
  return (
    <main className='min-h-screen max-w-[1450px] mx-auto relative'>
        <h1>Header</h1>
        <div className=' min-h-[95vh]'>
          <Outlet />
        </div>
    </main>
  )
}

export default MainLayOut