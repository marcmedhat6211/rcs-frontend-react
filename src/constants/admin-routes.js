import RootLayout from "../components/admin/layout/RootLayout";
import HomePage from "../components/admin/pages/HomePage";
import ServicesPage from "../components/admin/pages/ServicesPage";
import SectorsPage from "../components/admin/pages/SectorsPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <RootLayout />,
    children: [
      { path: "/admin", element: <HomePage /> },
      { path: "/admin/services", element: <ServicesPage /> },
      { path: "/admin/sectors", element: <SectorsPage /> },
    ],
  },
];
