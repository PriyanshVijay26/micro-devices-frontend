import { Navbar, Footer } from "../components";
import { Products, ProductsCategory } from "../components";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <ProductsCategory />
      <Products />
      <Footer />
    </>
  );
};

export default ProductsPage;
