import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ziad Kenawy",


    image: "/images/testimonials/kenawy.jpg",

  },
  {
    id: 2,
    name: "Mohamed Ramy",


    image: "/images/testimonials/ramy4.jpg",

  },
  {
    id: 3,
    name: "Youssef Elmonier",


    image: "/images/testimonials/youssef.jpg",

  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Team Memebr"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-slate-800   p-6 shadow-lg flex flex-col justify-center items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto mb-4 h-28 w-28 rounded-full"
              />
              <h3 className="mb-2 text-xl font-semibold ">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.designation}</p>
              <p className="mt-4 text-gray-800">{testimonial.content}</p>
              <div className="mt-4 flex justify-center">
                {Array.from({ length: testimonial.star }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-yellow-500 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2L6 20M12 2l6 18M6 20h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">{/* SVG code */}</div>
      <div className="absolute bottom-5 left-0 z-[-1]">{/* SVG code */}</div>
    </section>
  );
};

export default Testimonials;
