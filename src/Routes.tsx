import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
