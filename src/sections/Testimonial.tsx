import Icon from "@/components/Icon"
import TestimonialCard from "@/components/TestimonialCard"
import { Testimonials } from "@/constens"


const Testimonial = () => {
  return (
    <div className="w-full">
      <h1 className="text-xl lg:text-2xl text-center font-bold text-gray-800 dark:text-gray-400">Testimonial</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4 xl:gap-5 my-5">
        {
          Testimonials.map((testimonial, index) => (
            <TestimonialCard 
            key={index}
            name={testimonial.name}
            description={testimonial.description}
            icon={<Icon name={testimonial.iconName} />}
            />
          ))
        }

      </div>

    </div>
  )
}

export default Testimonial