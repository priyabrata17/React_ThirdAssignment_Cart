import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../component/Home";
import RootLayout from "../layout/RootLayout";
import Cart from "../component/Cart";
import NotFound from "../component/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/cart", element: <Cart /> }, // 404 route
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
