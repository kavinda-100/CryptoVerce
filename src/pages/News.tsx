import NewsSection from "@/sections/NewsSection"
import { Newspaper } from "lucide-react"
import { useEffect } from "react";


const News = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full mt-5 flex flex-col">
    <div className="flex justify-start lg:mx-6">
      <h1 className="font-bold font-montserrat text-lg lg:text-xl flex text-balance gap-3 justify-center items-center">
        Crypto Currencies News
        <span className="hidden lg:flex"><Newspaper /></span>
      </h1>
      
    </div>
    <NewsSection isHome={false}/>
  </div>
  )
}

export default News