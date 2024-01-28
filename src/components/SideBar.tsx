import { NavLinks } from "../constens";
import { NavLink , useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col justify-start items-center gap-4 w-1/6 fixed top-14 left-0">
        <div className="flex flex-col gap-4 w-full mt-5 p-2">
          {NavLinks.map((link, index) => {
            return (
              <Button 
              key={index} 
              asChild
              variant={location.pathname === link.path ? "default" : "ghost"}
              className="w-full font-bold flex justify-start"
              
              >
                <NavLink
                to={link.path}
                className=" hover:opacity-80"
                
                >
                  {link.name}
                </NavLink>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
