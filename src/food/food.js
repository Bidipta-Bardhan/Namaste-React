import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app-container">
      <HeaderComponent />
      <Outlet />
    </div>
  </Provider>
);
// Chunking/ Code Splitting/ Lazy Loading/ On demand loading / dynamic bundling/ dynamic import
const Grocery = lazy(() => import("./components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuCard />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
