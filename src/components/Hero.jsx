function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-white">
      {/* Large MARLN with image fill */}
      <div className="w-full flex justify-center">
        <h1
          data-aos="zoom-in-up"
          className="
            text-[10vw] md:text-[24vw] 
            font-extrabold uppercase tracking-tight 
            bg-clip-text text-transparent bg-[center_10em]
            bg-cover 
            "
          style={{
            backgroundImage: "url('/bgfill.avif')",
            lineHeight: 1,
          }}
        >
          MARLN
        </h1>
      </div>

      {/* Subtitle */}
      <p data-aos="fade-up" className="font-inter mt-8 text-gray-400 text-3xl">
        Driving Business sucess through
        <br />
        <span className="font-inter text-black">
          Innovation, Expertise & Collaboration
        </span>
      </p>

      {/* Call-to-action buttons */}
      <div data-aos="fade-up" data-aos-delay="200" className="mt-8 flex gap-4 justify-center">
        <button className="bg-black text-white px-6 py-3 rounded border-none font-medium hover:bg-gray-900 transition">
          Contact Us
        </button>
        <button className="bg-gray-100 text-black px-6 py-3 rounded border-none font-medium hover:bg-gray-200 transition border border-gray-300">
          Get Demo
        </button>
      </div>
    </section>
  );
}

export default Hero;
