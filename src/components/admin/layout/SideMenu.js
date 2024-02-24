import styles from "./SideMenu.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className={styles["side-menu-container"]}>
      <div className={styles["side-menu-logo-container"]}>
        <img src={logo} className={styles["side-menu-logo"]}></img>
      </div>
      <div className={styles["side-menu-links-container"]}>
        <div className={styles["side-menu-link-container"]}>
          <Link
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "larger",
              textDecoration: "none",
              "&:hover": { color: "black" },
            }}
            to={"/admin/services"}
          >
            Services
          </Link>
        </div>
        <div className={styles["side-menu-link-container"]}>
          <Link
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "larger",
              textDecoration: "none",
              fontSize: "large",
            }}
            to={"/admin/services/create"}
          >
            Create Service
          </Link>
        </div>
        <div className={styles["side-menu-link-container"]}>
          <Link
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "larger",
              textDecoration: "none",
              fontSize: "large",
            }}
            to={"/admin/services/edit"}
          >
            Edit Service
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
