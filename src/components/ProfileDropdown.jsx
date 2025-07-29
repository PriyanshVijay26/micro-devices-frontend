import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Payload = token.split(".")[1]; // Get payload
        const decodedPayload = JSON.parse(atob(base64Payload));
        // console.log("Decoded Token:", decodedPayload); // Debugging

        if (decodedPayload?.name) {
          setUser({ name: decodedPayload.name }); // No formatting, use as is
        } else {
          console.warn("No name found in token");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div
      className="relative flex flex-col items-center text-2xl cursor-pointer hover:text-[#D40057] mr-6 md:mr-8 lg:mr-12"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Profile Icon */}
      <div className="cursor-pointer p-2 rounded-full">
        <CgProfile className="text-[#d40057] w-10 h-10 md:w-7 md:h-7" />
      </div>

      {/* Display Name Below Icon */}
      {user && (
        <p className="text-sm text-gray-700 font-semibold mt-1">{user.name}</p>
      )}

      {/* Dropdown for Medium & Large Screens (Appears on Hover) */}
      <div className="hidden md:block absolute right-0 mt-10 mr-4 w-full">
        {isOpen && (
          <div className="bg-white shadow-md rounded-md p-2 w-20">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-sm bg-red-500 text-white mt-2 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="w-full text-sm bg-[#d40057] text-white mb-2 py-2 rounded"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="w-full text-sm bg-[#d40057] text-white py-2 rounded"
                >
                  Register
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Dropdown for Small Screens (Always Visible in a Row) */}
      <div className="md:hidden mt-2 flex items-center justify-center w-1/2 space-x-2">
        {user ? (
          <>
            <p className="text-center font-semibold text-gray-700">
              {user.name}
            </p>

            <button
              onClick={handleLogout}
              className="w-24 text-sm bg-[#d40057] text-white py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="w-24 text-sm bg-[#d40057] text-white p-1 rounded"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-24 text-sm bg-[#d40057] text-white p-1 rounded"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
