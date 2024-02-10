import styles from "./Header.module.scss";
import { headerLinks } from "../../../constants/header-links";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles["logo-container"]}>
        <img
          className={styles["navbar-logo"]}
          src="https://reliancecompliance.ca/images/890fb8.png?v=1.0.1"
        ></img>
      </a>
      <ul className={styles["links-container"]}>
        {headerLinks.map((link) => {
          return (
            <Link className={styles["link"]}>
              <a href={link.route}>{link.text}</a>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Header;
