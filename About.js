export default function About() {
  return (
    <div id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We build websites that work for you
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team of experts is dedicated to creating beautiful, functional websites that help your business grow.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                We're on a mission to make the web better by creating websites that are not only visually stunning but
                also functional, accessible, and optimized for performance.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
              <p className="mt-2 text-base text-gray-500">
                We envision a web where every business, regardless of size, has access to high-quality web design and
                development services that help them achieve their goals.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Values</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe in transparency, honesty, and delivering on our promises. We work closely with our clients to
                ensure their needs are met and their expectations are exceeded.
              </p>
            </div>
            <div className="relative">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Our Team</h3>
              <p className="mt-2 text-base text-gray-500">
                Our team of designers, developers, and digital marketers has years of experience creating websites that
                drive results for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
