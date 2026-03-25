import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayouts from "./ui/Applayouts";
import Home from "./ui/Home";
import Menu from "./features/menu/menu";
import { Loader as menuLoader } from "./features/menu/menu";
import Order from "./features/order/order";
import Login from "./features/Users/Login";
import Cart from "./features/cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      element: <Applayouts />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Menu />,
          path: "/menu",
          loader: menuLoader,
        },
        {
          element: <Order />,
          path: "/order",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
        {
          element: <Login />,
          path: "login",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
