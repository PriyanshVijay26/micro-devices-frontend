import { Link } from "react-router-dom";

const ProductsCard = ({ img, title, desc, category }) => {
  const formatUrl = (text) =>
    typeof text === "string" ? text.toLowerCase().replace(/\s+/g, "-") : "";

  const productUrl = `/product/${formatUrl(category)}-${formatUrl(title)}`;

  // Truncate description if it exceeds 20 characters
  const truncatedDesc = desc.length > 50 ? `${desc.substring(0, 50)}...` : desc;

  return (
    <Link
      to={productUrl}
      className="group border border-gray-300 p-4 rounded-lg bg-white transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col items-center text-center w-[280px] h-[300px] overflow-hidden cursor-pointer"
    >
      <img
        src={img}
        alt={title}
        className="w-[180px] h-[180px] object-contain rounded-md"
      />
      <h1 className="text-lg font-semibold mt-3 mb-2 group-hover:text-[#D40057] truncate w-full">
        {title}
      </h1>
      <p className="text-gray-600 text-sm w-full overflow-hidden text-ellipsis">
        {truncatedDesc}
        {desc.length > 50 && (
          <span className="text-[#D40057] font-semibold ml-1">read more</span>
        )}
      </p>
    </Link>
  );
};

export default ProductsCard;
