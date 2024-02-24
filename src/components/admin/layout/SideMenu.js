import styles from "./SideMenu.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className={styles["side-menu-container"]}>
      <div className={styles["side-menu-logo-container"]}>
        <img src={logo} className={styles["side-menu-logo"]}></img>
      </div>
      <ul className={styles["side-menu-links-container"]}>
        <li className={styles["side-menu-link-container"]}>
          <Link
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "larger",
              textDecoration: "none",
              // ":hover": { color: "black" },
            }}
            to={"/admin/services"}
          >
            Services
          </Link>
        </li>
        <li className={styles["side-menu-link-container"]}>
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
        </li>
        <li className={styles["side-menu-link-container"]}>
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
        </li>
      </ul>
    </aside>
  );
};
export default SideMenu;
