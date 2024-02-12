import styles from "./Header.module.scss";
import { headerLinks } from "../../../constants/header-links";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles["logo-container"]}>
        <img className={styles["navbar-logo"]} src={logo}></img>
      </Link>
      <ul className={styles["links-container"]}>
        {headerLinks.map((link) => {
          return (
            <Link
              to={link.route}
              key={Math.random()}
              className={styles["link"]}
            >
              {link.text}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
