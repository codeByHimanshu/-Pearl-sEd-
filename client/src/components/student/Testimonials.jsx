import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';





function Testimonials() {
    const {dummyTestimonials} = useContext(AppContext)
    console.log(typeof(dummyTestimonials) + " hahahagafgffyfuy");
    
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 animate__animated animate__fadeInDown">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {dummyTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start space-y-4 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex text-yellow-400">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                <span key={i}>☆</span>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
