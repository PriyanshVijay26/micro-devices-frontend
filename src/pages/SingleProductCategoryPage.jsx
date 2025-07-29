import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Footer, Navbar } from "../components";
import ProductsCard from "../components/ProductsCard";

const SingleProductCategoryPage = () => {
  const { title } = useParams(); // Get raw title from URL
  const navigate = useNavigate();

  const formattedTitle = title
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/^./, (char) => char.toUpperCase()); // Capitalize only the first letter

  const { singleCategoryDetails, products } = useAppContext(); // Get categories & products from context

  // Find the category that matches the formatted title
  const categoryIndex = singleCategoryDetails.findIndex(
    (cat) => cat.title.toLowerCase() === formattedTitle.toLowerCase()
  );

  const category = singleCategoryDetails[categoryIndex];

  // Get products of the selected category
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.title.toLowerCase()
  );

  // Get next category (for "Explore" button)
  const nextCategory =
    singleCategoryDetails[(categoryIndex + 1) % singleCategoryDetails.length];

  // ml-2 sm:ml-4 md:ml-6 lg:ml-12
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[calc(100vw-320px)] h-auto lg:h-screen w-full px-4 lg:px-5">
        {/* Text Section */}
        <div className="w-[300px] md:w-[700px] lg:max-w-[50%] flex flex-col items-center md:items-start justify-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-semibold text-gray-900 mt-20 lg:mt-0 text-center md:text-left">
            {category.title}
          </h1>
          <p className="text-lg text-gray-700 mt-4 lg:mt-10 md:ml-5 lg:ml-[110px] text-left">
            {category.desc}
          </p>
        </div>

        {/* Image Section (Fixed) */}
        <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Outer Wrapper (Non-Rotating) */}
          <div className="relative flex items-center justify-center">
            {/* Rotating Border Layer (Clockwise) */}
            <div
              className="absolute w-[240px] h-[240px] md:w-[310px] md:h-[310px] lg:w-[360px] lg:h-[360px] 
      rounded-full border-4 border-dashed border-[#ff86b7] 
      animate-[spin_50s_linear_infinite]"
            ></div>

            {/* Inner Rotating Border (Anti-clockwise) */}
            <div
              className="absolute w-[230px] h-[230px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] 
  rounded-full border-2 border-dotted border-[#ff86b7] 
  animate-spinReverse"
            ></div>

            {/* Static Image (Centered inside the Border) */}
            <img
              src={category.img}
              alt={category.title}
              className="w-[220px] h-[220px] md:w-[290px] md:h-[290px] lg:w-[340px] lg:h-[340px] 
      object-cover rounded-full relative"
            />
          </div>
        </div>
      </div>

      {/* Category Benefits */}
      {category.benefits && (
        <div className="flex w-full max-w-6xl mx-auto py-20 text-center md:text-left justify-between items-center gap-6">
          {/* Left Content (50% Width) */}
          <div className="w-1/2">
            <p className="text-xs text-[#D40057]">BENEFITS</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {category.benefits.title}
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              {category.benefits.desc}
            </p>
          </div>

          {/* Right Content (50% Width) */}
          <div className=" border p-4 bg-gray-100 flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {category.title}
            </h1>
            <p className="text-sm text-gray-700 text-center my-2">
              Need to enquire about this category?
            </p>
            <Link
              className="px-4 py-2 bg-[#D40057] text-white text-xs font-bold rounded-lg shadow-md hover:bg-[#B00047] transition"
              to="/contact-us"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="w-full max-w-[95%] lg:max-w-[calc(100%-320px)] mx-auto my-10 px-4">
        <p className="text-xs text-[#D40057] my-5 text-center md:text-left">
          PRODUCTS
        </p>
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {categoryProducts.map((product, index) => (
              <ProductsCard
                key={index}
                img={product.img}
                title={product.title}
                desc={product.desc}
                category={product.category}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No products available.
          </p>
        )}
      </div>

      {/* Explore Next Category */}
      <div className="flex flex-col justify-center py-20 px-4 lg:items-end md:mr-6 lg:mr-[160px] text-center md:text-right">
        <p className="text-xs text-[#D40057]">EXPLORE MORE</p>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
          Next: <br />
          {nextCategory.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-6 my-5 justify-center md:justify-end">
          <button
            onClick={() =>
              navigate(
                `/product-category/${nextCategory.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`
              )
            }
            className="px-3 py-2 bg-[#D40057] text-white text-xs font-bold rounded-lg shadow-md hover:bg-[#B00047] transition"
          >
            LEARN MORE
          </button>
          <button
            onClick={() => navigate("/products")}
            className="px-3 py-2 bg-[#D40057] text-white text-xs font-bold rounded-lg shadow-md hover:bg-[#B00047] transition"
          >
            BACK TO PRODUCTS
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProductCategoryPage;
