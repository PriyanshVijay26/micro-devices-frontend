import { Navbar, Footer, Hero } from "../components";
import img from "../assets/who_are_we.webp";
import Logo from "../assets/MicroID_Logo-Colour_Horizontal.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About Us */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mt-20 pt-12 text-center lg:text-left lg:ml-[160px]">
        About Us
      </h1>

      <section className="max-w-7xl mx-auto px-6 py-8 md:py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-[80%] md:w-1/2">
          <img src={Logo} alt="Who We Are" className="w-full" />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:self-start">
          <p className="text-gray-600 leading-relaxed text-lg py-2">
            <strong className="text-gray-900">
              Micro<span className="text-[#d40057]">ID</span>{" "}
            </strong>{" "}
            Biometrics Pvt Ltd, is in the business of providing identification
            and tracking solutions, with Pan India customer base from diverse
            segments in the security industry.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg py-2">
            {" "}
            MIB’s Headquarter is located in New Delhi with dedicated channel
            partners in West and South India.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg py-2">
            {" "}
            We have a rich history of working with overseas suppliers &
            manufacturers as Pan India preferred distributor and well known for
            having long term relationship with its esteemed customers.{" "}
          </p>{" "}
          <p className="text-gray-600 leading-relaxed text-lg py-2">
            We are one of the largest suppliers of Iris and Fingerprint scanners
            for Aadhar enrolment, banking and cybersecurity.
          </p>{" "}
          <p className="text-gray-600 leading-relaxed text-lg py-2">
            MicroID has strategic alliances with the experts in the Industry and
            is consistently developing its market intelligence and approach to
            move from being an emerging to a being a leader in the focused
            business areas.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
