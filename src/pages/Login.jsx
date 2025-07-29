import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
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
    setError("");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate(data.redirectTo);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
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
          Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-4">
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
            className="w-full bg-[#D40057] text-white py-2 rounded-lg hover:bg-[#b0004b] transition mt-2"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex justify-end">
            <p
              onClick={handleForgotPassword}
              className="text-sm text-[#D40057] cursor-pointer mt-5"
            >
              Forgot Password?
            </p>
          </div>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#D40057] font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
