import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { register } from "swiper/element/bundle";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "./constants/admin-routes";
import { appRoutes } from "./constants/app-routes";

register();
const routes = createBrowserRouter([...adminRoutes, ...appRoutes]);

// const routesTest = [
//   {
//     path: "/admin",
//     element: <RootLayout />,
//     children: [
//       { path: "/admin", element: <HomePage /> },
//       { path: "/admin/services", element: <ServicesPage /> },
//       { path: "/admin/sectors", element: <SectorsPage /> },
//     ],
//   },
//   { path: "/login", element: <Login /> },
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/about", element: <AboutUs /> },
//       { path: "/sectors", element: <Sectors /> },
//       { path: "/services", element: <Services /> },
//       { path: "/pricing", element: <Pricing /> },
//       { path: "/client-portal", element: <ClientPortal /> },
//       { path: "/contact", element: <ContactUs /> },
//     ],
//   },
// ]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
