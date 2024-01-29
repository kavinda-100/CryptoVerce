import Accordion from "@/sections/AccordionSection";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";

const Home = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-3">
      <Hero />
      <div className="w-full p-3 lg:p-4">
        <Testimonial />
      </div>
      <div className="w-full p-3 lg:p-4">
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
