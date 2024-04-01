import RootLayout from "../components/admin/layout/RootLayout";
import HomePage from "../components/admin/pages/HomePage";
import ServicesList from "../components/admin/pages/services-pages/ServicesList";

export const adminRoutes = [
  {
    path: "/admin",
    element: <RootLayout />,
    children: [
      { path: "/admin", element: <HomePage /> },
      { path: "/admin/services", element: <ServicesList /> },
      // { path: "/admin/services/create", element: <CreateService /> },
      // { path: "/admin/services/:serviceId/edit", element: <EditService /> },
    ],
  },
];
