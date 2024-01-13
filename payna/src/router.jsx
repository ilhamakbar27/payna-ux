import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/layout/rootLayout";
import ShowProductById from "./components/showProductById";
import Pages from "./views/Pages";
import Products from "./components/Products";
import Hero3 from "./components/Hero3";
import SwiperTest from "./components/swiperTest";

// import Hero4 from "./components/Hero4";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/products/:id",
        element: <ShowProductById />,
      },
      {
        path: "/",
        element: <Pages />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/featured",
        element: <Hero3 />,
      },
      {
        path: "/showcase",
        element: <SwiperTest />,
      },
    ],
  },
]);

export default router;
