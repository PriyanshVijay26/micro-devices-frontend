import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import {
  About,
  Admin,
  Contact,
  Error,
  Home,
  Login,
  ProductsPage,
  Register,
  ResetPassword,
  Support,
} from "./pages";

import { SingleProductPage, SingleProductCategoryPage } from "./pages";
import ScrollToTop from "./components/ScrollToTop";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/product-category/:title",
    element: <SingleProductCategoryPage />,
  },
  {
    path: "/product/:productSlug",
    element: <SingleProductPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <AppProvider>
      <ScrollToTop router={router} />
      <RouterProvider router={router} />
    </AppProvider>
  );
};
export default App;
