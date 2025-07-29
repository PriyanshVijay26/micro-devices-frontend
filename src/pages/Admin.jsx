import { useState, useEffect } from "react";
import {
  FaUsers,
  FaComments,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ManageFeedbacks, ManageUsers } from "../components";
import { fetchAdminData, handleDeleteFeedback } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const navigate = useNavigate();

  useEffect(() => {
    const getAdminData = async () => {
      try {
        const data = await fetchAdminData();
        setUsers(data.users);
        setFeedbacks(data.feedbacks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getAdminData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteFeedbackClick = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?"))
      return;
    try {
      await handleDeleteFeedback(id, setFeedbacks);
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="flex h-screen relative">
      {/* Mobile Menu Button (Hidden when sidebar is open) */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 w-64 bg-gray-900 text-white p-5 space-y-6 z-40 h-full 
          ${isSidebarOpen ? "block" : "hidden"} md:block transition-all`}
      >
        {/* Close Button (for mobile) */}
        {isSidebarOpen && (
          <button
            className="md:hidden absolute top-4 right-4 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        )}

        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        <nav className="space-y-4">
          <button
            className={`w-full flex items-center p-3 rounded ${
              activeTab === "feedbacks" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              setActiveTab("feedbacks");
              setIsSidebarOpen(false); // Close sidebar on selection (mobile)
            }}
          >
            <FaComments className="mr-2" /> Manage Feedbacks
          </button>
          <button
            className={`w-full flex items-center p-3 rounded ${
              activeTab === "users" ? "bg-gray-700" : ""
            }`}
            onClick={() => {
              setActiveTab("users");
              setIsSidebarOpen(false);
            }}
          >
            <FaUsers className="mr-2" /> Manage Users
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center p-3 rounded text-red-500"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold ml-20 md:ml-0">
            Admin Dashboard
          </h1>
        </header>

        {/* Dynamic Main Content */}
        <main className="p-6 flex-1 bg-gray-100">
          {activeTab === "dashboard" && <p>Welcome to the Admin Dashboard!</p>}
          {activeTab === "feedbacks" && (
            <ManageFeedbacks
              feedbacks={feedbacks}
              onDelete={handleDeleteFeedbackClick}
            />
          )}
          {activeTab === "users" && <ManageUsers />}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
