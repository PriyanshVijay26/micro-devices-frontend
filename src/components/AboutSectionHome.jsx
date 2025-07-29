import { NavLink } from "react-router-dom";
import img from "../assets/about.jpg";

const AboutSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-100 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
        About Us
      </h2>

      {/* Parent Container for Image & Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[130px] w-full">
        {/* Image Section */}
        <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[50%] lg:ml-[160px]">
          <img
            src={img}
            alt="About Us"
            className="w-[420px] h-[420px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <article className="text-center lg:text-left w-full sm:w-[80%] md:w-[50%] lg:w-[50%] lg:mr-[160px]">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Biometric Solutions Streamline Identity Management
          </h3>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            We provide high-quality biometric solutions, ensuring security and
            efficiency for businesses and individuals worldwide.
          </p>
          <NavLink to="about-us">
            <button className="mt-6 px-6 py-3 bg-[#D40057] text-white text-sm font-bold rounded-lg shadow-md hover:bg-[#B00047] transition">
              Learn More
            </button>
          </NavLink>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
