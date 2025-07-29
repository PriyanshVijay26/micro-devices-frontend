import { useAppContext } from "../context/AppContext";
import { ProductCategoryCard } from "../components";

const ProductsCategory = () => {
  const { categories } = useAppContext();

  return (
    <div className="w-full">
      {/* Product Categories */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mt-20 pt-12 text-center lg:text-left lg:ml-[160px]">
        Product Categories
      </h1>
      <div className="lg:max-w-[calc(100%-320px)] mx-auto px-6 lg:px-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <ProductCategoryCard
            key={index}
            img={category.img}
            title={category.title}
            desc={category.desc}
            link={`/product-category/${category.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
