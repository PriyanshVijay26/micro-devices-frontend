import { IoMdDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SupportsCategoryCard = ({ title, desc, rows }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Adjust if using sessionStorage
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT (if applicable)
        setUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleDownload = (filename) => {
    if (!user) {
      navigate("/login");
      return;
    }
    // console.log(filename, "filename");

    if (!filename) {
      // console.error("Error: Filename is null or undefined!", filename);
      alert("Error: No filename provided.");
      return;
    }

    // console.log("Attempting to download:", filename);
    // window.location.href = `/downloads/${filename}`;
    // window.open(`../../downloads/${filename}`);

    const link = document.createElement("a");
    link.href = `../../downloads/${filename}`;
    link.download = filename; // Specify the desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="border border-gray-300 p-6 rounded-lg bg-white transition-all duration-300 ease-in-out gap-4 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-full max-w-[90%] sm:max-w-[450px] md:max-w-[480px] lg:max-w-[560px] mx-auto">
      {/* Title Section */}
      <h1 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left text-[#D40057]">
        {title}
      </h1>
      <p className="text-black text-center md:text-left mb-4">{desc}</p>

      {/* Table Section */}
      <div className="w-full">
        <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2 font-semibold text-gray-900 whitespace-nowrap">
                  {row.label}
                </td>
                <td className="px-4 py-2 text-gray-700 break-words flex items-center justify-between">
                  {row.value}
                  {row.filename && index % 2 === 0 && (
                    <IoMdDownload
                      className="text-[#d40057] text-xl cursor-pointer"
                      onClick={() => handleDownload(row.filename)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportsCategoryCard;
