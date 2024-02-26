import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import { Fragment } from "react";
import styles from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <Fragment>
      <SideMenu />
      <div className={styles["dashboard__main-container"]}>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default RootLayout;
