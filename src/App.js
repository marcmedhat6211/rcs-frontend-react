import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { adminRoutes } from "./constants/admin-routes";
import { appRoutes } from "./constants/app-routes";
import { isAuthenticated } from "./services/auth-service";
import { useEffect } from "react";

const routes = createBrowserRouter([...adminRoutes, ...appRoutes]);

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, []);
  return <RouterProvider router={routes} />;
}

export default App;
