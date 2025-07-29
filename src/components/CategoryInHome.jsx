import category_1 from "../assets/category_1.jpg";
import category_2 from "../assets/category_2.jpg";
import category_3 from "../assets/category_4.jpg";

const categories = [
  { id: 1, title: "Biometrics", img: category_1 },
  { id: 2, title: "GPS Receivers", img: category_2 },
  { id: 4, title: "Web Camera", img: category_3 },
];

const CategoryInHome = () => {
  return (
    <section className="py-12 bg-gray-100 px-6">
      {/* Heading and Description */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Product Categories</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Explore our wide range of biometric products, designed for security
          and efficiency.
        </p>
      </div>

      {/* Product Grid Container */}
      <div className="mx-auto lg:mx-[160px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center 
              transition-shadow duration-300 hover:shadow-[0px_8px_20px_rgba(0,0,0,0.4)]"
            >
              <img
                src={category.img}
                alt={category.title}
                className="w-[250px] h-[250px] object-cover rounded-lg"
              />
              <h2
                className="mt-4 text-xl font-semibold text-gray-900 
              transition-colors duration-300 group-hover:text-[#D40057]"
              >
                {category.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryInHome;
