import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Footer, Navbar, ProductsCard } from "../components";
import { useEffect, useState } from "react";

// Function to convert category names to slugs
const formatUrl = (text) => text.toLowerCase().replace(/\s+/g, "-");

const SingleProductPage = () => {
  const { category_list, products } = useAppContext();
  const { productSlug } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Convert category list into slug format
  const categorySlugs = category_list.reduce((acc, category) => {
    acc[formatUrl(category)] = category; // Map slug -> original category
    return acc;
  }, {});

  // Extract category from URL
  const slugParts = productSlug.split("-");
  let matchedCategory = "";

  for (let i = slugParts.length; i > 0; i--) {
    const possibleSlug = slugParts.slice(0, i).join("-");
    if (categorySlugs[possibleSlug]) {
      matchedCategory = categorySlugs[possibleSlug];
      break;
    }
  }
  // Extract the title from the slug
  const formattedTitle = formatUrl(
    slugParts.slice(matchedCategory.split(" ").length).join(" ")
  );

  // Find current product & filter other products
  useEffect(() => {
    if (!matchedCategory) return;

    const product = products.find(
      (p) =>
        formatUrl(p.category) === formatUrl(matchedCategory) &&
        formatUrl(p.title) === formattedTitle
    );

    setCurrentProduct(product || null);

    // Filter products that belong to the same category but exclude the matching title
    const filtered = products.filter(
      (p) =>
        formatUrl(p.category) === formatUrl(matchedCategory) &&
        formatUrl(p.title) !== formattedTitle
    );

    setFilteredProducts(filtered);
  }, [matchedCategory, formattedTitle, products]);

  return (
    <>
      <Navbar />
      {/* Main Product Display Section */}
      {currentProduct && (
        <div>
          {/* Main Product Display Section (Only This Should Be Flex) */}
          <div className="flex flex-col lg:flex-row gap-8 lg:min-h-screen">
            {/* Left Section */}
            <div className="flex-1 lg:ml-[160px] text-center sm:text-center md:text-left lg:mt-[150px] mx-auto md:ml-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D40057] capitalize mt-20 md:pt-12 lg:pt-0 ">
                {currentProduct.title}
              </h1>
              <p className="text-gray-600 text-sm mt-10 capitalize">
                Product Category: <br />
                <span className="text-gray-900 text-xl font-semibold block mt-2">
                  {currentProduct.category}
                </span>
              </p>
              <p className="mt-5 text-gray-700">{currentProduct.desc}</p>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex flex-col justify-center items-center lg:mr-[160px] md:mt-0 lg:mt-0">
              {/* Big Image Placeholder */}
              <div className="w-full h-80 flex justify-center items-center">
                <img
                  src={currentProduct.img}
                  alt={currentProduct.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/** small images */}
            </div>
          </div>

          {/* Overview Section 
          <div className="mt-10 mx-auto md:ml-10 lg:ml-[160px]">
            <div className="md:flex-row gap-8 text-center md:text-left">
              <p className="font-semibold text-[#D40057]">Overview</p>
              <p className="text-lg">Product details</p>
            </div>
          </div>
          */}

          {/* Explore More Products Section (only if there are filtered products) */}
          {filteredProducts.length > 0 && (
            <div className="my-16 lg:ml-[160px]">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 py-7 text-center sm:text-center md:text-left mx-auto md:ml-8 lg:ml-0">
                Explore More
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {filteredProducts.map((product, index) => (
                  <ProductsCard
                    key={index}
                    img={product.img}
                    title={product.title}
                    desc={product.desc}
                    category={product.category || "Unknown"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleProductPage;
