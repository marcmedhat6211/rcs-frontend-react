import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Fragment, useEffect } from "react";
import styles from "./RootLayout.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  useEffect(() => {
    toast("ana fel root layout");
  }, []);

  return (
    <Fragment>
      <SideMenu />
      <div className={styles["dashboard__main-container"]}>
        <Outlet />
      </div>
      <ToastContainer />
    </Fragment>
  );
};
export default RootLayout;
