import styles from "./SideMenu.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { sideLinks } from "../../../constants/side-links";

const SideMenu = () => {
  return (
    <aside className={styles["side-menu-container"]}>
      <div className={styles["side-menu-logo-container"]}>
        <img src={logo} className={styles["side-menu-logo"]} />
      </div>
      <ul className={styles["side-menu-links-container"]}>
        {sideLinks.map((sideLink) => {
          return (
            <li
              key={Math.random()}
              className={styles["side-menu-link-container"]}
            >
              <Link to={sideLink.route}>{sideLink.text}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default SideMenu;
