import { useEffect, useState } from "react";
import { fetchAdminData, updateUserRole } from "../utils/api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetchAdminData();
      setUsers(response.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  const handleRoleChange = async (userId, currentRole) => {
    const newRole = currentRole === 0 ? 1 : 0; // Toggle isAdmin

    try {
      await updateUserRole(userId, newRole);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isAdmin: newRole } : user
        )
      );
    } catch (error) {
      console.error("Failed to update role:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              const roleNumber = Number(user.isAdmin);
              return (
                <tr key={user.id}>
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">
                    {roleNumber === 1 ? "Admin" : "User"}
                  </td>
                  <td className="border p-2">
                    <div className="justify-between items-center">
                      <button
                        className="text-blue-500"
                        onClick={() => handleRoleChange(user.id, roleNumber)}
                      >
                        {roleNumber === 1
                          ? "Demote to User"
                          : "Promote to Admin"}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
