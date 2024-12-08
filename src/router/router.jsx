import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import Pricing from "../Components/Pricing/Pricing";
import OurTeam from "../Components/OurTeam/OurTeam";
import Contact from "../Components/Contact/Contact";
import Services from "../Components/Services/Services";
import ServiceDetails from "../Components/Services/ServiceDetails";
import TeamPage from "../Components/TeamPage/TeamPage";
import TeamDetails from "../Components/TeamPage/TeamDetails/TeamDetails";
import Blogs from "../Components/Blog/Blogs";


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
      // {
      //   path: '/team',
      //   element: <OurTeam />

      // },
      {
        path: '/contact',
        element: <Contact />

      },
      {
        path: '/services',
        element: <Services />

      },
      {
        //services er vitor dinamic vabe dekhanor jonno amar aita korbo . ata jehegu dinamic vabe hobe tai ata ai vabe korbo akhane id diye khuja hobe 
        path: '/service-details/:id',
        element: <ServiceDetails />

      },
      {
        path: '/services',
        element: <Services />

      },
      {
        //services er vitor dinamic vabe dekhanor jonno amar aita korbo . ata jehegu dinamic vabe hobe tai ata ai vabe korbo akhane username diye khuja hobe 
        path: '/team-details/:username',
        element: <TeamDetails />

      },
      {
        path: '/team',
        element: <TeamPage />

      },
      {
        path: '/blogs',
        element: <Blogs />

      },

    ]
  }
])

export default router;