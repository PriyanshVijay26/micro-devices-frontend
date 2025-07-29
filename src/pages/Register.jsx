import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    navigate("/");
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors before a new submission
    const result = await registerUser(formData);
    if (result.error) {
      // If the result object has an 'error' property, it's a failure
      setError(result.error);
    } else {
      // Otherwise, it's a success
      navigate("/login");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 text-xl hover:text-red-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D40057]"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D40057]"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D40057] pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D40057] text-white py-2 rounded-lg hover:bg-[#b0004b] transition"
          >
            Register
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D40057] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;