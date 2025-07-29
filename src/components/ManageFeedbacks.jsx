const ManageFeedbacks = ({ feedbacks, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Feedbacks</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <tr key={feedback.id}>
                <td className="border p-2">{feedback.id}</td>
                <td className="border p-2">{feedback.name || "N/A"}</td>
                <td className="border p-2">{feedback.email}</td>
                <td className="border p-2">{feedback.message}</td>
                <td className="border p-2">
                  {new Date(feedback.created_at).toLocaleDateString()}
                </td>
                <td className="border p-2">
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => onDelete(feedback.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4">
                No feedbacks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFeedbacks;
