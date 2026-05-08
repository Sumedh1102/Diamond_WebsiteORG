import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Product from "./Pages/Product.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Contact from "./Pages/Contact.jsx";
import "./index.css";

import LooseDiamonds from "./Pages/LooseDiamonds.jsx";
import CertifiedDiamonds from "./Pages/CertifiedDiamonds.jsx";
import BrutingAndFluting from "./Pages/BrutingAndFluting.jsx";
import PerfectAssortment from "./Pages/PerfectAssortment.jsx";
import CalibratedParcels from "./Pages/CalibratedParcels.jsx";
import Jewellery from "./Pages/Jewellery.jsx";
import FourCs from "./Pages/FourCs.jsx";
import DiamondComparison from "./Pages/DiamondComparison.jsx";
import Process from "./Pages/Process.jsx";
import CalibratedServiceDetails from "./Pages/CalibratedServiceDetails.jsx";

import BlogDetail from "./Pages/BlogDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout route (Navbar + Footer)
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/loose-diamonds",
        element: <LooseDiamonds />
      },
      {
        path: "/certified-diamonds",
        element: <CertifiedDiamonds />
      },
      {
        path: "/bruting-and-fluting",
        element: <BrutingAndFluting />
      },
      {
        path: "/perfect-assortment",
        element: <PerfectAssortment />
      },
      {
        path: "/calibrated-parcels",
        element: <CalibratedParcels />
      },
      {
        path: "/calibrated-service-details",
        element: <CalibratedServiceDetails />
      },
      {
        path: "/jewellery",
        element: <Jewellery />
      },
      {
        path: "/education/4cs",
        element: <FourCs />
      },
      {
        path: "/education/comparison",
        element: <DiamondComparison />
      },
      {
        path: "/our-diamonds/natural/process",
        element: <Process />
      },
      {
        path: "/Blogs",
        element: <Blogs />
      },
      {
        path: "/blog/:slug",
        element: <BlogDetail />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
