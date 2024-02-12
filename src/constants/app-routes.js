import RootLayout from "../components/app/layout/RootLayout";
import HomePage from "../components/app/pages/HomePage";
import AboutUs from "../components/app/pages/AboutUs";
import Sectors from "../components/app/pages/Sectors";
import Services from "../components/app/pages/Services";
import Pricing from "../components/app/pages/Pricing";
import ClientPortal from "../components/app/pages/ClientPortal";
import ContactUs from "../components/app/pages/ContactUs";

export const appRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/sectors", element: <Sectors /> },
      { path: "/services", element: <Services /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/client-portal", element: <ClientPortal /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
];
