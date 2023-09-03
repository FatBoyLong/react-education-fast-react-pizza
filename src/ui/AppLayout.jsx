import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

// AppLayout is a parent component of all components which we will use in the app
function AppLayout() {
  // Hook from react-router allowed us to get information about status of routes, like loading, submitting etc.
  const navigation = useNavigation();

  // Making variable isLoading for rendering loading spinner
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* Outlet renders current nested route */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
