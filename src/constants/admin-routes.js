import RootLayout from "../components/admin/layout/RootLayout";
import CreateService from "../components/admin/pages/CreateService";
import HomePage from "../components/admin/pages/HomePage";
import Services from "../components/admin/pages/Services";
import EditService from "../components/admin/pages/Services";

export const adminRoutes = [
  {
    path: "/admin",
    element: <RootLayout />,
    children: [
      { path: "/admin", element: <HomePage /> },
      { path: "/admin/services", element: <Services /> },
      { path: "/admin/services/create", element: <CreateService /> },
      { path: "/admin/services/:serviceId/edit", element: <EditService /> },
    ],
  },
];
