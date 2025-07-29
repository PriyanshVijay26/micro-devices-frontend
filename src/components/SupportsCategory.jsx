import { SupportCategoryCard } from "../components";
import { useAppContext } from "../context/AppContext";

const SupportsCategory = () => {
  const { drivers } = useAppContext();
  return (
    <>
      {/* Support Categories */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mt-20 md:pt-6 lg:pt-12 text-center lg:text-left lg:ml-[160px]">
        Product Drivers
      </h1>
      <div className="lg:max-w-[calc(100%-320px)] mx-auto md:px-6 lg:px-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center lg:mb-16">
        {drivers.map((driver, index) => (
          <SupportCategoryCard
            key={index}
            title={driver.title}
            desc={driver.desc}
            rows={driver.rows}
          />
        ))}
      </div>
    </>
  );
};
export default SupportsCategory;
