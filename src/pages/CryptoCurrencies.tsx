import CryptoSection from "@/sections/CryptoSection"
import { Gem } from "lucide-react"
import { useEffect } from "react";

const CryptoCurrencies = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full mt-5 flex flex-col">
    <div className="flex justify-start lg:mx-6">
      <h1 className="font-bold font-montserrat text-lg lg:text-xl flex gap-3 text-balance justify-center items-center">
        Crypto Currencies
        <span className="hidden lg:flex"><Gem /></span>
      </h1>
      
    </div>
    <CryptoSection isHome={false} amount="100"/>
  </div>
  )
}

export default CryptoCurrencies
