import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Pricing from "../Components/Pricing/Pricing";
import OurTeam from "../Components/OurTeam/OurTeam";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />

      },
      {
        path: '/About',
        element: <AboutUs />

      },
      {
        path: '/Pricing',
        element: <Pricing />

      },
      {
        path: '/team',
        element: <OurTeam />

      },

    ]
  }
])

export default router;