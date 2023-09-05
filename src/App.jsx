import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
// Importing loader function from Menu component for connecting it to Menu route
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// Modern way (version 6) of implementing routes. Check DOCS later.
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // Error element is active when path of any child route is wrong
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,

        // Passing Error element here for rendering error вместо Menu
        errorElement: <Error />,

        // Providing loader function to route
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        // On form submission will run action function
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
