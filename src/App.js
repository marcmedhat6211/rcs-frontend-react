import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { adminRoutes } from "./constants/admin-routes";
import { appRoutes } from "./constants/app-routes";

const routes = createBrowserRouter([...adminRoutes, ...appRoutes]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
