import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Allow sending cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data; // { message, redirectTo }
  } catch (error) {
    return { error: error.response?.data?.error || "Something went wrong" };
  }
};

// Login API
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/login", userData);
    return response.data; // { message, userId, token }
  } catch (error) {
    return { error: error.response?.data?.error || "Invalid credentials" };
  }
};

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post("/contact-us", formData);
    return response.data; // { message, id }
  } catch (error) {
    return { error: error.response?.data?.error || "Failed to submit form" };
  }
};

// Function to verify JWT token stored in HTTP-only cookies
export const verifyToken = async () => {
  try {
    const response = await api.get("/verify-token");
    return response.data; // { message, userId }
  } catch (error) {
    return { error: error.response?.data?.error || "Unauthorized" };
  }
};

// Reset Password API
export const resetPassword = async (email, newPassword) => {
  try {
    const response = await api.post("/reset-password", {
      email,
      password: newPassword,
    });
    return response.data; // { message: "Password updated successfully" }
  } catch (error) {
    return { error: error.response?.data?.error || "Failed to reset password" };
  }
};

// Fetch Admin Data (Users & Feedbacks)
export const fetchAdminData = async () => {
  try {
    const response = await api.get("/admin");
    return response.data; // { users: [...], feedbacks: [...] }
  } catch (error) {
    throw error.response?.data?.message || "Error fetching admin data.";
  }
};

// update role
export const updateUserRole = async (userId, isAdmin) => {
  try {
    const response = await api.put(
      `/api/users/${userId}/role`,
      { isAdmin: Boolean(isAdmin) }, // Ensure it's a boolean
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete Feedback API
export const handleDeleteFeedback = async (id, setFeedbacks) => {
  try {
    await api.delete(`/feedbacks/${id}`);
    setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((fb) => fb.id !== id));
  } catch (error) {
    console.error(
      "Error deleting feedback:",
      error.response?.data?.error || error.message
    );
  }
};
