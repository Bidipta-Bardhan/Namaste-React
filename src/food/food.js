import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenuCard from "./components/RestaurantMenuCard";

const AppLayout = () => (
  <div className="app-container">
    <HeaderComponent />
    <Outlet/>
  </div>
);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenuCard/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
