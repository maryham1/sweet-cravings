import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayouts from "./ui/Applayouts";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { Loader as menuLoader } from "./features/menu/Menu";
import Order from "./features/order/Order";
import Login from "./features/Users/Login";
import Cart from "./features/cart/Cart";
import { ScrollContextComponent } from "./context/ScrollContext";
import { action as createOrderAction } from "./features/order/Order";
import OrderSuccess from "./features/order/OrderSuccess";
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
          action: createOrderAction,
        },
        {
          element: <Cart />,
          path: "/cart",
        },
        {
          element: <Login />,
          path: "login",
        },
        {
          path: "/order/success/:orderId", // 🔥 success page route
          element: <OrderSuccess />,
        },
      ],
    },
  ]);

  return (
    <ScrollContextComponent>
      <RouterProvider router={router} />
    </ScrollContextComponent>
  );
}

export default App;
