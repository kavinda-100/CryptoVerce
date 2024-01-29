import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AccordionData } from "@/constens";

const AccordionSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-xl lg:text-2xl text-center font-bold text-gray-800 dark:text-gray-400 text-balance">
        Frequently Ask Questions
      </h1>

      {/* Accordion */}
        <Accordion 
        type="single" 
        collapsible 
        className="w-full">
          {AccordionData.map((item) => (
            <AccordionItem key={item.id} value={`item${item.id}`}>
              <AccordionTrigger>
                <span>{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="py-2">
                  {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  );
};

export default AccordionSection;
