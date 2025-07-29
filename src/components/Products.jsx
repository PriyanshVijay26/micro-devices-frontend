import { useState } from "react";
import { ProductsCard } from "../components";
import { useAppContext } from "../context/AppContext";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products, category_list } = useAppContext();

  // Filter products based on category selection
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // ml-2 sm:ml-4 md:ml-6 lg:ml-12
  return (
    <>
      {/* Product Categories List */}
      <div className="my-5 lg:my-10 lg:py-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 ml-7 lg:ml-[160px]">
          All Products
        </h1>
      </div>
      <div className="lg:max-w-[calc(100%-320px)] mx-auto w-full border-b border-gray-300 mb-10 pb-5">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between gap-7 mt-10 ml-6 lg:ml-0">
          {category_list.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer text-sm font-semibold transition whitespace-nowrap 
         ${
           selectedCategory === category
             ? "text-[#D40057] font-bold"
             : "text-gray-900 hover:text-[#D40057]"
         }`}
            >
              {category.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full lg:max-w-[calc(100%-290px)] mx-auto my-10 px-4">
        {filteredProducts.length > 0 ? (
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
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No products available.
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
