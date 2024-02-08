import RootLayout from "../components/app/layout/RootLayout";
import HomePage from "../components/app/pages/HomePage";

export const appRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
];
