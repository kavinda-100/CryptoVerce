import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full lg:min-h-dvh flex flex-col justify-center items-center gap-8 lg:bg-image bg-gradient-to-r from-violet-700 to-purple-500 py-5">
      <div className="flex flex-col gap-2 justify-center items-center font-montserrat font-bold text-center  text-wrap lg:text-pretty lg:text-white text-lg drop-shadow-2xl p-3">
        <h1 className="text-xl lg:text-4xl bg-gradient-to-br from-purple-100 to-violet-500 lg:bg-gradient-to-r lg:from-violet-500 lg:to-purple-500 text-transparent bg-clip-text brightness-125">
          CryptoVerce
        </h1>
        <h3 className="font-semibold font-palanquin brightness-125 italic lg:not-italic">
          Your All-in-one crypto currency platform
        </h3>
        <h5 className=" text-md font-semibold font-palanquin brightness-125 italic lg:not-italic">
          Dominate and Simplify your crypto journey with CryptoVerce
        </h5>
      </div>
      <div className="flex justify-start items-start gap-3">
        <Button 
        asChild
        className="bg-gradient-to-r from-violet-700 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 brightness-125">
          <Link to="/dashboard">Get Started</Link>
        </Button>
        <Button 
        asChild
        variant="outline" 
        className=" brightness-125">
          <Link to="/dashboard/news">News</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
