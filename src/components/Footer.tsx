import { logo } from "@/assets/images"


const Footer = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 my-5">
        <div className="flex gap-3 justify-center items-center">
            <img src={logo} alt="logo" className="w-7 h-7 lg:w-10 lg:h-10" />
            <h1 className="text-xl font-bold">CryptoVerce</h1>
        </div>
        <div>
            <p>&copy;{" "}{new Date().getFullYear()}{" "} All Right Reserve</p>
        </div>
    </footer>
  )
}

export default Footer
