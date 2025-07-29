import { Link } from "react-router-dom";

const ProductCategoryCard = ({ img, title, desc, link }) => {
  return (
    <Link to={link} className="group">
      <div className="flex flex-col lg:flex-row items-center border border-gray-300 p-6 rounded-lg bg-white transition-all duration-300 ease-in-out gap-4 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] lg:w-[560px] cursor-pointer h-[260px] md:h-[280px] lg:h-[170px] overflow-hidden">
        {/* Image Section */}
        <div className="flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:scale-110 flex items-center">
          <img src={img} alt={title} className="w-24 h-24 object-contain" />
        </div>

        {/* Text Section (Vertically Centered for Large Screens) */}
        <div className="text-left w-full flex flex-col justify-center lg:justify-center flex-grow">
          <h1 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#D40057]">
            {title}
          </h1>
          <p className="text-gray-600 text-sm w-full break-words">
            {desc.length > 150 ? (
              <>
                {desc.substring(0, 150)}...
                <span className="text-[#D40057] font-semibold cursor-pointer">
                  {" "}
                  read more
                </span>
              </>
            ) : (
              desc
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
