import { MainNavLinks } from "@/constens";
import { ModeToggle } from "./ModeTogole";
import { NavLink, useLocation } from "react-router-dom";
import { AlignRight } from "lucide-react";

// Shad-cn UI Imports
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { logo } from "@/assets/images";

const MainHeader = () => {
  return (
    <>
      {/* header nav */}
      <header className="flex justify-between items-center p-2 lg:p-4 bg-background fixed top-0 left-0 z-10 w-full shadow-sm">
        <div className="flex gap-3 justify-center items-center">
          {/* className=" w-[200px] h-8 lg:w-10 lg:h-10" */}
          <img src={logo} alt="logo" className=" w-7 h-7 lg:w-10 lg:h-10" />
          <h1 className="text-xl font-bold">CryptoVerce</h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
            {/* NavLinks */}
          <div className="hidden lg:flex gap-4 justify-center items-center">
            {MainNavLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant={location.pathname === link.path ? "default" : "ghost"}
              >
                <NavLink to={link.path} className="text-sm font-semibold">
                  {link.name}
                </NavLink>
              </Button>
            ))}
          </div>
          {/* Mode */}
          <div className="hidden lg:flex">
            <ModeToggle />
          </div>
          {/* mobile nav */}
          <div className="flex lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

const MobileNav = () => {
  const location = useLocation();
  return (
    <header className="bg-background">
      <Sheet>
        <SheetTrigger>
          <AlignRight />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex justify-between items-center p-2">
              <div className="flex gap-3 justify-center items-center">
                <img src={logo} alt="logo" className="w-5 h-5" />
                <span className="text-md font-bold">CryptoVerce</span>
              </div>
              <ModeToggle />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4">
            {MainNavLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant={location.pathname === link.path ? "default" : "ghost"}
              >
                <NavLink to={link.path} className="text-sm font-semibold">
                  {link.name}
                </NavLink>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
