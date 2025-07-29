import { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Navbar } from "../components";
import { submitContactForm } from "../utils/api";

{
  /** useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);  
  we will use this in the admin page
  */
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const api_url = import.meta.env.VITE_API_URL;

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    setIsSubmitting(true); // Set button to "Sending..."
    setSuccessMessage(""); // Clear previous success message

    try {
      const response = await submitContactForm(formData); // Use API function

      console.log("Form Submitted Successfully", response);

      setSuccessMessage("Your response has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear input fields

      // Hide the success message after 1 second
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false); // Reset button text
    }
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row w-full h-screen p-8">
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-2 border rounded-md w-2/4 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-2 border rounded-md w-3/4 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`p-2 border rounded-md w-full ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="4"
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#D40057] text-white p-2 px-3 rounded-md hover:bg-[#B00047] w-fit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Success Message Container with Fixed Height */}
          <div className="h-6 flex items-center">
            {successMessage && (
              <p className="text-green-600 text-sm font-semibold">
                {successMessage}
              </p>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex w-full md:w-1/2 h-full items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.62202948185495!2d77.21904338779946!3d28.71821806468477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe0c7b884163%3A0xdc6ca2f84a0d33!2sGandhi%20Vihar%2C%20Gopalpur%20Village%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1741620817626!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contact;
