import { Link } from "react-router-dom";
import logo from "../assets/microid_logo.png";
import footer_img from "../assets/footer_img.png";
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="lg:h-[550px] bg-gray-900 text-white py-12 flex flex-col relative bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${footer_img})`, backgroundSize: "auto" }}
    >
      {/* Main Footer Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mx-[160px] mx-6 flex-grow gap-y-8">
        {/* Left Section (Button & Address) */}
        <div className="flex flex-col gap-y-3 lg:gap-y-6 items-center md:items-start">
          <Link to="/contact-us">
            <button className="px-6 py-3 bg-[#D40057] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#B00047] transition">
              Get In Touch
            </button>
          </Link>
          <p className="text-sm text-gray-300 text-center md:text-left">
            307, Bhandari House 91, <br />
            Nehru Place, New Delhi <br />
            110019
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:gap-x-16 gap-y-8 w-full mb-8 lg:w-auto">
          {/* Site Map */}
          <div className="text-sm text-center md:text-left">
            <h1 className="font-bold mb-3 text-lg text-[#D40057]">Explore</h1>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#D40057] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#D40057] transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-[#D40057] transition">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-[#D40057] transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Footer Section (Copyright & Policies) */}
      <div className="lg:mx-[160px] border-t border-gray-600 pt-3 pb-2 mt-auto">
        <div className="flex flex-col md:flex-row justify-end items-center mx-6 text-sm text-gray-400 gap-y-4">
          <p>@MicroID</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
