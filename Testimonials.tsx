import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      event: "Sweet 16 Party",
      text: "DJ Livy Liv absolutely KILLED IT at my sweet 16! Everyone was dancing all night and my friends are still talking about it. Best DJ ever! 🎉",
      rating: 5,
      color: "pink"
    },
    {
      name: "Jefferson High School",
      event: "Homecoming Dance",
      text: "We hired DJ Livy Liv for our homecoming dance and the energy was incredible! The music selection was perfect and every student had an amazing time. Highly recommend!",
      rating: 5,
      color: "blue"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            <span className="gradient-text">What People Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear from those who've experienced the magic!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border ${
                testimonial.color === 'pink' ? 'border-pink-500/30' : 'border-blue-500/30'
              } transition-all duration-300 hover:transform hover:scale-105`}
            >
              <Quote className={`absolute top-4 right-4 ${testimonial.color === 'pink' ? 'text-pink-500' : 'text-blue-500'} opacity-20`} size={40} />
              
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${testimonial.color === 'pink' ? 'text-pink-500 fill-pink-500' : 'text-blue-500 fill-blue-500'}`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6">{testimonial.text}</p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-4">
                <p className={`${testimonial.color === 'pink' ? 'text-pink-400' : 'text-blue-400'}`}>
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-3xl border border-pink-500/30">
            <h3 className="mb-4">Ready to create your own amazing experience?</h3>
            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-full transition-all transform hover:scale-105 glow-pink">
              Let's Make It Happen!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
