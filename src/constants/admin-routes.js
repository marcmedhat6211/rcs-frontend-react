import RootLayout from "../components/admin/layout/RootLayout";
import HomePage from "../components/admin/pages/HomePage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <RootLayout />,
    children: [{ path: "/admin", element: <HomePage /> }],
  },
];
