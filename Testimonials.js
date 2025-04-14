export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Working with this team was a game-changer for our business. Our new website has helped us attract more customers and grow our revenue.",
      author: "Jane Smith",
      role: "CEO, TechCorp",
    },
    {
      content:
        "The website they built for us is not only beautiful but also performs exceptionally well. Our conversion rates have increased by 30%.",
      author: "John Doe",
      role: "Marketing Director, StartupX",
    },
    {
      content:
        "I was impressed by their attention to detail and commitment to quality. They delivered exactly what we needed, on time and on budget.",
      author: "Sarah Johnson",
      role: "Founder, CreativeStudio",
    },
  ]

  return (
    <div id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our clients say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it. Here's what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="text-gray-600 italic mb-4">"{testimonial.content}"</div>
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
