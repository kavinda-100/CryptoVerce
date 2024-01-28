import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-lg lg:text-xl font-montserrat">Not Found</h1>
      <p className=" text-balance">The page you are looking for does not exist.</p>
      <Button asChild className="my-6">
        <Link to="/" className=" text-balance">Go back to home page</Link>
      </Button>
    </div>
  );
}

export default Missing;